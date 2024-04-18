import { useContext, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { usePopper } from 'react-popper'
import classnames from 'classnames'

import { PopoverModalContext, Portal } from '../../../components'
import { useInteractOutside } from '../../../hooks/useInteractionOutside'

import css from './PopoverModal.module.scss'

/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar el keyCode de la tecla "ESC".
 */
const KEYCODE = Object.freeze({
  ESC: 27,
  TAB: 9
})

// Lista de elementos a los cuales se les puede hacer focus.
const SELECTOR_ELEMENTS =
    'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])'

export const PopoverModalContent = ({
  id,
  children,
  addClass,
  hasArrow,
  isDisabled,
  distance,
  placement,
  disabledInteractOutside,
  noA11y,
  defaultStyle
}) => {
  // Obtenemos la función isOpen y la referencia del botón del contexto
  const { isOpen, onOpen, refButton } = useContext(PopoverModalContext)
  // Referencia del PopoverModal
  const refPopoverModal = useRef()
  const refPopoverModalSwitch = useRef()

  /**
   * Comprueba si el elemento del DOM es el botón que abrio el popover.
   * @param {React.ReactHTMLElement} element - Elemento del DOM
   * @returns {Boolean}
   */
  const shouldCloseOnInteractOutside = (element, refButton) => {
    return element === refButton.current
  }

  /**
   * Maneja el evento al presionar o tocar fuera del popover.
   * @param {React.EventHandler} event - Evento mousedown | touchstart
   */
  const onInteractionOutside = (event) => {
    if (!disabledInteractOutside && !shouldCloseOnInteractOutside(event.target, refButton)) {
      onOpen()
      event.stopPropagation()
      event.preventDefault()
    }
  }

  /**
   * Custom hooks que ejecuta un método
   * cuando se interactua fuera del popover.
   */
  useInteractOutside({ ref: refPopoverModalSwitch, onInteractionOutside })

  /**
   * Función para manejar el evento keydown del elemento padre.
   * @param {Event} Event
   */
  const onKeyDown = (e) => {
    // Obtemos un array de elementos que se puede ::focus.
    const focusableElements =
      refPopoverModal.current.querySelectorAll(SELECTOR_ELEMENTS)
    // Obtemos la referencia del elemento padre.
    const buttonElement = refButton.current

    // Sacamos el primer elemento de la lista.
    const FIRST_ELEMENT = focusableElements[0]
    // Sacamos el último elemento de la lista.
    const LAST_ELEMENT = focusableElements[focusableElements.length - 1]

    // Si va hacia adelante usando tab y el último elemento está activo, entonces agregar el focus al elemento padre.
    if (
      (e.keyCode || e.which) === KEYCODE.TAB &&
      document.activeElement === LAST_ELEMENT
    ) {
      buttonElement.focus()
      return e.preventDefault()
    }

    // // Si va hacia atrás usando shift + tab y el primer elemento está activo, entonces agregar el focus al elemento padre.
    if (
      e.shiftKey &&
      (e.keyCode || e.which) === KEYCODE.TAB &&
      document.activeElement === FIRST_ELEMENT
    ) {
      buttonElement.focus()
      e.preventDefault()
    }

    // Retorna el focus al buttonElement al presionar Esc
    if ((e.keyCode || e.which) === KEYCODE.ESC) {
      buttonElement.focus()
    }
  }

  // Hook para controlar el posicionamiento del PopoverModal con respecto a su elemento padre.
  const { styles, attributes } = usePopper(
    refButton.current,
    refPopoverModal.current,
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

  useEffect(() => {
    const popoverModalRef = refPopoverModal.current

    if (isOpen) {
      // Agrega el focus al PopoverModal
      popoverModalRef.focus()
      refPopoverModalSwitch.current = popoverModalRef
    } else {
      refPopoverModalSwitch.current = null
    }
  }, [isOpen, refPopoverModal])

  if (isDisabled) {
    return <>{children}</>
  }

  return (
    <Portal id='js-popover-modal-portal'>
      <div
        id={id}
        ref={refPopoverModal}
        role='status'
        tabIndex={-1}
        className={classnames({
          [css['c-popover-modal']]: !defaultStyle,
          [css['c-popover-modal--active']]: !defaultStyle && isOpen,
          'video-interpreter-ui-popover': !noA11y,
          [addClass]: addClass
        })}
        style={styles.popper}
        onKeyDown={onKeyDown}
        data-hidden={!isOpen}
        data-popper
        {...(!isOpen && { hidden: true })}
        {...attributes.popper}
      >
        {children}
        {hasArrow && (
          <div
            className={classnames({
              [css['c-popover-modal__arrow']]: !defaultStyle
            })}
            data-class='c-popover-modal__arrow'
            data-popper-arrow
            style={styles.arrow}
          />
        )}
      </div>
    </Portal>
  )
}

PopoverModalContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.element,
    PropTypes.node
  ]),
  id: PropTypes.string,
  addClass: PropTypes.string,
  noA11y: PropTypes.bool,
  hasArrow: PropTypes.bool,
  isDisabled: PropTypes.bool,
  distance: PropTypes.number,
  defaultStyle: PropTypes.bool,
  disabledInteractOutside: PropTypes.bool,
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

PopoverModalContent.defaultProps = {
  hasArrow: false,
  placement: 'auto',
  disabledInteractOutside: false,
  noA11y: false
}
