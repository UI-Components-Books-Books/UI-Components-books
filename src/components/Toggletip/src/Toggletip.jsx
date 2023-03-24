import {
  useRef,
  Children,
  cloneElement,
  isValidElement,
  useState,
  useId
} from 'react'
import PropTypes from 'prop-types'
import { usePopper } from 'react-popper'

import { Portal } from '../../Portal'

import css from './Toggletip.module.scss'
/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar el keyCode de la tecla "ESC".
 */
const KEYCODE = Object.freeze({
  ESC: 27
})

export const Toggletip = ({
  children: childrenProps,
  id,
  label,
  placement,
  addClass,
  hasArrow,
  distance,
  isDisabled,
  isVisible,
  onClick: onClickProp
}) => {
  // Estado que contrala la apertura o cierra del Toggletip
  const [isOpen, setIsOpen] = useState(false)
  // Referencia del elemento que va a tener el Toggletip
  const refElement = useRef(null)
  // Referencia del Toggletip
  const refToggletip = useRef(null)

  // Creamos el id relacionar el Toggletip con su refElement.
  const toggletipId = id || useId()

  /**
   * Función para manejar el evento leave focus del refElement.
   * @param {Event} Event
   */
  const onBlur = (_) => setIsOpen(false)

  /**
   * Función para manejar el evento mouseover del refElement.
   * @param {Event} Event
   */
  const onClick = (e) => {
    setIsOpen(!isOpen)

    if (isOpen && document.activeElement === refElement.current && !isVisible) {
      setTimeout(() => {
        setIsOpen((prev) => !prev)
      }, 100)
    }

    if (onClickProp) {
      onClickProp(e)
    }
  }

  /**
   * Función para manejar el evento keydown del refElement.
   * @param {Event} Event
   */
  const onKeyDown = (e) => {
    if ((e.keyCode | e.which) === KEYCODE.ESC && isOpen) {
      setIsOpen(!isOpen)
    }
  }

  const children = Children.map(childrenProps, (child) => {
    if (!isValidElement(child)) return null
    // Agregamos todos los eventos al refElement.
    return cloneElement(child, {
      ...child.props,
      'aria-describedby': id,
      ref: refElement,
      onClick,
      'data-open': isOpen,
      ...(!isVisible ? { onBlur, onKeyDown } : {})
    })
  })

  // Hook para controlar el posicionamiento del Toggletip con respecto a su refElement.
  const { styles, attributes } = usePopper(
    refElement.current,
    refToggletip.current,
    {
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
    }
  )

  // Si no hay label, está deshabilitado o tiene más de 1 hijo no mostrar el Toggletip
  if (!label || Children.count(childrenProps) > 1 || isDisabled) {
    return <>{childrenProps}</>
  }

  return (
    <>
      {children}
      <Portal id='js-toggletip-portal'>
        <div
          id={toggletipId}
          ref={refToggletip}
          role='status'
          className={`${css['c-toggletip']} ${
            isOpen && css['c-toggletip--active']
          } ${addClass ?? ''}`}
          style={styles.popper}
          {...attributes.popper}
        >
          {label}
          {hasArrow && (
            <div
              className={css['c-toggletip__arrow']}
              data-popper-arrow
              style={styles.arrow}
            />
          )}
        </div>
      </Portal>
    </>
  )
}

Toggletip.defaultProps = {
  placement: 'auto'
}

Toggletip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node)
  ]),
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  hasArrow: PropTypes.bool,
  isDisabled: PropTypes.bool,
  distance: PropTypes.number,
  onClick: PropTypes.func,
  isVisible: PropTypes.bool,
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
