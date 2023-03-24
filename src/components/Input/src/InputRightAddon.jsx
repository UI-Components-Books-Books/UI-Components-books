import PropTypes from 'prop-types'
import classnames from 'classnames'

import { typeValidation } from '../../../utils/validations/typeValidation'
import css from './Input.module.scss'

export const InputRightAddon = ({ children, addClass, defaultStyle }) => {
  return (
    <div
      className={classnames({
        [css['c-input__right-addon']]: !defaultStyle,
        [addClass]: addClass
      })}
    >{children}
    </div>
  )
}

InputRightAddon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('InputRightAddon')
}

InputRightAddon.defaultProps = {
  __TYPE: 'InputRightAddon'
}
