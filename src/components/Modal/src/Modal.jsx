import { useEffect, useRef, createContext } from 'react'
import PropTypes from 'prop-types'
import 'wicg-inert'

import { Portal } from '../../../components'

/**
 * Creamos un contexto para proveer a ciertos
 * componentes hijos las funcionalidades creadas
 * acá en el componente padre.
 */
export const ModalContext = createContext()

/**
 * Selectores que se utiliza
 * para comprobar si el finalFocusRef se
 * encuentra entre ellos.
 */
const PARENT_ELEMENTS =
  "section[data-type='Section']:not([hidden]), div:not([hidden])"

export const Modal = ({ children, isOpen, onClose, finalFocusRef }) => {
  /**
   * Obtenemos la referencia del modal para
   * agregarle el focus cuando este se abra.
   */
  const refModal = useRef()

  /**
   * Referencia utilizada como "flag", para que cuando
   * cambie el estado isOpen.
   */
  const flagUpdatedState = useRef(false)

  /**
   * Función usada para habilitar|deshabilitar
   * la propiedad inert que sirve para quitar el focus de los
   * elementos contenidos en el elemento #root.
   *
   * @param {bool} state - Estado.
   */
  const inertToggle = (state) => {
    // Busca el elemento #root en el DOM
    const root = document.querySelector('#root')

    // Si no se encuentra el elemento #root, salir de la función
    if (!root) return

    // Habilita o deshabilita la propiedad `inert` según el estado
    root.inert = state
  }

  /**
   * Función utiliada para enfocar el elemento
   * disponible cuando se cierra el modal.
   * @param {string | string[]} elements
   */
  const setElementFocusOnModalClose = (elements) => {
    // Obtenemos todos los elementos.
    const listElements = document.querySelectorAll(elements)

    listElements.forEach((element) => {
      // Si el elemento encuentra la lista de sectores y además no está deshabilitado
      if (element.closest(PARENT_ELEMENTS) && !element.disabled) {
        element.focus()
      }
    })
  }

  /**
   * Efecto encargado de mostrar el componente
   * cuando la propiedad isOpen es true.
   */
  useEffect(() => {
    if (isOpen && refModal.current) {
      // Marcamos el estado de actualización como verdadero para rastrear si se ha actualizado.
      flagUpdatedState.current = isOpen

      // Si el modal está abierto y hay una referencia válida al elemento del modal
      if (refModal.current) {
        // Establecemos el enfoque en el elemento del modal para que el usuario pueda interactuar con él.
        refModal.current.focus()
      }

      // Aplicamos el estado inert al #root
      inertToggle(isOpen)
      return
    }

    // Cuando el modal se cierra
    if (flagUpdatedState.current) {
      flagUpdatedState.current = isOpen
      // Quitamos el estado inert del #root
      inertToggle(isOpen)

      // Manejo del enfoque en el cierre del modal.
      if (typeof finalFocusRef === 'string' || Array.isArray(finalFocusRef)) {
        // Si finalFocusRef es una cadena o un arreglo, establecemos el enfoque en el elemento deseado.
        setElementFocusOnModalClose(finalFocusRef)
      } else if (typeof finalFocusRef === 'object') {
        // Si finalFocusRef es un objeto (como un ref), establecemos el enfoque en su elemento actual.
        finalFocusRef.current.focus()
      }
    }

    return () => {
      // Quitamos el estado inert del #root
      inertToggle(false)
    }
  }, [isOpen, refModal, finalFocusRef])

  return (
    <ModalContext.Provider value={{ isOpen, onClose, refModal }}>
      <Portal id='js-modal'>{isOpen ? children : null}</Portal>
    </ModalContext.Provider>
  )
}

Modal.defaultProps = {
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
  finalFocusRef: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string)
  ]).isRequired
}
