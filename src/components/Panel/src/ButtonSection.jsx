import { useContext, Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

import { PanelContext } from '../../Panel'

export const ButtonSection = ({ children, section, onClick }) => {
  // Obtenemos el método onToggle del contexto.
  const { onToggle } = useContext(PanelContext)

  /**
    * Función utilizada para realizar la navegación
    * a sección pasada a través de las props.
    * @param {event} e - evento
    */
  const handleClick = (e) => {
    onToggle(section)
    if (onClick) {
      onClick(e)
    }
  }

  /**
    * Agregamos el evento onClick al children pasado por
    * medio del compontente.
    */
  return Children.map(children, (child) => cloneElement(child, { ...child.props, onClick: handleClick }))
}

ButtonSection.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]).isRequired,
  section: PropTypes.number.isRequired,
  onClick: PropTypes.func
}
