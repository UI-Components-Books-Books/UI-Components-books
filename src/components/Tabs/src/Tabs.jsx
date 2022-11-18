import { useState, createContext, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getChildrenByType } from '../../../utils/validations/getChildrenType'

// Creación del contexto del componente padre Tabs
export const TabsContext = createContext()

export const Tabs = ({ children, defaultIndex, addClass, ...props }) => {
  // Controla el estado de abierto / cerrado del TabPanel.
  const [isOpen, setIsOpen] = useState(0)

  /**
    * Función para abrir o cerrar el TabPanel.
    *
    * @param {Number} value - Id correspondiente del TabPanel.
    */
  const onToggle = (value) => setIsOpen(value)

  /**
    * Devuelve "true" o "false" apartir de evaluar
    * el id con el estado.
    *
    * @returns {(Boolean)}
    */
  const validation = (id) => isOpen === id

  useEffect(() => {
    // Si existe la propiedad defaultIndex actualiza el estado con ella.
    if (defaultIndex !== undefined) setIsOpen(defaultIndex)
  }, [defaultIndex])

  return (
    <TabsContext.Provider value={{ validation, onToggle }}>
      <div {...(addClass && { className: `${addClass}` })} {...props}>
        {/* Filtramos los children para solo aceptar de tipo TabPanels y TabList. */}
        {getChildrenByType(children, ['TabList', 'TabPanels'])}
      </div>
    </TabsContext.Provider>
  )
}

Tabs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  defaultIndex: PropTypes.number,
  addClass: PropTypes.string
}
