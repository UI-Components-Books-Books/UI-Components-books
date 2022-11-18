import PropTypes from 'prop-types'
import { typeValidation } from '../../../utils/validations/typeValidation'
import css from './Input.module.scss'

export const InputLeftAddon = ({ children, addClass }) => {
  return <div className={`${css['c-input__left-addon']} ${addClass ?? ''}`}>{children}</div>
}

InputLeftAddon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  addClass: PropTypes.string,
  __TYPE: typeValidation('InputLeftAddon')
}

InputLeftAddon.defaultProps = {
  __TYPE: 'InputLeftAddon'
}
