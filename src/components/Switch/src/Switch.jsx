import { useState, useEffect, useId, forwardRef } from 'react'
import PropTypes from 'prop-types'

import css from './Switch.module.scss'

/**
 * Objeto utilizado para almacenar el valor
 * del keyCode de las teclas 'SPACE' y 'ENTER'.
 */
const KEYDOWN = Object.freeze({
  SPACE: 32,
  ENTER: 13
})

export const Switch = forwardRef(
  (
    {
      id,
      name,
      size,
      value,
      label,
      addClass,
      isDisabled,
      defaultChecked,
      isLabelVisible,
      onChange
    },
    ref
  ) => {
    // Estado utilizado para controlar si el input está checked.
    const [checked, setChecked] = useState(false)

    /**
     * Se crea un ID para identificar el input y además
     * para pasarlo dentro la función onChange proveniente
     * de los props.
     */
    const switchId = id || useId()

    /**
     * Detecta cuando el input tiene un cambio y actualiza
     * tanto el estado como el valor pasado
     * a través de la propiedad onChange cuando
     * el input cambia.
     *
     * @param {HTMLInputElement} target - HTMLInputElement.
     */
    const onChangeSwitch = ({ target }) => {
      setChecked(target.checked)

      if (!onChange) return

      if (target.checked) {
        onChange({ id: target.id, value: target.value })
        return
      }

      onChange({ id: target.id, value: '' })
    }

    /**
     * Función utilizada para actualizar
     * tanto el estado como el valor pasado
     * a través de la propiedad onChange cuando
     * el input cambia utilizando el teclado.
     *
     * @param {Event} e - Evento que se ejecuta al momento de presionar una tecla.
     */
    const onKeyDown = (e) => {
      if (
        (e.keyCode || e.which) === KEYDOWN.SPACE ||
        (e.keyCode || e.which) === KEYDOWN.ENTER
      ) {
        setChecked((prev) => {
          if (!onChange) return !prev

          if (!prev) {
            onChange({ id: switchId, value: `${value}` })
          } else {
            onChange({ id: switchId, value: '' })
          }

          return !prev
        })
      }
    }

    useEffect(() => {
      // se utiliza para cambiar el estado inicial a partir de la propiedad defaultChecked.
      if (defaultChecked) setChecked(!!defaultChecked)

      return () => {
        setChecked(false)
      }
    }, [defaultChecked])

    return (
      <label
        htmlFor={switchId}
        className={`${css['c-label']} ${css[`is-${size}`]}`}
      >
        <span className={`${!isLabelVisible && 'u-sr-only'}`}> {label} </span>
        <input
          id={switchId}
          ref={ref}
          role='switch'
          type='checkbox'
          name={name}
          value={value}
          checked={checked}
          aria-disabled={isDisabled}
          className={`${css['c-switch']} ${addClass ?? ''}`}
          onChange={onChangeSwitch}
          onKeyDown={onKeyDown}
          {...(isDisabled && { disabled: true })}
        />
      </label>
    )
  }
)

Switch.defaultProps = {
  size: 'md',
  name: 'switch',
  value: 'active',
  isDisabled: false,
  isLabelVisible: false,
  label: 'Default switch label'
}

Switch.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]),
  label: PropTypes.string,
  addClass: PropTypes.string,
  isDisabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  isLabelVisible: PropTypes.bool,
  onChange: PropTypes.func
}
