import { useState, useEffect, createContext, useRef } from 'react'
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
  const [isOpen, setIsOpen] = useState(1)

  /**
    * Objeto para almacenar el valor de los ID
    * de cada sección y el contador que se utiliza
    * para agregar un ID a cada sección.
    */
  const IdToSection = useRef({
    index: [],
    counter: 0
  })

  /**
    * Se crea la función onToggle para agregar el ID de
    * la sección a mostrar.
    *
    * @param {Number} value - Id proveniente de la sección.
    */
  const onToggle = (value) => setIsOpen(value)

  /**
    * Devuelve "true" o "false" apartir de comparar
    * el ID de la sección con el ID de la sección
    * que está visible.
    *
    * @returns {(Boolean)}
    */
  const validation = (id) => isOpen === id

  useEffect(() => {
    // Si existe la propiedad defaultIndex actualiza el estado con ella.
    if (defaultIndex !== undefined) setIsOpen(defaultIndex)
  }, [defaultIndex])

  return (
    <PanelContext.Provider value={{ validation, onToggle, listId: IdToSection.current.index, currentSection: isOpen, IdToSection }}>
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
