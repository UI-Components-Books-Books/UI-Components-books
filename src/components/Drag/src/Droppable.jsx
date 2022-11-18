import { useDroppable } from '@dnd-kit/core'
import PropTypes from 'prop-types'

import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Drag.module.scss'

export const Droppable = ({ children, id, validate, addClass, over, label, element, __TYPE, ...props }) => {
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
  const { isOver, setNodeRef } = useDroppable({
    id,
    data: {
      validate,
      label,
      type: 'container'
    }
  })

  return (
    <Element ref={setNodeRef} data-type={__TYPE} className={`${css['c-droppable']} ${isOver && over && over} ${addClass ?? ''}`} {...props}>
      {children}
    </Element>
  )
}

Droppable.defaultProps = {
  __TYPE: 'droppable',
  over: css['c-droppable--active']
}

Droppable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  id: PropTypes.string.isRequired,
  validate: PropTypes.array.isRequired,
  addClass: PropTypes.string,
  over: PropTypes.string,
  label: PropTypes.string.isRequired,
  element: PropTypes.string,
  __TYPE: typeValidation('droppable')
}
