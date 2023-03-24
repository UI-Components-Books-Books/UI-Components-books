import PropTypes from 'prop-types'
import classnames from 'classnames'

import css from './Kbd.module.scss'

export const Kbd = ({ children, addClass, defaultStyle, ...props }) => {
  return (
    <kbd
      className={classnames({
        [css['c-kbd']]: !defaultStyle,
        [addClass]: addClass
      })}
      {...props}
    >
      {children}
    </kbd>
  )
}

Kbd.propTypes = {
  children: PropTypes.string,
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool
}
