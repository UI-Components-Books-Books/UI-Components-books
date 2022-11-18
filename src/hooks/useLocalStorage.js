import { useState } from 'react'

/**
 * Hook para manejar el localStorage.
 *
 * Maneja automaticamente la creación y actualización de la información en el localStorage.
 * El uso es similar a useState excepto que pasamos una clave de almacenamiento local para que podamos
 * usar ese valor de forma predeterminada en la carga de la página en lugar del valor inicial especificado.
 *
 * @example
 * // Similar uso que el useState solo que el primer argumento es la llave del valor en el localStorage
 *
 * const [name, setName] = useLocalStorage("name", "Bob");
 *
 * @param {String} key - LLave relacionada al valor en el localStorage.
 * @param {any} initialValue - Valor del localStorage.
 *
 * @returns {any} Retorna el valor del Localstorage y el setter
 */

const useLocalStorage = (key, initialValue) => {
  /**
    * Estado que va a almacenar nuestro valor.
    *
    * Pasamos la función para el estado inicial al useState,
    * para que esta solo se ejecute una vez.
    */
  const [storedValue, setStoredValue] = useState(() => {
    /**
       * Dado que la API del localStorage no está disponible
       * en server side rendering comprobamos la existencia de está.
       */
    if (typeof window === 'undefined') {
      return initialValue
    }

    try {
      // Obtenemos el valor del localStorage usando la key.
      const item = window.localStorage.getItem(key)

      // Transformamos de JSON si no retornamos el initialValue.
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      // Si hay un error retornamos el initialValue
      console.warn(`Error in useLocalStorage: ${error}`)

      return initialValue
    }
  })

  /**
    * Función usada para actualizar el valor
    * del localStorage.
    *
    * @param {*} value - Nuevo valor del localStorage.
    */
  const setValue = (value) => {
    try {
      // Permite que value sea una función para tener la misma API que useState.
      const valueToStore = value instanceof Function ? value(storedValue) : value

      // Guardamos el value en el estado
      setStoredValue(valueToStore)

      if (typeof window !== 'undefined') {
        // Guardamos en el localStorage
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      // Si hay un error retornamos un mensaje en consola.
      console.warn(`Error in useLocalStorage: ${error}`)
    }
  }

  return [storedValue, setValue]
}

export { useLocalStorage }
