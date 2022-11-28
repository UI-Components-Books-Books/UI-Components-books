import PropTypes from 'prop-types'
import css from './Content.module.scss'

export const Content = ({ children, addClass, ...props }) => {
  return (
    <section className={`${css['c-content']} animate__animated animate__fadeInDown animate__faster ${addClass ?? ''}`} {...props}>
      {children}
    </section>
  )
}

Content.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  addClass: PropTypes.string
}
