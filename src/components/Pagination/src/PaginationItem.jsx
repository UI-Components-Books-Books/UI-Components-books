import { cloneElement } from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../../Icon'

import css from './Pagination.module.scss'

export const PaginationItem = ({ page, type, addClass, disabled, element, icons, selected, ...props }) => {
  /**
    * Se crea un objeto con el fin de almacenar los diferentes
    * tipos de iconos que se usaran para los botones previus,
    * next, last y first de la páginación.
    */

  const normalizedIcons = {
    previous: icons?.previous || <path id='navigate_before' d='M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z' />,
    next: icons?.next || <path id='navigate_next' d='m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z' />,
    last: icons?.last || <path id='last_page' d='m13.6 35.75-2.15-2.15 9.6-9.6-9.6-9.6 2.15-2.15L25.35 24ZM33 36V12h3v24Z' />,
    first: icons?.first || <path id='first_page' d='M12 36V12h3v24Zm22.35-.15-11.7-11.7 11.7-11.7 2.15 2.15-9.55 9.55 9.55 9.55Z' />
  }

  // Variable que contiene el icono a utilizar dependiendo de la propiedad type.
  const icon = normalizedIcons[type]

  return (type === 'start-ellipsis' || type === 'end-ellipsis')
    ? (
      // Devolvemos '...' si es de tipo ellipsis.
      <div className={css['c-pagination-item__ellipsis']}>...</div>
      )
    : (
        cloneElement(
          element,
          {
            disabled,
            className: `${css['c-pagination-item']} ${addClass ?? ''} ${selected ? css['c-pagination-item--selected'] : ''}`,
            ...element.props,
            ...props
          },
          [
            // Si es de tipo página colocar la página e.g 1,2,3.
            type === 'page' && page,
            // Si existe el icono agregarlo e.g icon = 'last_page'
            icon
              ? icons
                ? <Icon path={icon} key={type} />
                : (
                  <Icon key={type}>
                    <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
                      {icon}
                    </svg>
                  </Icon>
                  )
              : null

          ]
        )
      )
}

PaginationItem.propTypes = {
  page: PropTypes.number,
  type: PropTypes.string,
  addClass: PropTypes.string,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  element: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.string]),
  icons: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string,
    next: PropTypes.string,
    previous: PropTypes.string
  })
}

PaginationItem.defaultProps = {
  element: <button />
}
