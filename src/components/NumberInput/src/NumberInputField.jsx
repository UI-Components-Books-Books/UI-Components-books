import { useContext, useId, forwardRef } from 'react'
import PropTypes from 'prop-types'

import { NumberInputContext } from '../../NumberInput'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './NumberInput.module.scss'

export const NumberInputField = forwardRef(
  ({ id, name, label, pattern, addClass, isLabelVisible }, ref) => {
    /**
     * Se obtienen las propiedades counter, onChangeValue, onIncrementValue, onDecrementValue,
     * min y max del contexto generado por el componente NumberInput.
     */
    const {
      counter,
      onChangeValue,
      onIncrementValue,
      onDecrementValue,
      min,
      max
    } = useContext(NumberInputContext)

    /**
     * Se crea un ID para identificar el input.
     */
    const input = id || useId()

    /**
     * Se crea un objeto que no se puede cambiar para
     * almacenar el keyCode de las teclas up, down, end y home.
     */
    const KEYCODE = Object.freeze({
      UP: 38,
      DOWN: 40,
      END: 35,
      HOME: 36
    })

    /**
     * Función que se ejecuta al cambio del input.
     * además envia el valor actual del input al método
     * onChangeValue.
     *
     * @param {HTMLInputElement} Elemento input
     */
    const onChange = ({ target }) => {
      if (!isNaN(target.value) && target.value) {
        return onChangeValue(parseInt(target.value))
      }
      onChangeValue(0)
    }

    /**
     * Función que se ejecuta con el evento onKeyDown,
     * utilizada para controlar el NumberInput con las teclas
     * cumpliendo con la accesibilidad del componente.
     *
     * @param {Event} e Evento
     */
    const onKeyDown = (e) => {
      switch (e.keyCode || e.which) {
        case KEYCODE.UP:
          onIncrementValue()
          break

        case KEYCODE.DOWN:
          onDecrementValue()
          break

        case KEYCODE.END:
          onChangeValue(max)
          break

        case KEYCODE.HOME:
          onChangeValue(min)
          break

        default:
          return null
      }
    }

    return (
      <label
        htmlFor={input}
        className={`${css['c-number-input__label']} ${addClass ?? ''}`}
      >
        <span className={`${!isLabelVisible && 'u-sr-only'}`}> {label} </span>

        <input
          id={input}
          ref={ref}
          type='text'
          name={name}
          role='spinbutton'
          inputMode='decimal'
          pattern={pattern}
          autoCorrect='off'
          autoComplete='off'
          className={css['c-number-input__input']}
          onChange={onChange}
          onKeyDown={onKeyDown}
          {...(counter || counter === 0
            ? {
                value: counter,
                'aria-valuemax': max,
                'aria-valuemin': min,
                'aria-valuenow': counter,
                'aria-valuetext': `${counter}`
              }
            : { value: '' })}
        />
      </label>
    )
  }
)

NumberInputField.defaultProps = {
  name: 'number-input-field',
  label: 'Default input number',
  pattern: '[0-9]*(.[0-9]+)?',
  __TYPE: 'NumberInputField'
}

NumberInputField.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  pattern: PropTypes.string,
  addClass: PropTypes.string,
  isLabelVisible: PropTypes.bool,
  __TYPE: typeValidation('NumberInputField')
}
