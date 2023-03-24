import { forwardRef, useId } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { typeValidation } from '../../../utils/validations/typeValidation'
import css from './Input.module.scss'

export const Input = forwardRef(({ id, type, value, placeholder, label, addClass, isLabelVisible, isDisabled, isRequired, isReadOnly, defaultStyle, onValue }, ref) => {
  /**
    * Se crea un ID para identificar el input y además
    * para pasarlo dentro la función onValue proveniente
    * de los props.
    */
  const input = id || useId()

  /**
    * Detecta cuando el input tiene un cambio así actualizamos
    * el estado y si existe la propiedad onValue le pasamos
    * los parámetros id y value del input.
    *
    * @param {target} target - HTMLInputElement
    */
  const onChange = ({ target }) => {
    if (onValue) onValue({ id: input, value: target.value })
  }

  /**
    * Comprobamos el tipo de input,
    * si no se encuentra entonces no devolvemos nada.
    */
  if (!['text', 'email', 'password', 'date'].includes(type)) {
    return null
  }

  return (
    <label
      htmlFor={input}
      className={classnames({
        [css['c-label']]: !defaultStyle,
        [addClass]: addClass
      })}
    >
      <span className={`${!isLabelVisible && 'u-sr-only'}`}> {label} </span>

      <input
        id={input}
        ref={ref}
        type={type}
        name={input}
        value={value}
        disabled={isDisabled}
        required={isRequired}
        placeholder={placeholder}
        autoComplete='off'
        onChange={onChange}
        className={classnames({
          [css['c-input']]: !defaultStyle
        })}
        {
          ...(isReadOnly && { readOnly: isReadOnly, 'aria-readonly': isReadOnly })
        }
      />
    </label>
  )
})

Input.defaultProps = {
  type: 'text',
  placeholder: 'Default placeholder',
  label: 'Default input label',
  isLabelVisible: false,
  __TYPE: 'Input'
}

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.oneOf(['text', 'email', 'password', 'date']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  isLabelVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  isReadOnly: PropTypes.bool,
  defaultStyle: PropTypes.bool,
  onValue: PropTypes.func,
  __TYPE: typeValidation('Input')
}
