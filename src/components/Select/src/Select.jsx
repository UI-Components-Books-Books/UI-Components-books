import { forwardRef, useId } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Icon } from '../../../components'
import { getChildrenByType } from '../../../utils/validations/getChildrenType'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Select.module.scss'

export const Select = forwardRef(
  (
    {
      children,
      id,
      placeholder,
      label,
      icon,
      addClass,
      isLabelVisible,
      isDisabled,
      isRequired,
      onChoise,
      defaultValue,
      defaultStyle
    },
    ref
  ) => {
    /**
     * Se crea un ID para identificar el select y además
     * para pasarlo dentro la función onChoise proveniente
     * de los props.
     */
    const select = id || useId()

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
      <label
        htmlFor={select}
        className={classnames({
          [css['c-select-label']]: !defaultStyle,
          [addClass]: addClass
        })}
      >
        <span className={`${!isLabelVisible && 'u-sr-only'}`}> {label} </span>

        <div className={css['c-select-wrapper']} data-class='c-select-wrapper'>
          <select
            id={select}
            ref={ref}
            name={select}
            defaultValue={defaultValue}
            className={classnames({
              [css['c-select']]: !defaultStyle
            })}
            data-class='c-select'
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
            ? (
              <Icon
                path={icon}
                data-class='c-select__icon'
                addClass={classnames({ [css['c-select__icon']]: !defaultStyle })}
              />
              )
            : (
              <Icon
                data-class='c-select__icon'
                addClass={classnames({ [css['c-select__icon']]: !defaultStyle })}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='48'
                  width='48'
                  viewBox='0 0 48 48'
                >
                  <path id='arrow_drop_down' d='m24 30-10-9.95h20Z' />
                </svg>
              </Icon>
              )}
        </div>
      </label>
    )
  }
)

Select.defaultProps = {
  placeholder: 'Select option',
  label: 'Select a option',
  defaultValue: 'default',
  isLabelVisible: false,
  __TYPE: 'Select'
}

Select.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
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
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('Select')
}
