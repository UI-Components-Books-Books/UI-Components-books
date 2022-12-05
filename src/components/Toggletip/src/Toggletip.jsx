import { useRef, useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import { getChildrenByType } from '../../../utils/validations/getChildrenType'

// Creación del contexto del componente padre Toggletip
export const ToggletipContext = createContext()

export const Toggletip = ({ children, isVisible }) => {
  // Estado que contrala la apertura o cierra del tooltip
  const [isOpen, setIsOpen] = useState(false)
  // Referencia del botón que abre el toggletip
  const refButton = useRef()

  /**
    * Función para abrir y cerrar el toggletip
    */
  const onOpen = () => setIsOpen(!isOpen)

  /**
    * Función para agregara la referencia del botón
    *
    * @param {HTMLElement} ref - Referencia del botón padre.
    */
  const setRefButton = (ref) => {
    if (!refButton.current) {
      refButton.current = ref
    }
  }

  useEffect(() => {
    // Si existe la propiedad isVisible actualiza el estado con ella.
    if (isVisible !== undefined) setIsOpen(isVisible)
  }, [isVisible])

  return (
    <ToggletipContext.Provider value={{ isOpen, onOpen, setRefButton, refButton }}>
      {/* Filtramos los children para aceptar solo ToggletipButton y ToggletipContent. */}
      {getChildrenByType(children, ['ToggletipButton', 'ToggletipContent'])}
    </ToggletipContext.Provider>
  )
}

Toggletip.defaultProps = {
  isVisible: false
}

Toggletip.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  isVisible: PropTypes.bool
}
