import { useContext, cloneElement, Children, isValidElement } from 'react'
import PropTypes from 'prop-types'

import { PopoverModalContext } from '../../../components'

export const PopoverModalButton = ({ children, onClick }) => {
  // Obtenemos la función onOpen y setRefButton del contexto
  const { onOpen, setRefButton } = useContext(PopoverModalContext)

  // Si tiene más de un hijo no retornar nada.
  if (Children.count(children) > 1) {
    return null
  }

  /**
    * Función utilizada para abrir el popover
    * además de lanzar la función onClick que
    * viene de los props.
    *
    * @param {event} e - evento
    */
  const handleClick = (e) => {
    onOpen()
    if (onClick) {
      onClick(e)
    }
  }

  const returnElements = (child) => {
    if (!isValidElement(child)) return null
    // Agregamos las propiedades ref y onClick en el hijo
    return cloneElement(child, {
      ...child.props,
      ref: setRefButton,
      onClick: handleClick
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
  onClick: PropTypes.func
}
