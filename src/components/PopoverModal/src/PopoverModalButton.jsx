import { useContext, cloneElement, Children, isValidElement } from 'react'
import PropTypes from 'prop-types'

import { PopoverModalContext } from '../../../components'
import { typeValidation } from '../../../utils/validations/typeValidation'

export const PopoverModalButton = ({ children }) => {
  // Obtenemos la función onOpen y setRefButton del contexto
  const { onOpen, setRefButton } = useContext(PopoverModalContext)

  // Si tiene más de un hijo no retornar nada.
  if (Children.count(children) > 1) {
    return null
  }

  const returnElements = (child) => {
    if (!isValidElement(child)) return null
    // Agregamos las propiedades ref y onClick en el hijo
    return cloneElement(child, {
      ...child.props,
      ref: setRefButton,
      onClick: onOpen
    })
  }

  return Children.map(children, returnElements)
}

PopoverModalButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node
  ]),
  __TYPE: typeValidation('PopoverModalButton')
}

PopoverModalButton.defaultProps = {
  __TYPE: 'PopoverModalButton'
}
