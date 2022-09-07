import { InputHTMLAttributes } from 'react'
import { TypedKeyAndText } from '../../i18n/api'
import { Tooltip } from '../Tooltip/tooltip'
import { ErrorLabel } from './validation/ErrorLabel'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  keyforid: string
  values: TypedKeyAndText<string>[]
  label: string
  checkedValue?: string
  helpText?: string
  error?: string
  setValue(value: string): void
}

/**
 * A form input radio field that is rendered by the component factory.
 * @param props {InputProps}
 * @returns
 */
export const Radio: React.VFC<InputProps> = ({
  name,
  label,
  checkedValue,
  onChange,
  values,
  keyforid,
  helpText,
  error,
  setValue,
}) => {
  return (
    <div className="radio">
      <div>
        <label
          htmlFor={name}
          aria-label={name}
          data-testid="radio-label"
          className="inline mb-2.5 flex-nowrap"
        >
          <span
            className="mb-1.5 text-content font-bold question-link"
            dangerouslySetInnerHTML={{ __html: label }}
          />
          <p className="ds-inline ds-text-error-border-red ds-text-xl ds-font-medium pl-2">
            (Required)
          </p>
        </label>
        {helpText && (
          <div
            className="ds-font-body ds-text-lg ds-leading-22px ds-font-medium ds-text-multi-neutrals-grey90a ds-mb-4"
            dangerouslySetInnerHTML={{ __html: helpText }}
          />
        )}
      </div>

      <Tooltip field={name} />

      {error && <ErrorLabel errorMessage={error} />}
      {values.map((val, index) => (
        <div
          key={index}
          className="flex items-center mb-2 md:mb-[12px] last:mb-0"
        >
          <input
            type="radio"
            data-testid="radio"
            id={`${keyforid}-${index}`}
            name={`${keyforid}`}
            className="hidden -ml-4"
            value={val.key}
            onChange={onChange}
            required
            checked={checkedValue === correctForBooleans(val.key)}
          />
          <label
            htmlFor={`${keyforid}-${index}`}
            className="radio flex items-center focus:inherit"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setValue(val.key)}
          >
            <span className="w-8 h-8 inline-block mr-3.5 rounded-full border border-form-border min-w-[32px] bg-white" />
            <p className="text-content ">{val.text}</p>
          </label>
        </div>
      ))}
    </div>
  )
}

const correctForBooleans = (value: string) => {
  switch (value) {
    case 'Yes':
      return 'true'
    case 'No':
      return 'false'
    case 'Oui':
      return 'true'
    case 'Non':
      return 'false'
    default:
      return value
  }
}
