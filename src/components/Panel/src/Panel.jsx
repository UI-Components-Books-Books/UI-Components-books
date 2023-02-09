import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'

import css from './Panel.module.scss'

/**
 * Creamos un contexto para proveer a ciertos
 * componentes hijos las funcionalidades creadas
 * acá en el componente padre.
 */
export const PanelContext = createContext()

export const Panel = ({ children, defaultIndex, addClass }) => {
  // Controla el estado de abierto / cerrado de las secciones.
  const [isOpen, setIsOpen] = useState(null)

  /**
    * Array para almacenar el valor de los ID
    * de cada sección.
    */
  const [IdToSection, setIdToSection] = useState([])

  /**
   * Utilizada para actualizar el estado con el ID de cada sección
   *
   * @param {Number} id - ID sección
   * @returns void
   */
  const addNewIdToSection = (id) => setIdToSection((prev) => [...prev, id])

  /**
    * Se crea la función onToggle para agregar el ID de
    * la sección a mostrar.
    *
    * @param {Number} value - Id proveniente de la sección.
    */
  const onToggle = (value) => setIsOpen(IdToSection[value])

  /**
   * Devuelve "true" o "false" apartir de comparar
   * el ID de la sección con el ID de la sección
   * que está visible.
   *
   * @returns {(Boolean)}
   */
  const validation = (id) => isOpen === id

  useEffect(() => {
    if (IdToSection.length === 0) return

    // Si existe la propiedad defaultIndex actualiza el estado con ella.
    // de otra manera utiliza el valor en la posición '0' del IdToSection
    if (defaultIndex !== undefined) {
      onToggle(defaultIndex - 1)
    } else {
      setIsOpen(IdToSection[0])
    }
  }, [defaultIndex, IdToSection])

  return (
    <PanelContext.Provider value={{ validation, onToggle, listId: IdToSection, currentSection: isOpen, addNewIdToSection }}>
      <div className={`${css['c-panel']} ${addClass ?? ''} class-video-interpreter-ui-panel`}>{children}</div>
    </PanelContext.Provider>
  )
}

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string
  ]),
  defaultIndex: PropTypes.number,
  addClass: PropTypes.string
}
