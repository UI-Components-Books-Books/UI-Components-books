import { useRef, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

import css from './Paper.module.scss'

export const Paper = ({ children, color, addClass, ...props }) => {
  /**
    * Se necesita obtener la referencia del elemento padre
    * para actualizar la variable '--clr-line' que nos
    * permite cambiar el color de las lineas.
    */
  const container = useRef(null)

  useLayoutEffect(() => {
    color && container.current.style.setProperty('--clr-line', `${color}`)
  }, [color])

  return (
    <div ref={container} className={`${css['c-paper']} ${addClass ?? ''}`} {...props}>
      {children}
    </div>
  )
}

Paper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node, PropTypes.arrayOf(PropTypes.element), PropTypes.arrayOf(PropTypes.node)]),
  addClass: PropTypes.string,
  color: PropTypes.string
}
