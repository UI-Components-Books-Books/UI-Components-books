import PropTypes from 'prop-types'
import classnames from 'classnames'

import css from './Content.module.scss'

export const Content = ({ children, addClass, defaultStyle, ...props }) => {
  return (
    <section
      className={classnames({
        [css['c-content']]: !defaultStyle,
        [addClass]: addClass
      })}
      {...props}
    >
      {children}
    </section>
  )
}

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  defaultStyle: PropTypes.bool,
  addClass: PropTypes.string
}
