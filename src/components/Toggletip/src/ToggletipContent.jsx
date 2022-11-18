import { useContext, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { usePopper } from 'react-popper'

import { ToggletipContext, Portal } from '../../../components'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Toggletip.module.scss'

/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar el keyCode de la tecla "ESC".
 */
const KEYCODE = Object.freeze({
  ESC: 27
})

export const ToggletipContent = ({ children, addClass, hasArrow, isDisabled, distance, placement }) => {
  // Obtenemos la función isOpen y la referencia del botón del contexto
  const { isOpen, refButton } = useContext(ToggletipContext)
  // Referencia del toggletip
  const refToggletip = useRef()

  // Lista de elementos a los cuales se les puede hacer focus.
  const SELECTOR_ELEMENTS =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed [tabindex="0"], [contenteditable], audio:not([tabindex="-1"])'

  const onKeyDown = (e) => {
    // Obtemos un array de elementos que se puede ::focus.
    const focusableElements = refToggletip.current.querySelectorAll(SELECTOR_ELEMENTS)
    // Obtemos la referencia del elemento padre.
    const buttonElement = refButton.current

    // Sacamos el primer elemento de la lista.
    const FIRST_ELEMENT = focusableElements[0]
    // Sacamos el último elemento de la lista.
    const LAST_ELEMENT = focusableElements[focusableElements.length - 1]

    // Si va hacia adelante usando tab y el último elemento está activo, entonces agregar el focus al elemento padre.
    if (!e.shiftKey && document.activeElement === LAST_ELEMENT) {
      buttonElement.focus()
      return e.preventDefault()
    }

    // Si va hacia atrás usando shift + tab y el primer elemento está activo, entonces agregar el focus al elemento padre.
    if (e.shiftKey && document.activeElement === FIRST_ELEMENT) {
      buttonElement.focus()
      e.preventDefault()
    }

    // Retorna el focus al buttonElement al presionar Esc
    if ((e.keyCode || e.which) === KEYCODE.ESC) {
      buttonElement.focus()
    }
  }

  // Hook para controlar el posicionamiento del toggletip con respecto a su elemento padre.
  const { styles, attributes } = usePopper(refButton.current, refToggletip.current, {
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

  useEffect(() => {
    if (isOpen) {
      // Agrega el focus al toggletip
      refToggletip.current.focus()
    }
  }, [isOpen])

  if (isDisabled) {
    return <>{children}</>
  }

  return (
    <Portal id='js-toggletip'>
      <div
        tabIndex={-1}
        onKeyDown={onKeyDown}
        ref={refToggletip}
        className={`${css['c-toggletip']} ${isOpen && css['c-toggletip--active']} ${addClass ?? ''}`}
        style={styles.popper}
        {...attributes.popper}
      >
        {children}
        {hasArrow && <div className={css['c-toggletip__arrow']} data-popper-arrow style={styles.arrow} />}
      </div>
    </Portal>
  )
}

ToggletipContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.arrayOf(PropTypes.node), PropTypes.element, PropTypes.node]),
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
  ]),
  __TYPE: typeValidation('ToggletipContent')
}

ToggletipContent.defaultProps = {
  hasArrow: false,
  placement: 'auto',
  __TYPE: 'ToggletipContent'
}
