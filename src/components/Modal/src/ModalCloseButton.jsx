import { useContext, cloneElement } from 'react'
import PropTypes from 'prop-types'

import { ModalContext } from '../../Modal'

export const ModalCloseButton = ({ children, onClick }) => {
  /**
   * Se obtienen la propiedad onCloseModal del contexto generado por el componente Modal.
   */
  const { onClose } = useContext(ModalContext)

  /**
   * Función creada para permitir que el
   * componente pueda ejecutar otro método
   * en el evento onClick además del onCloseModal.
   * @param {Event} event
   */
  const handleClick = (event) => {
    onClick?.(event)
    onClose?.()
  }

  /**
   * Agregamos el evento onClick al children pasado por
   * medio del compontente.
   */
  return cloneElement(children, { ...children.props, onClick: handleClick })
}

ModalCloseButton.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  onClick: PropTypes.func
}
