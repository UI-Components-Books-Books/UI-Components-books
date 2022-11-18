import PropTypes from 'prop-types'

import { getChildrenByType } from '../../../utils/validations/getChildrenType'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './NumberInput.module.scss'

export const NumberInputStepper = ({ children, addClass }) => {
  return (
    <div className={`${css['c-number-input__stepper']} ${addClass ?? ''}`}>
      {/* Filtramos los children para solo aceptar de tipo NumberIncrementStepper y NumberDecrementStepper. */}
      {getChildrenByType(children, ['NumberIncrementStepper', 'NumberDecrementStepper'])}
    </div>
  )
}

NumberInputStepper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)]),
  addClass: PropTypes.string,
  __TYPE: typeValidation('NumberInputStepper')
}

NumberInputStepper.defaultProps = {
  __TYPE: 'NumberInputStepper'
}
