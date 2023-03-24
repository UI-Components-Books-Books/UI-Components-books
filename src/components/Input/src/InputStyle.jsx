import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getChildrenByType } from '../../../utils/validations/getChildrenType'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Input.module.scss'

export const InputStyle = ({ children, addClass, defaultStyle }) => {
  return (
    <div
      className={classnames({
        [css['c-input__wrapper-style']]: !defaultStyle,
        [addClass]: addClass
      })}
    >
      {getChildrenByType(children, ['InputLeftAddon', 'InputRightAddon', 'Input'])}
    </div>
  )
}

InputStyle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('InputStyle')
}

InputStyle.defaultProps = {
  __TYPE: 'InputStyle'
}
