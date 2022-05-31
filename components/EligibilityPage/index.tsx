import { AccordionForm, Message } from '@dts-stn/decd-design-system'
import { debounce } from 'lodash'
import { observer } from 'mobx-react'
import type { Instance } from 'mobx-state-tree'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import type { Form } from '../../client-state/models/Form'
import type { FormField } from '../../client-state/models/FormField'
import { RootStore } from '../../client-state/store'
import { WebTranslations } from '../../i18n/web'
import { BenefitHandler } from '../../utils/api/benefitHandler'
import { FieldCategory } from '../../utils/api/definitions/enums'
import {
  FieldData,
  FieldKey,
  FieldType,
} from '../../utils/api/definitions/fields'
import MainHandler from '../../utils/api/mainHandler'
import { CurrencyField } from '../Forms/CurrencyField'
import { NumberField } from '../Forms/NumberField'
import { Radio } from '../Forms/Radio'
import { FormSelect } from '../Forms/Select'
import { TextField } from '../Forms/TextField'
import { useMediaQuery, useStore, useTranslation } from '../Hooks'

/**
 * A component that will receive backend props from an API call and render the data as an interactive form.
 * `/interact` holds the swagger docs for the API response, and `fieldData` is the iterable that contains the form fields to be rendered.
 */
export const EligibilityPage: React.VFC = observer(({}) => {
  console.log('rendering factory ')

  const router = useRouter()
  const locale = router.locale
  const tsln = useTranslation<WebTranslations>()
  const isMobile = useMediaQuery(992)

  const root: Instance<typeof RootStore> = useStore()
  const form: Instance<typeof Form> = root.form

  const input = root.getInputObject()
  input._language = locale
  const data = new MainHandler(input).results

  // on mobile only, captures enter keypress, does NOT submit form, and blur (hide) keyboard
  useEffect(() => {
    document.addEventListener('keydown', function (event) {
      if (isMobile && event.key == 'Enter') {
        const el = document.activeElement as HTMLInputElement
        el.blur()
      }
    })
  }, [isMobile])

  if ('error' in data) {
    // typeof data == ResponseError
    // TODO: when error, the form does not update. Repro: set age to 200, change marital from single to married, notice partner questions don't show
    console.log('Data update resulted in error:', data)
  }

  if ('fieldData' in data) {
    // typeof data == ResponseSuccess
    form.setupForm(data.fieldData)
    root.setSummary(data.summary)
  }

  // allFieldData is the full configuration for ALL fields - not only the visible ones.
  const allFieldData: FieldData[] = BenefitHandler.getAllFieldData(
    root.langBrowser
  )

  function getKeysByCategory(category: FieldCategory): FieldKey[] {
    return allFieldData
      .filter((value) => value.category.key === category)
      .map((value) => value.key)
  }

  const keyStepMap: { [x in Steps]: CardConfig } = {
    [Steps.STEP_1]: {
      title: tsln.category.age,
      buttonLabel: `${tsln.nextStep} - ${tsln.category.income}`,
      keys: getKeysByCategory(FieldCategory.AGE),
    },
    [Steps.STEP_2]: {
      title: tsln.category.income,
      buttonLabel: `${tsln.nextStep} - ${tsln.category.legal}`,
      keys: getKeysByCategory(FieldCategory.INCOME),
    },
    [Steps.STEP_3]: {
      title: tsln.category.legal,
      buttonLabel: `${tsln.nextStep} - ${tsln.category.residence}`,
      keys: getKeysByCategory(FieldCategory.LEGAL),
    },
    [Steps.STEP_4]: {
      title: tsln.category.residence,
      buttonLabel: `${tsln.nextStep} - ${tsln.category.marital}`,
      keys: getKeysByCategory(FieldCategory.RESIDENCE),
    },
    [Steps.STEP_5]: {
      title: tsln.category.marital,
      buttonLabel: tsln.getEstimate,
      keys: getKeysByCategory(FieldCategory.MARITAL),
    },
  }

  const [cardsValid, setCardsValid] = useState(null)

  function generateCardsValid(): { [x in Steps]?: { isValid: boolean } } {
    const inputs = root.getInputObject()
    return Object.keys(keyStepMap).reduce((result, step: Steps, index) => {
      const stepKeys: FieldKey[] = keyStepMap[step].keys
      const someKeysPresent: boolean = stepKeys.some((key) => inputs[key])
      const previousStep: { isValid: boolean } = result[`step${index}`]
      const previousStepExists: boolean = previousStep !== undefined
      const previousStepValid: boolean = previousStep?.isValid
      const isValid: boolean =
        someKeysPresent && (!previousStepExists || previousStepValid)
      result[step] = { isValid }
      return result
    }, {})
  }

  useEffect(() => {
    setCardsValid(generateCardsValid())
  }, [])

  function handleOnChange(step: Steps, field: FormFieldType, event) {
    field.handleChange(event)
    const inputs = root.getInputObject()
    const isValid = inputs[field.key] && !field.error

    setCardsValid((currentCardsData) => {
      const updatedCardsData = { ...currentCardsData }
      updatedCardsData[step].isValid = isValid
      return updatedCardsData
    })
  }

  function generateChildren(step: Steps, keys: FieldKey[]): CardChildren {
    const fields: FormFieldType[] = form.fields.filter((field) =>
      keys.includes(field.key)
    )
    return fields.map((field: FormFieldType) => {
      return (
        <div key={field.key}>
          {field.type === FieldType.NUMBER && (
            <div className="pb-4">
              <NumberField
                type={field.type}
                name={field.key}
                label={field.label}
                placeholder={field.placeholder ?? ''}
                onChange={debounce((e) => handleOnChange(step, field, e), 500)}
                value={field.value}
                helpText={field.helpText}
                required
              />
            </div>
          )}
          {field.type == FieldType.CURRENCY && (
            <div className="pb-4">
              <CurrencyField
                type={field.type}
                name={field.key}
                label={field.label}
                onChange={debounce((e) => handleOnChange(step, field, e), 500)}
                placeholder={field.placeholder ?? ''}
                value={field.value}
                helpText={field.helpText}
                required
              />
            </div>
          )}
          {field.type == FieldType.STRING && (
            <div className="pb-4">
              <TextField
                type={field.type}
                name={field.key}
                label={field.label}
                placeholder={field.placeholder ?? ''}
                onChange={debounce((e) => handleOnChange(step, field, e), 500)}
                value={field.value}
                error={field.error}
                required
              />
            </div>
          )}
          {(field.type == FieldType.DROPDOWN ||
            field.type == FieldType.DROPDOWN_SEARCHABLE) && (
            <div className="pb-4">
              <FormSelect
                name={field.key}
                field={field}
                placeholder={getPlaceholderForSelect(field, tsln)}
                value={null}
              />
            </div>
          )}
          {(field.type == FieldType.RADIO ||
            field.type == FieldType.BOOLEAN) && (
            <div className="pb-4">
              <Radio
                name={field.key}
                checkedValue={field.value}
                values={
                  field.type == 'boolean'
                    ? [
                        {
                          key: 'true',
                          text: tsln.yes,
                        },
                        {
                          key: 'false',
                          text: tsln.no,
                        },
                      ]
                    : field.options
                }
                keyforid={field.key}
                label={field.label}
                onChange={(e) => handleOnChange(step, field, e)}
                required
              />
            </div>
          )}
          {field.error && (
            <div className="mt-6 md:pr-12">
              <Message
                id={field.key}
                alert_icon_id={field.key}
                alert_icon_alt_text="warning icon"
                type="warning"
                message_heading={field.error}
                message_body={field.error}
              />
            </div>
          )}
          {field.info && (
            <div className="mt-6 md:pr-12">
              <Message
                id={field.key}
                alert_icon_id={field.key}
                alert_icon_alt_text="info icon"
                type="info"
                message_heading={field.info}
                message_body={field.info}
              />
            </div>
          )}
        </div>
      )
    })
  }

  function submitForm(e) {
    e.preventDefault()
    if (!form.validateAgainstEmptyFields(router.locale) && !form.hasErrors) {
      root.saveStoreState()
      router.push('/results')
    }
  }

  function generateCards(): Card[] {
    return Object.keys(keyStepMap).map((step: Steps, index) => {
      const cardConfig: CardConfig = keyStepMap[step]
      const children = generateChildren(step, cardConfig.keys)
      const card: Card = {
        id: step,
        title: cardConfig.title,
        buttonLabel: cardConfig.buttonLabel,
        children,
      }

      const processingLastCard = index === Object.keys(keyStepMap).length - 1
      if (processingLastCard) {
        return {
          ...card,
          buttonOnChange: submitForm,
        }
      }
      return card
    })
  }

  return (
    <>
      {cardsValid && (
        <div className="md:w-2/3">
          <AccordionForm
            id="mainForm"
            cardsState={cardsValid}
            cards={generateCards()}
          />
        </div>
      )}
    </>
  )
})

function getPlaceholderForSelect(
  field: FormFieldType,
  tsln: WebTranslations
): string {
  const text: string = tsln.selectText[field.key]
  return text ?? tsln.selectText.default
}

type CardConfig = { title: string; buttonLabel: string; keys: FieldKey[] }

type Card = {
  children: CardChildren
  id: string
  title: string
  buttonLabel: string
  buttonOnChange?: (e) => void
}

type CardChildren = JSX.Element[]

type FormFieldType = Instance<typeof FormField>

enum Steps {
  STEP_1 = 'step1',
  STEP_2 = 'step2',
  STEP_3 = 'step3',
  STEP_4 = 'step4',
  STEP_5 = 'step5',
}
