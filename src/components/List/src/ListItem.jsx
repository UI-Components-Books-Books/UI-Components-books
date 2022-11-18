import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

import { typeValidation } from '../../../utils/validations/typeValidation'
import css from './List.module.scss'

export const ListItem = ({ children: childrenProps, addClass, __TYPE, ...props }) => {
  /**
    * Se recorren los hijos del componente para agregarle la clase
    * 'c-list-item__icon' si el hijo es de tipo Icon.
    */
  const children = Children.map(childrenProps, (child) => {
    if (child?.props?.__TYPE === 'Icon') {
      return cloneElement(child, { ...child.props, addClass: css['c-list-item__icon'] })
    }
    return child
  })

  return (
    <li {...(addClass && { className: `${addClass}` })} data-type={__TYPE} {...props}>
      {children}
    </li>
  )
}

ListItem.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]),
  addClass: PropTypes.string,
  __TYPE: typeValidation('ListItem')
}

ListItem.defaultProps = {
  __TYPE: 'ListItem'
}
