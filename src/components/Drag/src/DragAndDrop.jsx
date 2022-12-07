import { cloneElement, useState, Children, isValidElement, useEffect, createContext } from 'react'
import PropTypes from 'prop-types'
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors
  // DragOverlay
  // defaultDropAnimationSideEffects
} from '@dnd-kit/core'
import { restrictToHorizontalAxis, restrictToVerticalAxis } from '@dnd-kit/modifiers'

import { coordinateGetter } from './KeyboardCoordinates'

// import css from './Drag.module.scss'
/**
 * Creamos el contexto que usamos
 * para poder pasar diferentes valores
 * al componente Draggable de una forma
 * más sencilla.
 */
export const DragAndDropContext = createContext()

/**
 * Función utilizada para devolver de los hijos de un
 * componente el elemento de un tipo especifico.
 *
 * @param {ReactElement[]} children - Hijos del componente.
 * @param {String} type - Tipo de componente.
 * @returns {ReactElement} Elemento de React.
 */
const getChildrenByType = (children, type) => {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return

    // Utilizamos esta validación para preever errores cuando son string.
    if (!child.props) return

    if (child?.props?.__TYPE === type) {
      return child
    }

    if (child.props.children) {
      return getChildrenByType(child.props.children, type)
    }
  })
}

/**
 * Objeto utilizado para la parte de accesibilidad.
 * este contiene los diferentes anuncios por defecto
 * que los lectores de pantalla dirán cuando se ejecuten
 * los eventos: onDragCancel, onDragStart, onDragEnd y onDragOver.
 */
const defaultAnnouncements = {
  onDragStart ({ active }) {
    return `Se ha agarrado el elemento arrastrable ${active.data.current.label}.`
  },
  onDragOver ({ active, over }) {
    if (over) {
      return `El elemento arrastrable ${active.data.current.label} se movió sobre la área desplegable ${over.data.current.label}.`
    }

    return `El elemento arrastrable ${active.data.current.label} ya no está sobre una área desplegable.`
  },
  onDragEnd ({ active, over }) {
    if (over) {
      return `El elemento arrastrable ${active.data.current.label} se soltó sobre la área desplegable ${over.data.current.label}.`
    }

    return `El elemento arrastrable item ${active.data.current.label} se eliminó.`
  },
  onDragCancel ({ active }) {
    return `Se cancelo el arrastre. El elemento arrastrable ${active.data.current.label} se eliminó.`
  }
}

export const DragAndDrop = ({
  children: childrenProps,
  multipleDrags,
  onValidate,
  validate,
  reboot,
  propValidate,
  modifiers: modifiersProp,
  announcements,
  onDragMove
}) => {
  /**
    * Utilizamos este estado para almacenar la lista
    * de "drags" que están en su contenedor "drop" correcto.
    */
  const [validateId, setValidateId] = useState([])

  /**
    * Estado utilizado para almacenar el "id" del elemento "drag"
    * seleccionado. Esto nos ayuda para el DragOverlay y para aplicar
    * estilos al componente cuando está en dicho estado.
    */
  const [activeId, setActiveId] = useState(null)

  /**
    * Estado principal del componente, este se encarga
    * de almacenar la posición de los elementos "drag"
    * en los contenedores "drop".
    */
  const [items, setItems] = useState(() => initialState())

  /**
    * Función utilizada para inicializar el estado items.
    * esta extrae los id de los contendores "drag" y los
    * estructura en un objecto.
    *
    * @returns {Object} - Objeto con los id de cada elemento drop.
    */
  function initialState () {
    return [...getChildrenByType(childrenProps, 'droppable'), ...getChildrenByType(childrenProps, 'general-draggable')].reduce(
      (list, value) => ({
        ...list,
        [value.props.id]: value.props.children ? [...getChildrenByType(value.props.children, 'draggable').map((item) => item.props.id)] : []
      }),
      {}
    )
  }

  /**
    * Objeto con los modificadores permitidos
    * por el componente.
    */
  const modifiers = Object.freeze({
    restrictToVerticalAxis,
    restrictToHorizontalAxis
  })

  /**
    * Sensores que detectan los
    * diferentes métodos de entrada
    * entre ellos: Mouse, Touch y Keyboard.
    */
  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter
    })
  )

  /**
    * Función que evalua si el elemento "drag"
    * dentro del contenedor "drop" es correcto.
    * De esta manera actualizamos nuestro estado validateId.
    *
    * @param {Object} container - Objeto del contenedor "drop"
    * @param {String} id - Id del "drag" seleccionado.
    */
  const validateDrags = (container, id) => {
    // Obtenemos la llave que corresponde al elemento base de los drag.
    const baseContainer = Object.keys(items).pop()

    if (baseContainer !== container.id && container.data.current.validate.includes(id)) {
      return setValidateId((prev) => [...prev.filter((item) => item !== id), id])
    }

    setValidateId((prev) => [...prev.filter((item) => item !== id)])
  }

  /**
    * Función utilizada para buscar entre el estado items
    * un elemento o contenedor especifico.
    * @param {String} id - Id del elemento|contenedor a buscar.
    * @returns {String}
    */
  const findContainer = (id) => {
    if (id in items) {
      return id
    }
    return Object.keys(items).find((key) => items[key].includes(id))
  }

  /**
    * Función utilizada en el evento onDragEnd.
    * Se encarga de actualizar el estado item,
    * dependiendo del movimiento de elemento "drag"
    * entre los diferentes contenedores "drop".
    *
    * @param {Object} - Objeto con las propiedades active y over.
    * @returns
    */
  const onDragEnd = ({ active, over }) => {
    if (!over) return

    setActiveId(null)

    validateDrags(over, active.id)

    // Contendor en el cual el drag se soltó.
    const overContainer = findContainer(over.id)
    // Contenedor donde estaba el drag.
    const activeContainer = findContainer(active.id)

    if (activeContainer !== overContainer) {
      // Si la propiedad multipleDrags está en true.
      if (multipleDrags) {
        return setItems((items) => ({
          ...items,
          [activeContainer]: items[activeContainer].filter((item) => item !== active.id),
          [overContainer]: [...items[overContainer], active.id]
        }))
      }

      // Obtenemos la llave que corresponde al elemento base de los drag.
      const baseContainer = Object.keys(items).pop()

      setItems((items) => ({
        ...items,
        [overContainer]: overContainer === baseContainer ? [...items[overContainer], active.id] : [active.id],
        [activeContainer]:
               overContainer === baseContainer
                 ? items[activeContainer].filter((item) => item !== active.id)
                 : [...items[activeContainer].filter((item) => item !== active.id), ...items[overContainer]]
      }))
    }
  }

  /**
    * Función utilizada para actualizar los hijos de elementos que
    * están dentro de la propiedad children del componente.
    * En especial se encarga de agregar los elementos "drag" como hijo
    * de los contenedores "drop".
    *
    * @param {ReactElement[]} children - Hijos del componente.
    * @returns
    */
  const updatedChild = (children) =>
    Children.map(children, (child) => {
      if (!child.props) return child

      if (child.props.__TYPE === 'draggable') return

      /**
          * Comprueba que el child este en el estado items y además
          * que tenga uno o más elementos "drag" en su interior.
          */
      if (child.props.id in items && items[child.props.id].length > 0) {
        return cloneElement(child, { ...child.props }, [
          ...items[child.props.id].map((item) => getChildrenByType(childrenProps, 'draggable').filter((drag) => drag.props.id === item)).flat()
        ])
      }

      if (child.props.children) {
        return cloneElement(child, { ...child.props, children: updatedChild(child.props.children) })
      }

      return child
    })

  /**
    * Función que replica la estructura del componente "draggable"
    * pero sin la funcionalidad del useDraggable, dado de que los elementos
    * que recibe el componente DragOverlay no deben ser elementos que se
    * puedan arrastrar.
    *
    * @link https://docs.dndkit.com/api-documentation/draggable/drag-overlay
    * @returns {ReactElement} - Elemento hijo del draggable.
    */
  // const getDragOverlay = () => {
  //   const child = getChildrenByType(childrenProps, 'draggable')
  //     .filter((item) => item.props.id === activeId)
  //     .reduce((object, item) => ({ ...object, ...item.props }), {})

  //   return createElement(child?.element || 'div', { className: `${css['c-draggable']} ${child?.addClass}` }, [child.children])
  // }

  /**
    * Objeto que contiene las transiciones utilizadas
    * por el componente DragOverlay.
    */
  // const dropAnimation = {
  //   sideEffects: defaultDropAnimationSideEffects({
  //     styles: {
  //       active: {
  //         opacity: '0.5'
  //       }
  //     }
  //   })
  // }

  /**
    * Efecto que se encarga de mandar el valor el estado validateId
    * a través de la propiedade onValidate.
    */
  useEffect(() => {
    if (validateId.length > 0 && onValidate) onValidate(validateId)
  }, [validateId, onValidate])

  /**
    * Efecto que se encarga de actualzar de reinicar el estado items
    * cada vez que la propiedad reboot esté en true.
    */
  useEffect(() => {
    if (reboot) setItems(() => initialState())
  }, [reboot])

  return (
    <DragAndDropContext.Provider value={{ listId: validateId, propValidate, validate, isDragging: activeId }}>
      <DndContext
        sensors={sensors}
        accessibility={{ announcements }}
        onDragStart={({ active }) => setActiveId(active.id)}
        onDragEnd={onDragEnd}
        {...(!!onDragMove && { onDragMove })}
        onDragCancel={() => setActiveId(null)}
        {...(modifiersProp && { modifiers: [modifiers[modifiersProp]] })}
      >
        {updatedChild(childrenProps)}

        {/* <DragOverlay>{getDragOverlay()}</DragOverlay> */}
      </DndContext>
    </DragAndDropContext.Provider>
  )
}

DragAndDrop.defaultProps = {
  multipleDrags: false,
  validate: false,
  reboot: false,
  propValidate: 'data-validation',
  announcements: defaultAnnouncements
}

DragAndDrop.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element), PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
  multipleDrags: PropTypes.bool,
  onValidate: PropTypes.func,
  reboot: PropTypes.bool,
  validate: PropTypes.bool.isRequired,
  propValidate: PropTypes.string.isRequired,
  modifiers: PropTypes.oneOf(['restrictToVerticalAxis', 'restrictToHorizontalAxis']),
  announcements: PropTypes.object.isRequired,
  onDragMove: PropTypes.func
}
