import PropTypes from 'prop-types'
import classnames from 'classnames'

import { getChildrenByType } from '../../../utils/validations/getChildrenType'
import css from './List.module.scss'

export const List = ({ children, addClass, defaultStyle, ...props }) => {
  return (
    <ul
      className={classnames({
        [css['c-List']]: !defaultStyle,
        [addClass]: addClass
      })}
      {...props}
    >
      {getChildrenByType(children, ['ListItem'])}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool
}
