import { Children, cloneElement } from 'react'
import PropTypes from 'prop-types'

import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Icon.module.scss'

// Expresion regular usada para obtener el nombre del svg que está path.
const REGEX = /\w+\.svg/gi

export const Icon = ({ children, path, size, addClass, viewBox, width, height }) => {
  /**
   * Evaluamos la propiedad path para no retonar nada si esta no existen.
   */
  if (!path && !children) {
    return <span>Doesn&apos;t exist</span>
  }

  // Si tiene más de 1 hijo no mostrar el Icon.
  if (Children.count(children) > 1) {
    return <span>Only have one children</span>
  }

  // Obtenemos el nombre el SVG usado para el path y el data-testid.
  const NAME_SVG = path && path.match(REGEX).toString().replace(/.svg/gi, '')

  /**
   * Utilizado construir la ruta del svg.
   * compuesta por el path del svg seguido del nombre del mismo.
   */
  const PATH = `${path}#${NAME_SVG}`

  return children
    ? (
        cloneElement(children, {
          ...children.props,
          className: `${css['c-icon']} ${css[`c-${size}`]} ${addClass ?? ''}`,
          'aria-hidden': true,
          'data-testid': NAME_SVG
        })
      )
    : (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width={width}
        height={height}
        viewBox={viewBox}
        className={`${css['c-icon']} ${css[`c-${size}`]} ${addClass ?? ''}`}
        aria-hidden='true'
        data-testid={NAME_SVG}
      >
        <use xlinkHref={PATH} />
      </svg>
      )
}

Icon.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  path: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  addClass: PropTypes.string,
  viewBox: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  __TYPE: typeValidation('Icon')
}

Icon.defaultProps = {
  size: 'normal',
  viewBox: '0 0 48 48',
  height: '48',
  width: '48',
  __TYPE: 'Icon'
}
