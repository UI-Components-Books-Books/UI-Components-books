import { useRef, useEffect } from 'react'

/**
 *
 * Crea el elemento DOM que se utilizara como padre.
 *
 * @param {string} id - Id del contenedor
 * @returns {HTMLElement}
 */
const createRootElement = (id) => {
  const rootContainer = document.createElement('div')
  rootContainer.setAttribute('id', id)
  return rootContainer
}

/**
 * Agrega elementos como último hijo del Body.
 * @param {HTMLElement} rootElem - Elemento a añadir
 */
const addRootElement = (rootElem) => {
  document.body.append(rootElem)
}

/**
 * Hook para crear un React Portal.
 *
 * Maneja automaticamente la creación y desmontaje del elemento padre, por lo que no es
 * necesario asegurarse que el elemento ya exista en el Body.
 * @example
 *  const target = usePortal(id);
 *  return createPortal(children, target);
 *
 * @param {string} id - El id del contendor padre, e.g 'modal' o 'toggletip'.
 *
 * @returns {HTMLElement} El nodo del DOM que se usa como base del portal
 */
const usePortal = (id) => {
  const rootElement = useRef(null)

  useEffect(() => {
    // Busca si ya existe un elemento en el DOM
    const existingParent = document.querySelector(`#${id}`)

    // Si existe el elemento usarlo como padre si no crear un nuevo elemento DOM.
    const parentElement = existingParent || createRootElement(id)

    // Si no existe un elemento DOM agregar uno nuevo.
    if (!existingParent) {
      addRootElement(parentElement)
    }

    // Agregar elemento envoltoriO al padre.
    parentElement.append(rootElement.current)

    return () => {
      rootElement.current.remove()
      if (!parentElement.childElementCount) {
        parentElement.remove()
      }
    }
  }, [id])

  /**
    * Es importante manejar esto de forma diferida (lazy):
    * - Se necesita que el primer render contenga el elemento DOM,
    *   pero no podemos agregarlo al useEffect.
    * - No podemos hacer 'const rootElementRef = useRef(document.createLement('div'))'
    *   dado que esto se ejecutará cada vez que se renderice.
    * - Queremos que la referencia apunte siempre al mismo elemento DOM y que sólo se ejecute
    *   una vez.
    * @link https://es.reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily
    */
  function getRootElement () {
    if (!rootElement.current) {
      rootElement.current = document.createElement('div')
    }
    return rootElement.current
  }

  return getRootElement()
}

export { usePortal }
