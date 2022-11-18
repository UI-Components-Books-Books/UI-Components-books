import PropTypes from 'prop-types'
import { getChildrenByType } from '../../../utils/validations/getChildrenType'

import css from './List.module.scss'

export const List = ({ children, addClass, ...props }) => {
  return (
    <ul className={`${css['c-List']} ${addClass ?? ''}`} {...props}>
      {getChildrenByType(children, ['ListItem'])}
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  addClass: PropTypes.string
}
