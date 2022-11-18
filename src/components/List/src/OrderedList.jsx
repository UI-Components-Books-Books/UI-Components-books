import PropTypes from 'prop-types'
import { getChildrenByType } from '../../../utils/validations/getChildrenType'

export const OrderedList = ({ children, addClass, ...props }) => {
  return (
    <ol {...(addClass && { className: `${addClass}` })} {...props}>
      {getChildrenByType(children, ['ListItem'])}
    </ol>
  )
}

OrderedList.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  addClass: PropTypes.string
}
