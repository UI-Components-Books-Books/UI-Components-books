import { useContext } from 'react'
import { useDraggable } from '@dnd-kit/core'
import { CSS } from '@dnd-kit/utilities'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { typeValidation } from '../../../utils/validations/typeValidation'
import { DragAndDropContext } from '../../../components'

import css from './Drag.module.scss'

export const Draggable = ({ children, id, addClass, dragging, label, attribute, disabledDefaultAttributes, element, defaultStyle, __TYPE, ...props }) => {
  /**
    * Creamos una variable con el elemento a generar
    * por el componente, esto nos permite usar
    * la sintaxis de JSX que es más
    * fácil de leer y manipular.
    */
  const Element = element || 'div'

  /**
    * Obtenemos las diferentes propiedades
    * pasadas a través del contexto generado
    * en el componente DragAndDrop.
    */
  const { listId, propValidate, validate, isDragging } = useContext(DragAndDropContext)

  /**
    * Utilizamos el hook useDraggable
    * para poder agregar la funcionalidad
    * de "drag" al componente.
    */
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
    disabled: validate,
    data: {
      label
    },
    ...({ attributes: attribute } || {})
  })

  return (
    <Element
      id={id}
      ref={setNodeRef}
      data-type={__TYPE}
      className={classnames({
        [css['c-draggable']]: !defaultStyle,
        [`${dragging} ${css['is-draggable--active-animation']}`]: isDragging === id && !defaultStyle,
        [addClass]: addClass
      })}
      style={{ transform: CSS.Translate.toString(transform) }}
      {...(validate && { [propValidate]: !!listId.includes(id) })}
      {...(!disabledDefaultAttributes && { ...attributes })}
      {...listeners}
      {...props}
    >
      {children}
    </Element>
  )
}

Draggable.defaultProps = {
  __TYPE: 'draggable',
  dragging: css['c-draggable--active'],
  disabledDefaultAttributes: false
}

Draggable.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]),
  id: PropTypes.string.isRequired,
  addClass: PropTypes.string,
  dragging: PropTypes.string,
  label: PropTypes.string.isRequired,
  attribute: PropTypes.shape({
    role: PropTypes.string,
    roleDescription: PropTypes.string,
    tabIndex: PropTypes.number
  }),
  disabledDefaultAttributes: PropTypes.bool,
  element: PropTypes.string,
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('draggable')
}
