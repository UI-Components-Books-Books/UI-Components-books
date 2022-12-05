import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../../Icon'
import { iconList } from '../../../utils/icons/iconsList'

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
    ...others
  } = props

  return (
    <button
      ref={ref}
      className={`${css['c-button']} ${css[`c-${variant}`]} ${css[`c-${size}`]} ${icon && icon.name && hasAriaLabel ? css['c-round'] : ''} 
        ${icon && icon.position === 'right' ? css['c-reverse'] : ''} ${addClass ?? ''}`}
      disabled={disabled}
      type={type}
      onClick={onClick}
      {...(hasAriaLabel && { 'aria-label': `${label}` })}
      {...others}
    >
      {children}
      {icon && <Icon name={icon.name} size={icon.size} />}
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
    name: PropTypes.oneOf(iconList),
    size: PropTypes.oneOf(['small', 'normal', 'big']),
    position: PropTypes.oneOf(['left', 'right'])
  }),
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  addClass: PropTypes.string
}

Button.defaultProps = {
  label: 'Button',
  size: 'normal',
  variant: 'primary',
  type: 'button',
  hasAriaLabel: false
}
