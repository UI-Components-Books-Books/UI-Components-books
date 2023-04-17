import { useState, useEffect, useRef, createContext } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import css from './Panel.module.scss'

/**
 * Creamos un contexto para proveer a ciertos
 * componentes hijos las funcionalidades creadas
 * acá en el componente padre.
 */
export const PanelContext = createContext()

export const Panel = ({ children, defaultIndex, addClass, type, defaultStyle }) => {
  // Controla el estado de abierto / cerrado de las secciones.
  const [isOpen, setIsOpen] = useState(null)

  /**
   * Array para almacenar el valor de los ID
   * de cada sección.
   */
  const IdToSection = useRef([])

  /**
   * Utilizada para actualizar el estado con el ID de cada sección
   *
   * @param {Number} id - ID sección
   * @returns {void}
   */
  const addNewIdToSection = (id) => {
    if (!IdToSection.current.includes(id)) IdToSection.current = [...IdToSection.current, id]
  }

  /**
   * Se crea la función onToggle para agregar el ID de
   * la sección a mostrar.
   *
   * @param {Number} value - Id proveniente de la sección.
   */
  const onToggle = (value) => setIsOpen(IdToSection.current[value])

  /**
   * Devuelve "true" o "false" apartir de comparar
   * el ID de la sección con el ID de la sección
   * que está visible.
   *
   * @param {(number | string)}
   * @returns {(Boolean)}
   */
  const validation = (id) => (/:.*?:/g.test(id) ? isOpen === id : IdToSection.current[id - 1] === isOpen)

  /**
   * Convierte el idToSection en un
   * array de números.
   * @returns {number[]}
   */
  const normaliceSectionId = () => [...IdToSection.current].reduce((list, _, index) => [...list, index + 1], [])

  /**
   * Obtiene el index del a partir de un elemento dado,
   * a ese se le suma 1, esto se usa en el currentSection.
   * @param {string} id
   * @returns {number}
   */
  const getIndexById = (id) => IdToSection.current.indexOf(id) + 1

  useEffect(() => {
    if (IdToSection.current.length === 0) return

    // Si existe la propiedad defaultIndex actualiza el estado con ella.
    // de otra manera utiliza el valor en la posición '0' del IdToSection
    if (defaultIndex !== undefined) {
      onToggle(defaultIndex - 1)
    } else {
      setIsOpen(IdToSection.current[0])
    }
  }, [defaultIndex, IdToSection])

  return (
    <PanelContext.Provider
      value={{
        validation,
        onToggle,
        listId: normaliceSectionId(),
        currentSection: getIndexById(isOpen),
        getIndexById,
        addNewIdToSection,
        type
      }}
    >
      <div
        className={classnames('video-interpreter-ui-panel', {
          [css['c-panel']]: !defaultStyle,
          [addClass]: addClass
        })}
        data-value={isOpen}
        {...(type === 'carrousel' && {
          role: 'group',
          'aria-roledescription': 'Slider'
        })}
      >
        {children}
      </div>
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
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool,
  type: PropTypes.string
}
