import { useState, useEffect, createContext, Children, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'

import css from './Panel.module.scss'

/**
 * Creamos un contexto para proveer a ciertos
 * componentes hijos las funcionalidades creadas
 * acá en el componente padre.
 */
export const PanelContext = createContext()

export const Panel = ({ children: ChildrenProps, defaultIndex, addClass }) => {
  // Controla el estado de abierto / cerrado de las secciones.
  const [isOpen, setIsOpen] = useState(1)

  /**
    * Objeto para almacenar el valor de los ID
    * de cada sección y el contador que se utiliza
    * para agregar un ID a cada sección.
    */
  const IdToSection = {
    index: [],
    counter: 0
  }

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

  /**
    * Utilizamos la Children API, para agregar
    * a cada sección un ID.
    */
  const children = Children.map(ChildrenProps, (child) => {
    if (!isValidElement(child)) return null

    if (child.props.__TYPE === 'Section') {
      IdToSection.counter++
      IdToSection.index.push(IdToSection.counter)

      return cloneElement(child, { ...child.props, id: IdToSection.counter, "data-value": IdToSection.counter - 1 })
    }

    return child
  })

  return (
    <PanelContext.Provider value={{ validation, onToggle, listId: IdToSection.index, currentSection: isOpen }}>
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
