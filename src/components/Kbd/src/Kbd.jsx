import PropTypes from 'prop-types'
import css from './Kbd.module.scss'

export const Kbd = ({ children, addClass, ...props }) => {
  return (
    <kbd className={`${css['c-kbd']} ${addClass ?? ''}`} {...props}>
      {children}
    </kbd>
  )
}

Kbd.propTypes = {
  children: PropTypes.string,
  addClass: PropTypes.string
}
