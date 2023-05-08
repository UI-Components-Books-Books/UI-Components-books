import { useRef, useEffect } from 'react'

/**
 * Hook personalizado para detectar interacciones fuera de un elemento.
 *
 * @example
 *
 * useInteractOutside({ ref: refPopoverModal, onInteractionOutside });
 *
 * @param {Element} ref -  Referencia al elemento de React.
 * @param {Function} onInteractionOutside - Función que se llama cuando se interactúa fuera del elemento.
 * @param {Function} onInteractionOutsideStart - Función que se llama cuando se detecta una interacción fuera del elemento.
 */
export const useInteractOutside = ({
  ref,
  onInteractionOutside,
  onInteractionOutsideStart
}) => {
  const stateRef = useRef({
    isPointerDown: false, // Bandera para indicar si se ha hecho clic en el elemento
    onInteractionOutsideStart,
    onInteractionOutside
  })

  const state = stateRef.current
  state.onInteractionOutside = onInteractionOutside
  state.onInteractionOutsideStart = onInteractionOutsideStart

  // Efecto para agregar y eliminar los escuchadores de eventos de 'mousedown' y 'mouseup'
  useEffect(() => {
    const onPointerDown = (e) => {
      // Verificar si el evento es válido y si existe la función 'onInteractionOutside'
      if (isValidEvent(e, ref) && state.onInteractionOutside) {
        if (state.onInteractionOutsideStart) {
          state.onInteractionOutsideStart(e)
        }
        state.isPointerDown = true // Indicar que se ha hecho clic en el elemento
      }
    }

    const onMouseUp = (e) => {
      // Verificar si se hizo clic en el elemento y si existe la función 'onInteractionOutside'
      if (
        state.isPointerDown &&
        state.onInteractionOutside &&
        isValidEvent(e, ref)
      ) {
        state.onInteractionOutside(e) // Llamar a la función 'onInteractionOutside'
        state.isPointerDown = false // Indicar que se ha soltado el clic en el elemento
      }
    }

    // Agregar escuchadores de eventos
    document.addEventListener('mousedown', onPointerDown, true)
    document.addEventListener('mouseup', onMouseUp, true)

    // Eliminar escuchadores de eventos al desmontar el componente
    return () => {
      document.removeEventListener('mousedown', onPointerDown, true)
      document.removeEventListener('mouseup', onMouseUp, true)
    }
  }, [ref, state])
}

// Función auxiliar para verificar si un evento es válido
function isValidEvent (event, ref) {
  if (event.target) {
    const ownerDocument = event.target.ownerDocument

    if (
      !ownerDocument ||
      !ownerDocument.documentElement.contains(event.target)
    ) {
      return false // El evento no es válido
    }
  }

  return ref.current && !ref.current.contains(event.target)
}
