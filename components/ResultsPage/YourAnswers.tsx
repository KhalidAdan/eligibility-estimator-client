import React, { useState } from 'react'
import { FieldInput } from '../../client-state/InputHelper'
import { Translations, numberToStringCurrency } from '../../i18n/api'
import { WebTranslations } from '../../i18n/web'
import { BenefitHandler } from '../../utils/api/benefitHandler'
import { FieldConfig, FieldType } from '../../utils/api/definitions/fields'
import { useTranslation } from '../Hooks'
import Link from 'next/link'
import { MonthsYears } from '../../utils/api/definitions/types'
import { Accordion } from '../Forms/Accordion'

export const YourAnswers: React.VFC<{
  title: string
  inputs: FieldInput[]
}> = ({ title, inputs }) => {
  const tsln = useTranslation<WebTranslations>()
  // allFieldData is the full configuration for ALL fields - not only the visible ones.
  const allFieldData: FieldConfig[] = BenefitHandler.getAllFieldData(
    tsln._language
  )
  const t = useTranslation<Translations>()

  // Group results into category for mobile view
  const categoryMapping = {
    [t.category.age]: [
      'age',
      'receiveOAS',
      'oasDefer',
      'oasDeferDuration',
      'oasAge',
    ],
    [t.category.income]: ['incomeAvailable', 'income'],
    [t.category.legal]: ['legalStatus'],
    [t.category.residence]: [
      'livingCountry',
      'livedOnlyInCanada',
      'yearsInCanadaSince18',
      'yearsInCanadaSinceOAS',
      'everLivedSocialCountry',
    ],
    [t.category.marital]: [
      'maritalStatus',
      'invSeparated',
      'partnerIncomeAvailable',
      'partnerIncome',
      'partnerBenefitStatus',
      'partnerAge',
      'partnerLegalStatus',
      'partnerLivingCountry',
      'partnerLivedOnlyInCanada',
      'partnerYearsInCanadaSince18',
    ],
  }

  const [accordionStates, setAccordionStates] = useState(() => {
    const initialState = {}
    Object.keys(categoryMapping).forEach((category) => {
      initialState[category] = false
    })
    return initialState
  })

  const toggleAccordion = (category) => {
    setAccordionStates((prevStates) => ({
      ...prevStates,
      [category]: !prevStates[category],
    }))
  }

  /**
   * shouldDisplay
   *    Returns  False  when IncomeAvailable is Yes
   *    Returns  True   for any other scenario
   */
  function shouldDisplay(input: FieldInput): boolean {
    const exceptions: String[] = ['incomeAvailable', 'partnerIncomeAvailable']
    return (
      !exceptions.includes(input.key) ||
      (exceptions.includes(input.key) && input.value === 'false')
    )
  }

  /**
   * Generates the main content. If no answers are found, we display that.
   * Otherwise, the content will be built.
   */
  function getMainContent(): JSX.Element {
    if (inputs.length === 0)
      return <div className="py-4">{tsln.resultsPage.noAnswersFound}</div>
    return (
      <>
        {inputs.map((input, index) => {
          const showBorder = index != inputs.length - 1
          const borderStyle = showBorder
            ? 'py-4 border-b border-info-border'
            : 'py-4'
          return shouldDisplay(input) ? (
            <div key={input.key} className={borderStyle}>
              <div>{tsln.resultsQuestions[input.key]}</div>
              <div className="grid gap-0 grid-cols-3">
                <div className="col-span-2">
                  <strong
                    dangerouslySetInnerHTML={{ __html: getDisplayValue(input) }}
                  />
                </div>
                <div className="justify-self-end self-end">
                  <Link href={`questions#${input.key}`}>
                    <a
                      className="ds-underline ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-leading-33px hover:ds-text-multi-blue-blue50b"
                      aria-label={tsln.resultsEditAriaLabels[input.key]}
                    >
                      {tsln.resultsPage.edit}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            ''
          )
        })}
      </>
    )
  }

  function getMainContentMobile(): JSX.Element {
    if (inputs.length === 0)
      return <div className="py-4">{tsln.resultsPage.noAnswersFound}</div>
    return (
      <>
        {Object.entries(categoryMapping).map(([category, keys]) => {
          const categoryInputs = inputs.filter(
            (input) => keys.includes(input.key) && shouldDisplay(input)
          )
          if (categoryInputs.length === 0) return null
          return (
            <Accordion
              key={category}
              title={category}
              isOpen={accordionStates[category]}
              onClick={() => toggleAccordion(category)}
            >
              {categoryInputs.map((input) => {
                return (
                  <div
                    key={input.key}
                    className="py-4 border-t border-info-border"
                  >
                    <div>{tsln.resultsQuestions[input.key]}</div>
                    <div className="grid gap-0 grid-cols-3">
                      <div className="col-span-2">
                        <strong
                          dangerouslySetInnerHTML={{
                            __html: getDisplayValue(input),
                          }}
                        />
                      </div>
                      <div className="justify-self-end self-end">
                        <Link href={`questions#${input.key}`}>
                          <a
                            className="ds-underline ds-text-multi-blue-blue70b ds-font-body ds-text-browserh5 ds-leading-33px hover:ds-text-multi-blue-blue50b"
                            aria-label={tsln.resultsEditAriaLabels[input.key]}
                          >
                            {tsln.resultsPage.edit}
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}
            </Accordion>
          )
        })}
      </>
    )
  }

  /**
   * Accepts an "input object" (a two-item array with the FieldKey and the user's input),
   * and returns the string that should be displayed in the UI.
   */
  function getDisplayValue(input: FieldInput): string {
    let deferral: MonthsYears
    let deferralVal: number

    const fieldData: FieldConfig = allFieldData.find(
      (fieldData) => fieldData.key === input.key
    )

    const fieldType: FieldType = fieldData.type

    switch (fieldType) {
      case FieldType.NUMBER:
        return input.key === 'oasAge'
          ? `${tsln.resultsEditAriaLabels[input.key]} ${input.value}&nbsp;${
              tsln._language === 'en' ? '' : 'ans'
            }`
          : input.value

      case FieldType.STRING:
        return input.value // no processing needed, display as-is

      case FieldType.CURRENCY:
        return numberToStringCurrency(Number(input.value), tsln._language, {
          rounding: 2,
        })

      case FieldType.DATE:
        // this will display the DATE fields as a NUMBER - i.e. the Month/Year will display as AGE!
        return String(Math.floor(Number(input.value)))

      case FieldType.DROPDOWN:
      case FieldType.DROPDOWN_SEARCHABLE:
        if ('values' in fieldData)
          return fieldData.values.find((value) => value.key === input.value)
            .text
        throw new Error(`values not found for field: ${input.key}`)

      case FieldType.RADIO:
        if (fieldData.type === FieldType.RADIO && 'values' in fieldData) {
          return fieldData.values.find((value) => value.key === input.value)
            .shortText
        }
        throw new Error(`values not found for field: ${input.key}`)

      case FieldType.DURATION:
        deferral = JSON.parse(input.value)
        deferralVal = deferral?.years * 12 + deferral?.months
        return deferralVal === 0
          ? `${tsln.no}`
          : deferralVal > 1
          ? `<div>${deferralVal} ${tsln.duration.months.toLowerCase()}<div>`
          : `<div>${deferralVal} ${tsln.resultsPage.month}</div>`
      default:
        throw new Error(`field type not supported in YourAnswers: ${fieldType}`)
    }
  }

  return (
    <div className="fz-10">
      <div className="p-8 sm:bg-emphasis rounded mt-8 md:mt-0 md:max-w-[380px]">
        <h3 className="h3" id="answers">
          {title}
        </h3>
        <div className="sm:hidden">{getMainContentMobile()}</div>
        <div className="hidden sm:block">{getMainContent()}</div>
      </div>
    </div>
  )
}
