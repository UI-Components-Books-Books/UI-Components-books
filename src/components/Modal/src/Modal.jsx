import { useEffect, useRef, createContext } from 'react'
import PropTypes from 'prop-types'
import 'wicg-inert'

import { Portal } from '../../../components'
import { getChildrenByType } from '../../../utils/validations/getChildrenType'

/**
 * Creamos un contexto para proveer a ciertos
 * componentes hijos las funcionalidades creadas
 * acá en el componente padre.
 */
export const ModalContext = createContext()

/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar el keyCode de la tecla "ESC".
 */
const KEYCODE = Object.freeze({
  ESC: 27
})

export const Modal = ({ children, isOpen, onClose, finalFocusRef }) => {
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
   * Se utiliza está función para cambiar las clases
   * del modal asi permite dar una transición tanto
   * de entrada como da salida suave.
   *
   * @param {String} to - Clase a replazar
   * @param {String} from - Clase que remplaza
   */
  const changeStyle = (to, from) => {
    refModal.current.classList.replace(to, from)
  }

  /**
   * Función utilizada para cerrar el modal.
   * además agrega el focus al elemento contenido
   * en la propiedad finalFocusRef.
   */
  const onCloseModal = () => {
    changeStyle('animate__fadeIn', 'animate__fadeOut')

    setTimeout(() => {
      changeStyle('animate__fadeOut', 'animate__fadeIn')
      inertToggle(false)
      onClose(!isOpen)

      // Enfoca el elemento cuando el modal se cierra
      if (Object.keys(finalFocusRef).length !== 0) {
        finalFocusRef.current.focus()
      }
    }, 500)
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

    return () => {
      // Almacenamos el boolean que nos indica si existe o no la propiedad inert en el #root.
      const hasAttribute = document
        .querySelector('#root')
        .hasAttribute('inert')

      // Eliminamos el inert si el hasAttribute es true.
      if (hasAttribute) inertToggle(false)
    }
  }, [isOpen])

  return (
    <ModalContext.Provider
      value={{ isOpen, onKeyDown, onCloseModal, refModal }}
    >
      <Portal id='js-modal'>
        {getChildrenByType(children, ['ModalContent', 'ModalOverlay'])}
      </Portal>
    </ModalContext.Provider>
  )
}

Modal.defaultProps = {
  label: 'Default modal label',
  isOpen: false
}

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node
  ]),
  addClass: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  finalFocusRef: PropTypes.object.isRequired
}
