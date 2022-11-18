import { useState } from 'react'

/**
 * Hook para crear una Paginación.
 *
 * Este hook realiza la creación de la estructura base para realizar una páginación,
 * incluyendo botones de siguiente, anterior, primera página y última página.
 *
 * @example
 *
 * const { items } = usePagination({ ...props });
 *
 * @param {Number} boundaryCount - Número de páginas que hay en el limite e.g. [1,2,3,...4,5,...7,8,9].
 * @param {Number} count - Número de página que va a tener la paginación.
 * @param {Number} defaultPage - Número de la página por defecto.
 * @param {Boolean} disabled - Deshabilita las páginas.
 * @param {Boolean} hideNextButton - Muestra/Oculta el botón de siguiente.
 * @param {Boolean} hidePrevButton - Muestra/Oculta el botón de anterior.
 * @param {Function} onChange - Método que se ejecuta al cambio de página.
 * @param {Boolean} showFirstButton - Muestra/Oculta el botón de primera página.
 * @param {Boolean} showLastButton - Muestra/Oculta el botón de última página.
 * @param {Number} siblingCount - Número de página hermanas que va a tener la página seleccionada.
 *
 * @returns {Object} Arreglo de items con la estructua de la páginación.
 */
const usePagination = (props) => {
  const {
    boundaryCount = 1,
    count = 1,
    defaultPage = 1,
    disabled = false,
    hideNextButton = false,
    hidePrevButton = false,
    onChange: handleChange,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
    ...other
  } = props

  // Estado para controlar las páginas
  const [page, setPage] = useState(defaultPage)

  /**
    * Función que se ejecuta al momento
    * de dar click en los botones.
    * @param {Event} event
    * @param {Number} value
    */
  const handleClick = (event, value) => {
    setPage(value)

    if (handleChange) {
      handleChange(event, value)
    }
  }

  /**
    * Función que genera un array a partir de un rango
    * de valores.
    *
    * @param {Number} start
    * @param {Number} end
    * @returns {Number[]} Array con el rango de números
    */
  const range = (start, end) => {
    const length = end - start + 1
    // Genera un array utilizando un Array-like
    return Array.from({ length }, (_, i) => start + i)
  }

  // Array de las páginas del inicio. e.g. [1,2]
  const startPages = range(1, Math.min(boundaryCount, count))
  // Array de las páginas del final. e.g. [9,10]
  const endPages = range(Math.max(count - boundaryCount + 1, boundaryCount + 1), count)

  const siblingsStart = Math.max(
    Math.min(
      // Inicio natural
      page - siblingCount,
      // Limite inferior cuando la página es mayor
      count - boundaryCount - siblingCount * 2 - 1
    ),
    // Mayor que el startPages
    boundaryCount + 2
  )

  const siblingsEnd = Math.min(
    Math.max(
      // Final natural
      page + siblingCount,
      // Limite superior cuando la página es menor
      boundaryCount + siblingCount * 2 + 2
    ),
    // Menor que el endPages
    endPages.length > 0 ? endPages[0] - 2 : count - 1
  )

  // Lista basica de items a renderizar
  // e.g. itemList = ['first', 'previous', 1, 'ellipsis', 4, 5, 6, 'ellipsis', 10, 'next', 'last']
  const itemList = [
    ...(showFirstButton ? ['first'] : []),
    ...(hidePrevButton ? [] : ['previous']),
    ...startPages,

    // Comienza el ellipsis
    ...(siblingsStart > boundaryCount + 2 ? ['start-ellipsis'] : boundaryCount + 1 < count - boundaryCount ? [boundaryCount + 1] : []),

    // Sibling pages
    ...range(siblingsStart, siblingsEnd),

    // Finaliza el ellipsis
    ...(siblingsEnd < count - boundaryCount - 1 ? ['end-ellipsis'] : count - boundaryCount > boundaryCount ? [count - boundaryCount] : []),

    ...endPages,
    ...(hideNextButton ? [] : ['next']),
    ...(showLastButton ? ['last'] : [])
  ]

  // Asigna el número del botón apartir del tipo de este
  const buttonPage = (type) => {
    switch (type) {
      case 'first':
        return 1
      case 'previous':
        return page - 1
      case 'next':
        return page + 1
      case 'last':
        return count
      default:
        return null
    }
  }

  // Convierte la lista de elemento básicos en objetos
  const items = itemList.map((item) => {
    return typeof item === 'number'
      ? {
          onClick: (event) => {
            handleClick(event, item)
          },
          type: 'page',
          page: item,
          selected: item === page,
          disabled,
          'aria-current': item === page ? true : undefined
        }
      : {
          onClick: (event) => {
            handleClick(event, buttonPage(item))
          },
          type: item,
          page: buttonPage(item),
          selected: false,
          disabled: disabled || (item.indexOf('ellipsis') === -1 && (item === 'next' || item === 'last' ? page >= count : page <= 1))
        }
  })

  return {
    items,
    ...other
  }
}

export { usePagination }
