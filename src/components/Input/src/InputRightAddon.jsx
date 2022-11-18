import PropTypes from 'prop-types'
import { typeValidation } from '../../../utils/validations/typeValidation'
import css from './Input.module.scss'

export const InputRightAddon = ({ children, addClass }) => {
  return <div className={`${css['c-input__right-addon']} ${addClass ?? ''}`}>{children}</div>
}

InputRightAddon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  addClass: PropTypes.string,
  __TYPE: typeValidation('InputRightAddon')
}

InputRightAddon.defaultProps = {
  __TYPE: 'InputRightAddon'
}
