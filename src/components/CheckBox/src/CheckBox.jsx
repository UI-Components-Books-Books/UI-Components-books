import { useMemo, forwardRef } from 'react';
import PropTypes from 'prop-types';
import _uniqueId from 'lodash/uniqueId';

import { Icon } from '../../Icon';
import { typeValidation } from '../../../utils/validations/typeValidation';

import css from './CheckBox.module.scss';

// Generemos los diferentes iconos
// de acuerdo al estado del componente y a el tipo de este.
const getIconState = (type) => {
  const rightPath = (
    <path
      id="done_all"
      d="M14.7 35.9 3.5 24.7l2.15-2.15 9.05 9.05 2.15 2.15Zm8.5 0L12 24.7l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Zm0-8.5-2.15-2.15L33.9 12.4l2.15 2.15Z"
    />
  );

  const checkPath = <path id="check" d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />;

  const wrongPath = (
    <path
      id="close"
      d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"
    />
  );

  if (type === 'checkbox') {
    return {
      right: rightPath,
      wrong: wrongPath,
      normal: checkPath
    };
  } else {
    return {
      right: checkPath,
      wrong: wrongPath,
      normal: null
    };
  }
};

export const CheckBox = forwardRef(
  (
    { id, name, type, label, state, value, addClass, isDisabled, defaultChecked, onChange, __TYPE, inherit, ...args },
    ref
  ) => {
    /**
     * Se crea un ID para identificar el input y además
     * para pasarlo dentro la función onChange proveniente
     * de los props.
     */
    const checkboxId = useMemo(() => id || _uniqueId(`ui-${type}`), [id, type]);

    // Objeto con la lista de iconos que dependen del la propiedad state.
    const ICON_STATE = Object.freeze(getIconState(type));

    /**
     * Detecta cuando el input tiene un cambio y actualiza
     * tanto el estado como el valor pasado
     * a través de la propiedad onChange cuando
     * el input cambia.
     *
     * @param {HTMLInputElement} target - HTMLInputElement.
     */
    const onChangeCheckbox = ({ target }) => {
      if (!onChange) return;

      if (target.checked) {
        onChange({ id: target.id, value: target.value });
        return;
      }

      onChange({ id: target.id, value: '' });
    };

    return (
      <label
        htmlFor={checkboxId}
        className={`c-input-radio ${css['c-input']} u-flex ${addClass ?? ''}`}
        data-state={state}
        data-type={type}
        data-element={__TYPE}
        {...(!inherit && { ...args })}>
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
            {...(inherit && { ...args })}
            {...(defaultChecked && { checked: true })}
          />
          <div className={`${css['c-input__icon']} ${defaultChecked ? css['c-input-defaultChecked'] : ''} `}>
            {ICON_STATE[state] && (
              <Icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
                  {ICON_STATE[state]}
                </svg>
              </Icon>
            )}
          </div>
        </div>
        <span className={css['c-input__label']}>{label}</span>
      </label>
    );
  }
);

CheckBox.defaultProps = {
  name: 'checkbox',
  type: 'checkbox',
  label: 'Default checkbox label',
  state: 'normal',
  value: 'active',
  isDisabled: false,
  inherit: false,
  __TYPE: 'CheckBox'
};

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
  inherit: PropTypes.bool,
  onChange: PropTypes.func,
  __TYPE: typeValidation('CheckBox')
};
