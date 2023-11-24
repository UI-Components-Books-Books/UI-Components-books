import { useState, useEffect } from 'react'

/**
 * Usamos este objeto para crear
 * las configuraciones básica del IntersectionObserver API,
 * en caso de que la propiedad options del hook venga vácia.
 */
const initialOptions = Object.freeze({
  root: null,
  rootMargin: '0px',
  threshold: 0
})

/**
 * Hook para detectar si un elemento es visible en pantalla.
 *

 * Este hooks le permite detectar fácilmente cuándo un elemento es visible en
 * pantalla, así como especificar que tanto del elemento debe ser visible antes
 * de ser considerado en la pantalla. Utiliza la IntersectionObserver API y todas
 * sus propiedades.
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#intersection_observer_concepts_and_usage
 *
 * @example
 *  // Media query para controlar el número de columnas en una página.
 *
 *  const [ref, isVisible] = useOnScreen({
 *       rootMargin: "20px 10px",
 *       threshold: [0, 0.25, 0.5, 0.75, 1]
 *  });
 *
 * <div ref={ref}>Hey I'm on the screen: {JSON.stringify(observer)}</div>
 *
 * @param {Object} options - Objeto con las configuraciones utilizadas por la IntersectionObserver API.
 *
 * @returns {Array} setRef - Función para obtener la referencia del elemento.
 * @returns {Array} isIntersecting - Booleano que informa si el valor está en pantalla o no.
 */

const useOnScreen = (options) => {
  /**
    *  Si existe el objeto options desestructurarlo si utiliza el initialOptions.
    */
  const { root, rootMargin, threshold } = options || initialOptions

  /**
    * Estado utilizado para guardar el valor cuando el elemento es visible.
    */
  const [isIntersecting, setIntersecting] = useState(false)

  /**
    * Estado para almacenar la referencia del elemento a observar.
    */
  const [ref, setRef] = useState(null)

  useEffect(() => {
    /**
       * Si no existe la referencia del elemento reiniciamos
       * nuestro isIntersecting Estado.
       */
    if (!ref) {
      setIntersecting(false)
      return
    }

    /**
       * Creamos una nueva instacia de nuestra IntersectionObserver API.
       */
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        /**
             * actualizamos nuestro estado cuando el
             * callback del observer se llame.
             */
        setIntersecting(entry.isIntersecting)
      },
      {
        /**
             * configuraciones del la IntersectionObserver API.
             */
        root,
        rootMargin,
        threshold
      }
    )

    /**
       * Agregamos la referencia del elemento a observar.
       */
    observer.observe(ref)

    return () => {
      observer.unobserve(ref)
    }
  }, [threshold, rootMargin, root, ref])

  /**
    * Retornamos nuestro setter para la referencia
    * del elemento y el valor de la visibilidad del elemento.
    */
  return [setRef, isIntersecting]
}

export { useOnScreen }
