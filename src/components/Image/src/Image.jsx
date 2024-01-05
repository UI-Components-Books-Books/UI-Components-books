import { useState, forwardRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import css from './Image.module.scss'

export const Image = forwardRef(({
  url,
  alt,
  title,
  width,
  addClass,
  noCaption,
  defaultStyle,
  lazySize,
  ...props
}, ref) => {
  // Estado para determinar si se muestra la imagen por defecto.
  const [error, setError] = useState(false)

  const base = new URL('/assets/images/base-image.png', import.meta.url).href

  /**
   * Función de error, al no conseguir la imagen cambia el estado setError
   * y muestra la imagen por defecto.
   *
   * @param {boolean} value
   */
  const onError = (value) => setError(value)

  /**
   * Condicionamos que imagen se va a mostrar
   * dependiendo del valor del estado error.
   */
  const imgToSee = !error ? `${url}` : base

  return (
    <figure
      className={classnames({
        [css['c-image']]: !defaultStyle,
        [addClass]: addClass
      })}
      {...(width && { style: { maxWidth: `${/%/gi.test(width) ? width : `${width}px`}` } })}
    >
      <img
        ref={ref}
        src={imgToSee}
        onError={onError}
        alt={alt}
        {...(lazySize && { ...lazySize })}
        {...props}
      />

      {!noCaption && (
        <figcaption className={css['c-image__figcaption']}>
          <p>
            <strong>{title}&nbsp;</strong>
            {alt}
          </p>
        </figcaption>
      )}
    </figure>
  )
})

Image.displayName = 'Image'

Image.defaultProps = {
  title: 'Image 1.',
  alt: 'Default image.',
  noCaption: false
}

Image.propTypes = {
  url: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  width: PropTypes.string,
  addClass: PropTypes.string,
  noCaption: PropTypes.bool,
  defaultStyle: PropTypes.bool,
  lazySize: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string
  })
}
