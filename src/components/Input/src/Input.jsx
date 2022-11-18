import { forwardRef, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import _uniquedId from 'lodash/uniqueId'

import { typeValidation } from '../../../utils/validations/typeValidation'
import css from './Input.module.scss'

export const Input = forwardRef(({ id, type, value: valueProps, placeholder, label, addClass, isLabelVisible, isDisabled, isRequired, isReadOnly, onValue }, ref) => {
  // Utilizado para controlar el valor del input.
  const [value, setValue] = useState(valueProps || '')

  /**
    * Se crea un ID para identificar el input y además
    * para pasarlo dentro la función onValue proveniente
    * de los props.
    */
  const input = useMemo(() => id || _uniquedId('c-input-'), [id])

  /**
    * Detecta cuando el input tiene un cambio así actualizamos
    * el estado y si existe la propiedad onValue le pasamos
    * los parámetros id y value del input.
    *
    * @param {target} target - HTMLInputElement
    */
  const onChange = ({ target }) => {
    if (onValue) onValue({ id: input, value: target.value })
    setValue(target.value)
  }

  /**
    * Comprobamos el tipo de input,
    * si no se encuentra entonces no devolvemos nada.
    */
  if (!['text', 'email', 'password', 'date'].includes(type)) {
    return null
  }

  return (
    <label htmlFor={input} className={`${css['c-label']} ${addClass ?? ''}`}>
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
        className={css['c-input']}
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
  onValue: PropTypes.func,
  __TYPE: typeValidation('Input')
}
