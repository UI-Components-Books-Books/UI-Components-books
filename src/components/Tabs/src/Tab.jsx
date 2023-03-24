import { useRef, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { TabsContext } from '../../Tabs'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Tabs.module.scss'

export const Tab = ({
  children,
  id,
  selected,
  addClass,
  icon,
  addNewRef,
  onNavigation,
  onClick,
  defaultStyle,
  __TYPE,
  ...props
}) => {
  /**
   * Necesitamos obtener la referencia del botón
   * para luego pasarla en la función addNewRef proveniente
   * de las propiedades.
   */
  const refButton = useRef()

  /**
   * Obtenemos las funciones validation y onToggle del contexto creado en Tabs.
   */
  const { validation, onToggle } = useContext(TabsContext)

  /**
   * variable que almacena el resultado de validation.
   * Devuelve "true" o "false" apartir de evaluar
   * el id con el estado.
   *
   * @returns {(Boolean)}
   */
  const isSelected = validation(id)

  /**
   * Usada para poder ejecutar la función onToggle y
   * la propiedad onClick en el evento click del botón.
   *
   * @param {HTMLButtonElement} event - Evento click
   */
  const handleClick = (event) => {
    if (onClick) {
      onClick(event)
    }
    onToggle(id)
  }

  useEffect(() => {
    // Agregamos al Referencia a la función addNewRef si está existe
    refButton.current && addNewRef(refButton.current)

    return () => {
      // Limpiamos la referencia al desmontar el componente
      refButton.current = null
    }
  }, [refButton])

  return (
    <button
      id={`tab-${id}`}
      role='tab'
      ref={refButton}
      data-type={__TYPE}
      tabIndex={`${isSelected ? 0 : -1}`}
      aria-controls={`panel-${id}`}
      aria-selected={isSelected}
      onKeyDown={onNavigation}
      onClick={handleClick}
      className={classnames({
        [`${css['c-tab__button']} u-flex`]: !defaultStyle,
        [addClass]: addClass,
        [isSelected]: selected
      })}
      {...props}
    >
      {children}
      {icon && icon(isSelected)}
    </button>
  )
}

Tab.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node
  ]),
  id: PropTypes.number,
  selected: PropTypes.string,
  addClass: PropTypes.string,
  icon: PropTypes.func,
  addNewRef: PropTypes.func,
  onClick: PropTypes.func,
  onNavigation: PropTypes.func,
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('Tab')
}

Tab.defaultProps = {
  __TYPE: 'Tab'
}
