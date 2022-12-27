import { useRef, useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'

// Creación del contexto del componente padre PopoverModal
export const PopoverModalContext = createContext()

export const PopoverModal = ({ children, isVisible, onOpen: onOpenProp }) => {
  // Estado que contrala la apertura o cierra del tooltip
  const [isOpen, setIsOpen] = useState(false)
  // Referencia del botón que abre el PopoverModal
  const refButton = useRef()

  /**
    * Función para abrir y cerrar el PopoverModal
    */
  const onOpen = () => {
    const newIsOpen = !isOpen

    if (onOpenProp) {
      onOpenProp(newIsOpen)
    }

    setIsOpen(newIsOpen)
  }
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
    <PopoverModalContext.Provider value={{ isOpen, onOpen, setRefButton, refButton }}>
      {children}
    </PopoverModalContext.Provider>
  )
}

PopoverModal.defaultProps = {
  isVisible: false
}

PopoverModal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.arrayOf(PropTypes.node), PropTypes.element, PropTypes.node]),
  isVisible: PropTypes.bool,
  onOpen: PropTypes.func
}
