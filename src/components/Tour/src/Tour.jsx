import { useState, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import 'wicg-inert'

import { Portal, TourElement, TourHelpLayer } from '../../..//components'

// Creación del contexto del componente Tour.
export const TourContext = createContext()

export const Tour = ({
  steps,
  isOpen,
  onClose,
  finalFocusRef,
  hideCloseButton,
  hideBackButton,
  ariaAttributes,
  defaultStyle,
  addClass
}) => {
  // Estado utilizado para almacenar el id del elemento activado.
  const [activeId, setActiveId] = useState(null)

  /**
   * Creamos un array con todos los objetos
   * contenidos en la propiedad steps
   * y además agregamos la prop id.
   */
  const items = [
    ...steps
      .reduce(
        (list, item, index) => [
          ...list,
          document.querySelector(item.target)
            ? { id: index + 1, ...item }
            : null
        ],
        []
      )
      .filter((item) => item !== null)
  ]

  /**
   * Función utilizada para encontrar un objeto
   * a partir de la propiedad id.
   *
   * @param {Number} id - Id del objeto a buscar.
   * @returns {Array} - Array que contiene el objeto que concuerda con el id.
   */
  const findElement = (id) => {
    return items
      .filter((item) => item.id === id)
      .reduce((object, item) => ({ ...object, ...item }), {})
  }

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
   * Función utilizada para mover
   * el tour al siguiente elemento.
   */
  const onNextElement = () => {
    setActiveId((prev) => (prev < items.length ? prev + 1 : prev))
  }

  /**
   * Función utilizada para mover
   * el tour al elemento anterior.
   */
  const onPrevElement = () => {
    setActiveId((prev) => (prev > 0 + 1 ? prev - 1 : prev))
  }

  /**
   * Función utilizada cerrar el tour, reiniciar los diferentes estados y
   * mover el focus al elemento pasado a través
   * de la propiedad finalFocusRef.
   */
  const onCloseTour = () => {
    setActiveId(null)
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
      setActiveId(items.shift().id)
      inertToggle(true)
    }
  }, [isOpen])

  return (
    <TourContext.Provider
      value={{
        isOpen,
        lastId: items.length,
        ...findElement(activeId),
        methods: {
          onNext: onNextElement,
          onPrev: onPrevElement,
          onClose: onCloseTour
        },
        defaultStyle
      }}
    >
      <Portal id='js-tour'>
        {isOpen && (
          <>
            <TourHelpLayer />
            <TourElement
              ariaAttributes={ariaAttributes}
              hideCloseButton={hideCloseButton}
              hideBackButton={hideBackButton}
              addClass={addClass}
            />
          </>
        )}
      </Portal>
    </TourContext.Provider>
  )
}

Tour.defaultProps = {
  isOpen: false,
  hideCloseButton: false,
  hideBackButton: false,
  ariaAttributes: {
    role: 'dialog',
    tabIndex: -1,
    'aria-label': 'Tour por la plataforma',
    'aria-modal': true
  },
  defaultStyle: false
}

Tour.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      target: PropTypes.string.isRequired,
      content: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
      distance: PropTypes.number,
      elementClass: PropTypes.string,
      helpLayerClass: PropTypes.string
    })
  ),
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  finalFocusRef: PropTypes.any.isRequired,
  hideCloseButton: PropTypes.bool,
  hideBackButton: PropTypes.bool,
  defaultStyle: PropTypes.bool,
  addClass: PropTypes.string,
  ariaAttributes: PropTypes.shape({
    role: PropTypes.string,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    'aria-label': PropTypes.string,
    'aria-modal': PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  })
}
