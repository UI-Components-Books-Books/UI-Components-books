import { useRef, Children, cloneElement, isValidElement, useState, useMemo } from 'react'
import PropTypes from 'prop-types'
import _uniquedId from 'lodash/uniqueId'
import { usePopper } from 'react-popper'

import { Portal } from '../../Portal'

import css from './Tooltip.module.scss'

export const Tooltip = ({ children: childrenProps, id, label, placement, addClass, hasArrow, distance, isDisabled }) => {
  // Estado que contrala la apertura o cierra del tooltip
  const [isOpen, setIsOpen] = useState(false)
  // Referencia del elemento que va a tener el tooltip
  const refElement = useRef(null)
  // Referencia del tooltip
  const refTooltip = useRef(null)

  // Creamos el id relacionar el tooltip con su elemento padre
  const tooltipId = useMemo(() => id || _uniquedId('c-tooltip-'), [id])

  /**
    * Función para manejar el evento focus del elemento padre.
    * @param {Event} Event
    */
  const onFocus = (_) => {
    if (!isOpen) setIsOpen(!isOpen)
  }

  /**
    * Función para manejar el evento leave focus del elemento padre.
    * @param {Event} Event
    */
  const onBlur = (_) => setIsOpen(false)

  /**
    * Función para manejar el evento mouseover del elemento padre.
    * @param {Event} Event
    */
  const onMouseOver = (_) => {
    if (!isOpen || document.activeElement !== refElement.current) setIsOpen(!isOpen)
  }

  /**
    * Función para manejar el evento mouseout del elemento padre.
    * @param {Event} Event
    */
  const onMouseOut = (_) => setIsOpen(false)

  /**
    * Función para manejar el evento keydown del elemento padre.
    * @param {Event} Event
    */
  const onKeyDown = (e) => {
    if ((e.keyCode | e.which) === 27 && isOpen) {
      setIsOpen(!isOpen)
    }
  }

  const children = Children.map(childrenProps, (child) => {
    if (!isValidElement(child)) return null
    // Agregamos todos los eventos al elemento padre.
    return cloneElement(child, {
      ...child.props,
      'aria-describedby': id,
      ref: refElement,
      onFocus,
      onBlur,
      onMouseOver,
      onMouseOut,
      onKeyDown
    })
  })

  // Hook para controlar el posicionamiento del tooltip con respecto a su elemento padre.
  const { styles, attributes } = usePopper(refElement.current, refTooltip.current, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, distance || 8]
        }
      },
      {
        name: 'flip',
        options: {
          padding: 10
        }
      },
      { name: 'eventListeners', enabled: isOpen }
    ]
  })

  // Si no hay label, está deshabilitado o tiene más de 1 hijo no mostrar el tooltip
  if (!label || Children.count(childrenProps) > 1 || isDisabled) {
    return <>{childrenProps}</>
  }

  return (
    <>
      {children}
      <Portal id='js-tooltip-portal'>
        <div
          id={tooltipId}
          ref={refTooltip}
          role='tooltip'
          className={`${css['c-tooltip']} ${isOpen && css['c-tooltip--active']} ${addClass ?? ''}`}
          style={styles.popper}
          {...attributes.popper}
        >
          {label}
          {hasArrow && <div className={css['c-tooltip__arrow']} data-popper-arrow style={styles.arrow} />}
        </div>
      </Portal>
    </>
  )
}

Tooltip.defaultProps = {
  placement: 'auto'
}

Tooltip.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  hasArrow: PropTypes.bool,
  isDisabled: PropTypes.bool,
  distance: PropTypes.number,
  placement: PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end'
  ])
}
