import { Link as DSLink } from '@dts-stn/service-canada-design-system'
import { FieldInput } from '../../client-state/InputHelper'
import { numberToStringCurrency } from '../../i18n/api'
import { WebTranslations } from '../../i18n/web'
import { BenefitHandler } from '../../utils/api/benefitHandler'
import { FieldConfig, FieldType } from '../../utils/api/definitions/fields'
import { useTranslation } from '../Hooks'

export const YourAnswers: React.VFC<{
  title: string
  inputs: FieldInput[]
}> = ({ title, inputs }) => {
  const tsln = useTranslation<WebTranslations>()

  // allFieldData is the full configuration for ALL fields - not only the visible ones.
  const allFieldData: FieldConfig[] = BenefitHandler.getAllFieldData(
    tsln._language
  )

  /**
   * shouldDisplay
   *    Returns  False  when IncomeAvailable is Yes or OAS deferral is Delay
   *    Returns  True   for any other scenario
   */
  function shouldDisplay(input: FieldInput): boolean {
    const exceptions: String[] = [
      'incomeAvailable',
      'partnerIncomeAvailable',
      'oasDefer',
    ]
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
        {inputs.map((input) => {
          return shouldDisplay(input) ? (
            <div key={input.key} className="py-4 border-b-2 border-info-border">
              <div>{tsln.resultsQuestions[input.key]}</div>
              <div className="grid gap-0 grid-cols-3">
                <div className="col-span-2">
                  <strong
                    dangerouslySetInnerHTML={{ __html: getDisplayValue(input) }}
                  />
                </div>
                <div className="justify-self-end self-end">
                  <DSLink
                    id={`edit-${input.key}`}
                    href={`eligibility#${input.key}`}
                    text={tsln.resultsPage.edit}
                    target="_self"
                    ariaLabel={tsln.resultsEditAriaLabels[input.key]}
                  />
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

  /**
   * Accepts an "input object" (a two-item array with the FieldKey and the user's input),
   * and returns the string that should be displayed in the UI.
   */
  function getDisplayValue(input: FieldInput): string {
    const fieldData: FieldConfig = allFieldData.find(
      (fieldData) => fieldData.key === input.key
    )
    const fieldType: FieldType = fieldData.type
    switch (fieldType) {
      case FieldType.NUMBER:
        return input.key === 'oasAge'
          ? `${tsln.resultsEditAriaLabels[input.key]} ${input.value}`
          : input.value
      case FieldType.STRING:
        return input.value // no processing needed, display as-is
      case FieldType.CURRENCY:
        return numberToStringCurrency(Number(input.value), tsln._language, {
          rounding: 0,
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
      default:
        throw new Error(`field type not supported in YourAnswers: ${fieldType}`)
    }
  }

  return (
    <div className="fz-10">
      <div className="p-8 bg-emphasis rounded mt-8 md:mt-0 md:max-w-[380px]">
        <h3 className="h3" id="answers">
          {title}
        </h3>
        {getMainContent()}
      </div>
    </div>
  )
}
