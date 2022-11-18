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
      {children || <Icon name='arrow_drop_up' />}
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
