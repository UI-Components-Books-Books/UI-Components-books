import PropTypes from 'prop-types'

import { getChildrenByType } from '../../../utils/validations/getChildrenType'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Input.module.scss'

export const InputStyle = ({ children, addClass }) => {
  return (
    <div className={`${css['c-input__wrapper-style']} ${addClass ?? ''}`}>
      {getChildrenByType(children, ['InputLeftAddon', 'InputRightAddon', 'Input'])}
    </div>
  )
}

InputStyle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  addClass: PropTypes.string,
  __TYPE: typeValidation('InputStyle')
}

InputStyle.defaultProps = {
  __TYPE: 'InputStyle'
}
