import { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import _uniquedId from 'lodash/uniqueId'

import { Icon } from '../../../components'
import { getChildrenByType } from '../../../utils/validations/getChildrenType'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Select.module.scss'

export const Select = forwardRef(({ children, id, placeholder, label, icon, addClass, isLabelVisible, isDisabled, isRequired, onChoise, defaultValue }, ref) => {
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
  }

  return (
    <label htmlFor={select} {...(addClass && { className: `${addClass}` })}>
      <span className={`${!isLabelVisible && 'u-sr-only'}`}> {label} </span>

      <div className={css['c-select-wrapper']}>
        <select
          id={select}
          ref={ref}
          name={select}
          defaultValue={defaultValue}
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

        {icon
          ? <Icon path={icon} addClass={css['c-select__icon']} />
          : (
            <Icon addClass={css['c-select__icon']}>
              <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
                <path id='arrow_drop_down' d='m24 30-10-9.95h20Z' />
              </svg>
            </Icon>
            )}
      </div>
    </label>
  )
})

Select.defaultProps = {
  placeholder: 'Select option',
  label: 'Select a option',
  defaultValue: 'default',
  isLabelVisible: false,
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
  onChoise: PropTypes.func,
  defaultValue: PropTypes.string,
  __TYPE: typeValidation('Select')
}
