import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import 'wicg-inert'

import { Button, Portal } from '../../../components'

import css from './Modal.module.scss'

/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar el keyCode de la tecla "ESC".
 */
const KEYCODE = Object.freeze({
  ESC: 27
})

export const Modal = ({ children, addClass, isOpen, onClose, finalFocusRef, label, ...props }) => {
  /**
    * Obtenemos la referencia del modal para
    * agregarle el focus cuando este se abra.
    */
  const refModal = useRef()

  /**
    * Función usada para habilitar|deshabilitar
    * la propiedad inert que sirve para quitar el focus de los
    * elementos contenidos en el elemento #root.
    *
    * @param {bool} state - Estado.
    */
  const inertToggle = (state) => {
    const root = document.querySelector('#root')
    root.inert = state
  }

  /**
    * Cierra el modal al presionar la tecla "ESC".
    * @param {event} e - Evento del teclado
    */
  const onKeyDown = (e) => {
    if ((e.keyCode || e.which) === KEYCODE.ESC) {
      onCloseModal()
    }
  }

  /**
    * Función utilizada para cerrar el modal.
    * además agrega el focus al elemento contenido
    * en la propiedad finalFocusRef.
    */
  const onCloseModal = () => {
    onClose(!isOpen)
    inertToggle(false)

    if (finalFocusRef) finalFocusRef.current.focus()
  }

  /**
    * Efecto encargado de mostrar el componente
    * cuando la propiedad isOpen es true.
    */
  useEffect(() => {
    if (isOpen) {
      inertToggle(true)

      if (refModal.current) refModal.current.focus()
    }
  }, [isOpen])

  return (
    <Portal id='js-modal'>
      <div className={css['c-layout']} onClick={onCloseModal} hidden={!isOpen} />
      <div
        role='dialog'
        tabIndex='-1'
        hidden={!isOpen}
        aria-label={label}
        ref={refModal}
        onKeyDown={onKeyDown}
        aria-modal='true'
        className={`${css['c-modal']} u-px-3 u-py-3 ${addClass ?? ''}`}
        {...props}
      >
        <div className={`${css['c-modal-container']} u-flow`}>{children}</div>
        <Button addClass={css['c-close-button']} label='Cerrar modal' hasAriaLabel icon={{ name: 'close' }} onClick={onCloseModal} />
      </div>
    </Portal>
  )
}

Modal.defaultProps = {
  label: 'Default modal label',
  isOpen: false
}

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]),
  addClass: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  finalFocusRef: PropTypes.object
}
