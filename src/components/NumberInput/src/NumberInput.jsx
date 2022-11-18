import { createContext, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getChildrenByType } from '../../../utils/validations/getChildrenType'
import css from './NumberInput.module.scss'

// Creación del contexto utilizado en el componente
export const NumberInputContext = createContext()

export const NumberInput = ({ children, addClass, keepWithinRange, defaultValue, min, max, step, onValue }) => {
  // Utilizado para controlar el valor del input.
  const [counter, setCounter] = useState(defaultValue || 0)

  /**
    * Función que usa para incrementar el valor del input.
    * el valor a incrementar depende del valor del step.
    */
  const onIncrementValue = () => {
    if (keepWithinRange && counter > max) {
      return setCounter(max)
    }
    setCounter((value) => value + step)
  }

  /**
    * Función que usa para disminuir el valor del input
    * el valor a incrementar depende del valor del step.
    */
  const onDecrementValue = () => {
    if (keepWithinRange && counter < min) {
      return setCounter(min)
    }
    setCounter((value) => value - step)
  }

  /**
    * Función callback que se utiliza para cambiar el valor
    * del input apartir del valor pasado por medio de esta.
    *
    * @param {number} value - valor del contador
    */
  const onChangeValue = (value) => setCounter(value)

  /**
    *
    * Función que se utiliza para comprobar si el valor de las
    * propiedades min o max es igual al valor del contador.
    *
    * @param {number} prop
    * @returns {boolean} - Retorna un valor booleano
    */
  const validate = (prop) => keepWithinRange && counter === prop

  useEffect(() => {
    // Si existe la propiedad onAllValue emita el valor del estado.
    if (onValue) onValue(counter)
  }, [counter, onValue])

  return (
    <NumberInputContext.Provider
      value={{
        counter,
        min: min || Number.MIN_SAFE_INTEGER,
        max: max || Number.MAX_SAFE_INTEGER,
        validate,
        onChangeValue,
        onIncrementValue,
        onDecrementValue
      }}
    >
      <div className={`${css['c-number-input']} ${addClass ?? ''}`}>{getChildrenByType(children, ['NumberInputField', 'NumberInputStepper'])}</div>
    </NumberInputContext.Provider>
  )
}

NumberInput.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  addClass: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  defaultValue: PropTypes.number,
  step: PropTypes.number,
  onValue: PropTypes.func,
  keepWithinRange: PropTypes.bool
}

NumberInput.defaultProps = {
  step: 1
}
