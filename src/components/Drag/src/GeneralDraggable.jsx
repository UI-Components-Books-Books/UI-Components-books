import PropTypes from 'prop-types'
import { useDroppable } from '@dnd-kit/core'
import _uniquedId from 'lodash/uniqueId'

import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Drag.module.scss'

export const GeneralDraggable = ({ children, addClass, id, label, element, __TYPE, ...props }) => {
  /**
    * Creamos una variable con el elemento a generar
    * por el componente, esto nos permite usar
    * la sintaxis de JSX que es más
    * fácil de leer y manipular.
    */
  const Element = element || 'div'

  /**
    * Utilizamos el hook useDroppable
    * para poder agregar la funcionalidad
    * de "drop" al componente.
    */
  const { setNodeRef } = useDroppable({
    id,
    data: {
      label,
      type: 'container'
    }
  })

  return (
    <Element id={id} ref={setNodeRef} data-type={__TYPE} className={`${css['c-droppable']} ${addClass ?? ''}`} {...props}>
      {children}
    </Element>
  )
}

GeneralDraggable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]),
  addClass: PropTypes.string,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  element: PropTypes.string,
  __TYPE: typeValidation('general-draggable')
}

GeneralDraggable.defaultProps = {
  __TYPE: 'general-draggable',
  id: _uniquedId('unique-id-general-'),
  label: 'contendor inicial'
}
