import { useContext } from 'react'
import PropTypes from 'prop-types'

import { Icon, NumberInputContext } from '../../../components'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './NumberInput.module.scss'

export const NumberIncrementStepper = ({ children, addClass, label }) => {
  /**
    * Se obtienen las propiedades onDecrementValue, validate y min
    * del contexto generado por el componente NumberInput.
    */
  const { onIncrementValue, validate, max } = useContext(NumberInputContext)

  return (
    <button
      tabIndex={-1}
      onClick={onIncrementValue}
      disabled={validate(max)}
      aria-label={`${label ?? 'Incrementar valor'}`}
      className={`${css['c-number-input__button']} ${addClass ?? ''}`}
    >
      {children ||
        <Icon>
          <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
            <path id='arrow_drop_up' d='m14 28 10-10.05L34 28Z' />
          </svg>
        </Icon>}
    </button>
  )
}

NumberIncrementStepper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.arrayOf(PropTypes.element)]),
  addClass: PropTypes.string,
  __TYPE: typeValidation('NumberIncrementStepper'),
  label: PropTypes.string
}

NumberIncrementStepper.defaultProps = {
  __TYPE: 'NumberIncrementStepper'
}
