import { InputHTMLAttributes, useEffect } from 'react'
import NumberFormat from 'react-number-format'
import { Tooltip } from '../Tooltip/tooltip'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  extraClasses?: string
}

/**
 * A form input field rendered by the component factory. If the field is a currency field (income / partner receiving OAS) then use a NumberFormat to render the number masked as a currency
 * Currently support text and number fields
 * @param props {InputProps}
 * @returns
 */
export const Input: React.VFC<InputProps> = (props) => {
  // only need to ru nthis once at component render, so no need for deps
  useEffect(() => {
    // blur the input element on scroll instead of changing the value!
    document.addEventListener('wheel', function (event) {
      const el = document.activeElement as any
      if (el?.type === 'number') {
        el.blur()
      }
    })
  }, [])

  return (
    <div className={`${props.extraClasses}`}>
      <label
        htmlFor={props.name}
        aria-label={props.name}
        data-testid="input-label"
        className="text-content font-bold mb-12"
      >
        {props.required && <span className="text-danger">*</span>} {props.label}
        {props.required && (
          <span className="text-danger font-bold ml-2">(required)</span>
        )}
        <Tooltip field={props.name} />
      </label>
      {props.name == 'income' || props.name == 'partnerReceivingOas' ? (
        <NumberFormat
          name={props.name}
          thousandSeparator={true}
          prefix="$"
          className="form-control text-content"
          data-testid={props.name}
          min={0}
          defaultValue={props.defaultValue as string}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      ) : (
        <input
          name={props.name}
          data-testid={props.name}
          {...props}
          min={0}
          className="form-control text-content"
        />
      )}
    </div>
  )
}
