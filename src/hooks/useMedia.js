import { useState, useEffect } from 'react'

/**
 * Hook para crear Media Queries.
 *
 * Realiza la creación y control de Media queries personalizadas.
 * esto facilita el uso de estas en la lógica de cualquier componente.
 *
 * @example
 *  // Media query para controlar el número de columnas en una página.
 *
 *  const columnCount = useMedia(
 *   // Media queries
 *   ["(min-width: 1500px)", "(min-width: 1000px)", "(min-width: 600px)"],
 *   // Cantidad de columnas ( Están relacionadas con las media queries por medio del indice del arreglo).
 *   [5, 4, 3],
 *   // Cantidad de columnas por defecto.
 *   2
 * );
 *
 * @param {Array} queries - Arreglo de queries.
 * @param {Array} values - Arreglo de valores de cada queries.
 * @param {any} defaultValue - Valor por defecto.
 *
 * @returns {any} Retorna el valor de la media quiery al cumplirse.
 */
const useMedia = (queries, values, defaultValue) => {
  /**
    * Estado que almacena el valor de la propiedad matches
    * del MediaQueryList.
    *
    * @link https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches
    */
  const [value, setValue] = useState(defaultValue)

  /**
    * Arreglo que contiene una media query list
    * por cada una de las queries.
    */
  const mediaQueryList = queries.map((query) => window.matchMedia(query))

  /**
    * Función utilizada para obtener uno de los valores de la propiedad values
    * basado en la propiedad matches del media query.
    *
    * @returns value - Valor proveniente de values.
    */
  const getValue = () => {
    // Obtenemos el index del primer media query que haya hecho match.
    const index = mediaQueryList.findIndex((mediaQuery) => mediaQuery.matches)

    // Retornamos el valor relacionado o el defaultValue si no hay ninguno.
    return typeof values[index] !== 'undefined' ? values[index] : defaultValue
  }

  useEffect(() => {
    // Agregamos el valor inicial al estado.
    setValue(getValue)

    /**
       * Función callback que se llama cada vez que
       * cambia el estado de la media query.
       *
       * @param {event} _
       */
    const handler = (_) => setValue(getValue)

    // Agregamos un eventListener por cada uno de las media query.
    mediaQueryList.forEach((mediaQuery) => mediaQuery.addEventListener('change', handler))

    return () => {
      // Eliminamos el eventListener de cada media query.
      mediaQueryList.forEach((mediaQuery) => mediaQuery.removeEventListener('change', handler))
    }
  }, [])

  return value
}

export { useMedia }
