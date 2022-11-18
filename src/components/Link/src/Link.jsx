import PropTypes from 'prop-types'

export const Link = ({ children, link, addClass, isExternal, label, ...props }) => {
  return (
    <a
      aria-label={label}
      href={link}
      {...(addClass && { className: `${addClass}` })}
      {...(isExternal && { target: '_blank', rel: 'noopener' })}
      {...props}
    >
      {children}
    </a>
  )
}

Link.defaultProps = {
  label: 'Default label to link',
  isExternal: false,
  link: '#'
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node)
  ]),
  addClass: PropTypes.string,
  link: PropTypes.string,
  isExternal: PropTypes.bool,
  label: PropTypes.string.isRequired
}
