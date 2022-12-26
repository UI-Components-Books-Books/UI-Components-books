import { Children } from 'react'
import PropTypes from 'prop-types'

import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Icon.module.scss'

// Expresion regular usada para obtener el nombre del svg del path.
const REGEX = /\w+\.svg/gi

export const Icon = ({ children, path, size, addClass }) => {
  /**
   * Evaluamos la propiedad path para no retonar nada si esta no existen.
   */
  if (!path) {
    return <span>Doesn&apos;t exist</span>
  }

  // Si tiene más de 1 hijo no mostrar el Icon
  if (Children.count(children) > 1) {
    return <span>Only have one children</span>
  }

  /**
   * Utilizado para mantener la cadena de texto del URL estática.
   */
  const PATH = `${path}#${path.match(REGEX)}`

  /**
   *
   * Se encarga de generar la ruta para obtener
   * el svg.
   *
   * @url https://es.vitejs.dev/guide/assets.html#new-url-url-import-meta-url
   * @returns {String} New URL
   */
  const base = new URL(PATH, import.meta.url).href

  return children
    ? (
        Children.clone(children, {
          ...children.props,
          className: `${css['c-icon']} ${css[`c-${size}`]} ${addClass ?? ''}`
        })
      )
    : (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='48'
        height='48'
        viewBox='0 0 48 48'
        className={`${css['c-icon']} ${css[`c-${size}`]} ${addClass ?? ''}`}
        aria-hidden='true'
      >
        <use xlinkHref={base} />
      </svg>
      )
}

Icon.propTypes = {
  children: PropTypes.oneOfType(PropTypes.element, PropTypes.node),
  path: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  addClass: PropTypes.string,
  __TYPE: typeValidation('Icon')
}

Icon.defaultProps = {
  size: 'normal',
  __TYPE: 'Icon'
}
