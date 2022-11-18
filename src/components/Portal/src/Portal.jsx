import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import { usePortal } from '../../../hooks/usePortal'

export const Portal = ({ children, id }) => {
  /**
    * Utilizamos el custom hook de usePortal para
    * obtener el elemento que vamos a usar
    * para crear nuestro portal.
    */
  const target = usePortal(id)

  return createPortal(children, target)
}

Portal.propTypes = {
  children: PropTypes.any,
  id: PropTypes.string.isRequired
}
