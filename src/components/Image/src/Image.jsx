import { useState } from 'react'
import PropTypes from 'prop-types'

import css from './Image.module.scss'

export const Image = ({ url, alt, title, width, addClass, noCaption, ...props }) => {
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
    <figure className={`${css['c-image']} ${addClass ?? ''}`} {...(width && { style: { maxWidth: `${/%/gi.test(width) ? width : `${width}px`}` } })}>
      <img src={imgToSee} onError={onError} alt={alt} {...props} />

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
}

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
  noCaption: PropTypes.bool
}
