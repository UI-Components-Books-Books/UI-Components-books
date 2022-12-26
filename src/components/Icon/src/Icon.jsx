import PropTypes from 'prop-types'

import { typeValidation } from '../../../utils/validations/typeValidation'
import { iconList } from '../../../utils/icons/iconsList'

import css from './Icon.module.scss'

export const Icon = ({ name, size, addClass }) => {
  /**
    * Evaluamos la propiedad name y la variable VITE_ICON_PATH para no retonar nada si estas no existen.
    */
  if (!name || !import.meta.env.VITE_ICON_PATH) {
    return <span>Doesn&apos;t exist or VITE_ICON_PATH environment variable it's undefined</span>
  }

  /**
   * Utilizado para mantener la cadena de texto de URL estática.
   */
  const PATH = `${import.meta.env.VITE_ICON_PATH}${name}.svg#${name}`

  /**
   *
   * Se encarga de generar la ruta para obtener
   * el svg.
   *
   * @url https://es.vitejs.dev/guide/assets.html#new-url-url-import-meta-url
   * @returns {String} New URL
   */
  const base = new URL(PATH, import.meta.url).href

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 0 48 48'
      className={`${css['c-icon']} ${css[`c-${size}`]} ${addClass ?? ''}`}
      aria-hidden='true'
      data-testid={name}
    >
      <use xlinkHref={base} />
    </svg>
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(iconList),
  size: PropTypes.oneOf(['small', 'normal', 'big']),
  addClass: PropTypes.string,
  __TYPE: typeValidation('Icon')
}

Icon.defaultProps = {
  size: 'normal',
  name: 'play',
  __TYPE: 'Icon'
}
