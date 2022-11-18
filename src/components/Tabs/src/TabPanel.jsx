import { useContext } from 'react'
import PropTypes from 'prop-types'

import { TabsContext } from '../../Tabs'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Tabs.module.scss'

export const TabPanel = ({ children, id, addClass, __TYPE, ...props }) => {
  // Obtenemos la función validation del contexto
  const { validation } = useContext(TabsContext)

  /**
    * Devuelve "true" o "false" apartir de evaluar
    * el id con el estado.
    *
    * @returns {(Boolean)}
    */
  const isSelected = validation(id)

  return (
    <div
      id={`panel-${id}`}
      role='tabpanel'
      tabIndex={0}
      data-type={__TYPE}
      aria-hidden={!isSelected}
      hidden={!isSelected}
      aria-labelledby={`tab-${id}`}
      className={`${isSelected ? css['c-tab__panel--active'] : css['c-tab__panel']} ${addClass ?? ''}`}
      {...props}
    >
      {children}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]),
  id: PropTypes.number,
  addClass: PropTypes.string,
  __TYPE: typeValidation('TabPanel')
}

TabPanel.defaultProps = {
  __TYPE: 'TabPanel'
}
