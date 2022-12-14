import { useState, forwardRef, useMemo, useEffect } from 'react'
import PropTypes from 'prop-types'
import _uniquedId from 'lodash/uniqueId'

import { Icon } from '../../../components'
import { getChildrenByType } from '../../../utils/validations/getChildrenType'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Select.module.scss'

export const Select = forwardRef(({ children, id, placeholder, label, icon, addClass, isLabelVisible, isDisabled, isRequired, isReset, onChoise }, ref) => {
  // Usado para controlar el valor la opción seleccionada en el select.
  const [choise, setChoise] = useState()

  /**
    * Se crea un ID para identificar el select y además
    * para pasarlo dentro la función onChoise proveniente
    * de los props.
    */
  const select = useMemo(() => id || _uniquedId('c-select-'), [id])

  /**
    * Detecta cuando el select tiene un cambio así actualizamos
    * el estado y si existe la propiedad onChoise le pasamos
    * los parámetros id y value del input.
    *
    * @param {HTMLSelectElement} target - HTMLSelectElement
    */
  const onChange = ({ target }) => {
    if (onChoise) onChoise({ id: select, value: target.value })
    setChoise(target.value)
  }

  /**
   * Propiedad que reinicia el valor del estado
   * y de esa manera al componente Select
   */
  useEffect(() => {
    if (isReset) setChoise()

    return () => {
      isReset = false
    }
  }, [isReset])

  return (
    <label htmlFor={select} {...(addClass && { className: `${addClass}` })}>
      <span className={`${!isLabelVisible && 'u-sr-only'}`}> {label} </span>

      <div className={css['c-select-wrapper']}>
        <select
          id={select}
          ref={ref}
          name={select}
          value={choise}
          defaultValue='default'
          className={css['c-select']}
          onChange={onChange}
          disabled={isDisabled}
          required={isRequired}
        >
          <option value='default' disabled>
            {placeholder}
          </option>
          {/* Filtramos los children para solo aceptar de tipo option. */}
          {getChildrenByType(children, ['option', 'optgroup'])}
        </select>

        <Icon name={`${icon ?? 'arrow_drop_down'}`} addClass={css['c-select__icon']} />
      </div>
    </label>
  )
})

Select.defaultProps = {
  placeholder: 'Select option',
  label: 'Select a option',
  isLabelVisible: false,
  isReset: false,
  __TYPE: 'Select'
}

Select.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  id: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
  addClass: PropTypes.string,
  isLabelVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  isReset: PropTypes.bool,
  onChoise: PropTypes.func,
  __TYPE: typeValidation('Select')
}
