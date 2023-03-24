import PropTypes from 'prop-types'
import classnames from 'classnames'

import { PaginationItem } from '../../Pagination'
import { usePagination } from '../../../hooks/usePagination'

import css from './Pagination.module.scss'

/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar las definiciones en español
 * de diferentes terminos usados en el aria-label.
 */
const getSpanishType = Object.freeze({
  first: 'primera',
  last: 'última',
  previous: 'anterior',
  next: 'siguiente'
})

/**
 *
 * Se crea una función que permite definir el aria-label
 * de los elementos que son usados para crear la paginación.
 *
 * @param {String} type - Tipo de elemento
 * @param {Number} page - Número de la página
 * @param {Boolean} selected - Boolean que informa si está la página seleccionada.
 * @returns {string} Message - Mensaje utiliado en el aria-label
 */
const defaultAriaLabel = (type, page, selected) => {
  if (type === 'page') {
    return `${selected ? '' : 'Ir a la '}página ${page}`
  }
  return `Ir a la ${getSpanishType[type]} página`
}

export const Pagination = ({
  renderItem,
  getItemAriaLabel,
  addClass,
  defaultStyle,
  ...props
}) => {
  /**
   * Se utiliza el custom hook usePagination para
   * obtener la paginación.
   */
  const { items } = usePagination({ ...props })

  return (
    <nav
      className={classnames({
        [css['c-pagination']]: !defaultStyle,
        [addClass]: addClass
      })}
    >
      <ul
        className={classnames({
          [css['c-pagination__ul']]: !defaultStyle
        })}
        data-class='c-pagination__ul'
      >
        {items.map((item, index) => (
          <li key={`pagination-item-${index}`} data-class='c-pagination__ul-li'>
            {/* Utilizamos la render-prop para agregar el elemento que va a estar dentro del tag li */}
            {renderItem({
              ...item,
              'aria-label': getItemAriaLabel(
                item.type,
                item.page,
                item.selected
              ),
              ...(defaultStyle && { defaultStyle })
            })}
          </li>
        ))}
      </ul>
    </nav>
  )
}

Pagination.defaultProps = {
  boundaryCount: 1,
  count: 1,
  defaultPage: 1,
  disabled: false,
  hideNextButton: false,
  hidePrevButton: false,
  showFirstButton: false,
  showLastButton: false,
  siblingCount: 1,
  renderItem: (item) => <PaginationItem {...item} />,
  getItemAriaLabel: defaultAriaLabel
}

Pagination.propTypes = {
  addClass: PropTypes.string,
  boundaryCount: PropTypes.number,
  count: PropTypes.number,
  defaultPage: PropTypes.number,
  disabled: PropTypes.bool,
  hideNextButton: PropTypes.bool,
  hidePrevButton: PropTypes.bool,
  onChange: PropTypes.func,
  showFirstButton: PropTypes.bool,
  showLastButton: PropTypes.bool,
  siblingCount: PropTypes.number,
  renderItem: PropTypes.func,
  getItemAriaLabel: PropTypes.func,
  defaultStyle: PropTypes.bool
}
