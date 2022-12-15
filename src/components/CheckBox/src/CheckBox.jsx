import { useMemo, forwardRef } from 'react'
import PropTypes from 'prop-types'
import _uniqueId from 'lodash/uniqueId'

import { Icon } from '../../Icon'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './CheckBox.module.scss'

export const CheckBox = forwardRef(
  ({ id, name, type, label, state, value, addClass, isDisabled, defaultChecked, onChange, __TYPE, ...args }, ref) => {
    /**
       * Se crea un ID para identificar el input y además
       * para pasarlo dentro la función onChange proveniente
       * de los props.
       */
    const checkboxId = useMemo(() => id || _uniqueId(`ui-${type}`), [id, type])

    // Objeto con la lista de iconos que dependen del la propiedad state.
    const ICON_STATE = Object.freeze({
      right: 'done_all',
      wrong: 'close',
      normal: type === 'checkbox' ? 'check' : null
    })

    /**
       * Detecta cuando el input tiene un cambio y actualiza
       * tanto el estado como el valor pasado
       * a través de la propiedad onChange cuando
       * el input cambia.
       *
       * @param {HTMLInputElement} target - HTMLInputElement.
       */
    const onChangeCheckbox = ({ target }) => {
      if (!onChange) return

      if (target.checked) {
        onChange({ id: target.id, value: target.value })
        return
      }

      onChange({ id: target.id, value: '' })
    }

    return (
      <label
        htmlFor={checkboxId}
        className={`${css['c-input']} u-flex ${addClass ?? ''}`}
        data-state={state}
        data-type={type}
        data-element={__TYPE}
        {...args}
      >
        <div className={css['c-input__box']}>
          <input
            id={checkboxId}
            ref={ref}
            type={type}
            name={name}
            value={value}
            data-state={state}
            className={css['c-input__check']}
            onChange={onChangeCheckbox}
            {...(isDisabled && { disabled: true })}
            {...(defaultChecked && { checked: defaultChecked })}
          />
          <div className={css['c-input__icon']}>{ICON_STATE[state] && <Icon name={ICON_STATE[state]} />}</div>
        </div>
        <span className={css['c-input__label']}>{label}</span>
      </label>
    )
  }
)

CheckBox.defaultProps = {
  name: 'checkbox',
  type: 'checkbox',
  label: 'Default checkbox label',
  state: 'normal',
  value: 'active',
  isDisabled: false,
  __TYPE: 'CheckBox'
}

CheckBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.oneOf(['radio', 'checkbox']),
  label: PropTypes.string.isRequired,
  state: PropTypes.oneOf(['normal', 'right', 'wrong']),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
  addClass: PropTypes.string,
  isDisabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  onChange: PropTypes.func,
  __TYPE: typeValidation('CheckBox')
}
