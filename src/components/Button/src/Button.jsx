import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Icon } from '../../Icon'

import css from './Button.module.scss'

export const Button = forwardRef((props, ref) => {
  const {
    label,
    size,
    icon,
    type,
    variant,
    hasAriaLabel,
    disabled,
    onClick,
    children,
    addClass,
    defaultStyle,
    ...others
  } = props

  return (
    <button
      ref={ref}
      className={classnames({
        [`${css['c-button']} ${css[`c-${variant}`]} ${css[`c-${size}`]}`]: !defaultStyle,
        [css['c-round']]: icon && icon.path && hasAriaLabel,
        [css['c-reverse']]: icon && icon.position === 'right',
        [addClass]: addClass
      })}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...(hasAriaLabel && { 'aria-label': `${label}` })}
      {...others}
    >
      {children}
      {icon && <Icon path={icon.path} size={icon.size} />}
      {!hasAriaLabel ? label : null}
    </button>
  )
})

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]),
  label: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'no-line']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  hasAriaLabel: PropTypes.bool,
  icon: PropTypes.shape({
    path: PropTypes.string,
    size: PropTypes.oneOf(['small', 'normal', 'big']),
    position: PropTypes.oneOf(['left', 'right'])
  }),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool
}

Button.defaultProps = {
  size: 'normal',
  variant: 'primary',
  type: 'button',
  hasAriaLabel: false
}
