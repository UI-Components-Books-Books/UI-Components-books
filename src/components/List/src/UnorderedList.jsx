import PropTypes from 'prop-types'
import { getChildrenByType } from '../../../utils/validations/getChildrenType'

export const UnorderedList = ({ children, addClass, ...props }) => {
  return (
    <ul {...(addClass && { className: `${addClass}` })} {...props}>
      {getChildrenByType(children, ['ListItem'])}
    </ul>
  )
}

UnorderedList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  addClass: PropTypes.string
}
