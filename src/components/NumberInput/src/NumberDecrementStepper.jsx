import { useContext } from 'react'
import PropTypes from 'prop-types'

import { Icon, NumberInputContext } from '../../../components'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './NumberInput.module.scss'

export const NumberDecrementStepper = ({ children, addClass, label }) => {
  /**
    * Se obtienen las propiedades onDecrementValue, validate y min
    * del contexto generado por el componente NumberInput.
    */
  const { onDecrementValue, validate, min } = useContext(NumberInputContext)

  return (
    <button
      tabIndex={-1}
      onClick={onDecrementValue}
      disabled={validate(min)}
      aria-label={`${label ?? 'Decrementar valor'}`}
      className={`${css['c-number-input__button']} ${addClass ?? ''}`}
    >
      {children ||
        <Icon>
          <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
            <path id='arrow_drop_down' d='m24 30-10-9.95h20Z' />
          </svg>
        </Icon>}
    </button>
  )
}

NumberDecrementStepper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.arrayOf(PropTypes.element)]),
  addClass: PropTypes.string,
  __TYPE: typeValidation('NumberDecrementStepper'),
  label: PropTypes.string
}

NumberDecrementStepper.defaultProps = {
  __TYPE: 'NumberDecrementStepper'
}
