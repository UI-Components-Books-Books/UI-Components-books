import {
  cloneElement,
  useState,
  Children,
  isValidElement,
  useEffect,
  createContext,
  useRef
} from 'react'
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
import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis
} from '@dnd-kit/modifiers'

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
  screenReaderInstructions,
  announcements,
  defaultState,
  defaultValidate,
  onState,
  id: idDragAndDrop
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
  const [items, setItems] = useState(() =>
    Object.keys(defaultState).length > 0 ? defaultState : initialState()
  )

  /**
   * Referencia utilizada como "flag", para que cuando
   * cambie el estado items, envie el nuevo estado la
   * propiedad onState si está existe.
   */
  const flagUpdatedState = useRef(false)

  /**
   * Función utilizada para inicializar el estado items.
   * esta extrae los id de los contendores "drag" y los
   * estructura en un objecto.
   *
   * @returns {Object} - Objeto con los id de cada elemento drop.
   */
  function initialState () {
    return [
      ...getChildrenByType(childrenProps, 'droppable'),
      ...getChildrenByType(childrenProps, 'general-draggable')
    ].reduce(
      (list, value) => ({
        ...list,
        [value.props.id]: value.props.children
          ? [
              ...getChildrenByType(value.props.children, 'draggable').map(
                (item) => item.props.id
              )
            ]
          : []
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

    let newArrayValidate = [...validateId]

    // Si el id se encuentra en el validateId y ahora ese drag
    // se mueve a el baseContainer entonces, eliminamos
    // este id que estaba en el arreglo validateId.
    if (baseContainer === container.id && validateId.includes(id)) {
      newArrayValidate = validateId.filter((item) => item !== id)
    }

    if (baseContainer !== container.id) {
      newArrayValidate = [
        ...validateId.filter((item) => item !== id),
        container.data.current.validate.includes(id) ? id : ''
      ].filter((item) => !!item)
    }

    if (!multipleDrags) {
      const previousItem = items[container.id][0]

      // Eliminamos el valor previo que estaba en el arreglo.
      // De esta manera, si remplazamos el drag correcto con uno nuevo drag, el anterior ya no debe existir
      // en el arreglo de validate porque significa que el nuevo drag es incorrecto.
      newArrayValidate = previousItem
        ? newArrayValidate.filter((item) => item !== previousItem)
        : newArrayValidate
    }

    if (onValidate) {
      onValidate({ validate: [...newArrayValidate], active: true })
    }

    setValidateId(newArrayValidate)
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

    // Obtenemos la llave que corresponde al elemento base de los drag.
    const baseContainer = Object.keys(items).pop()

    // Contendor en el cual el drag se soltó.
    const overContainer = findContainer(over.id)
    // Contenedor donde estaba el drag.
    const activeContainer = findContainer(active.id)

    // Si el drag no se movio entonces no hacemos nada.
    if (activeContainer === overContainer) return

    // Solo se realiza la validación cuando el elemento es diferente al elemento base de los drag.
    // if (baseContainer !== over.id) validateDrags(over, active.id)
    validateDrags(over, active.id)

    setItems((items) => {
      // Actualizamos nuestro flag a true, con esto permite actualizar la propiedad onState.
      // con los cambios de items.
      flagUpdatedState.current = true

      const listOfItemsWithoutActiveItem = items[activeContainer].filter(
        (item) => item !== active.id
      )

      const listOfPreviousItems = [...items[overContainer]]

      // Si la propiedad multipleDrags está en true.
      if (multipleDrags) {
        return {
          ...items,
          [activeContainer]: listOfItemsWithoutActiveItem,
          [overContainer]: [...listOfPreviousItems, active.id]
        }
      }

      const newObjectState = {
        ...items,
        [activeContainer]: listOfItemsWithoutActiveItem,
        [overContainer]:
          overContainer === baseContainer
            ? [...listOfPreviousItems, active.id]
            : [active.id]
      }

      return {
        ...newObjectState,
        ...(overContainer !== baseContainer &&
          items[overContainer].length > 0 && {
          [baseContainer]: [
            ...items[baseContainer].filter((item) => item !== active.id),
            ...items[overContainer]
          ]
        })
      }
    })
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
          ...items[child.props.id]
            .map((item) =>
              getChildrenByType(childrenProps, 'draggable').filter(
                (drag) => drag.props.id === item
              )
            )
            .flat()
        ])
      }

      if (child.props.children) {
        return cloneElement(child, {
          ...child.props,
          children: updatedChild(child.props.children)
        })
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
   * Efecto que se encarga de actualzar de reinicar el estado items
   * cada vez que la propiedad reboot esté en true.
   */
  useEffect(() => {
    if (reboot) {
      setItems(() => initialState())
      setValidateId([])

      if (onValidate) onValidate({ validate: [], active: false })
    }
  }, [reboot])

  /**
   * Efecto que observa los cambios en el propiedad defaultState
   * y si está cambia actualiza el estado items
   */
  useEffect(() => {
    if (Object.keys(defaultState).length === 0) return

    setItems(defaultState)
  }, [defaultState])

  useEffect(() => {
    if (defaultValidate.length === 0) return

    setValidateId(defaultValidate)
  }, [defaultValidate])

  /**
   * Efecto que observa los cambios en el estado items
   * y si existe la propiedad onState llama a está con
   * la información de items
   */
  useEffect(() => {
    if (onState && flagUpdatedState.current) {
      flagUpdatedState.current = false

      onState({
        state: { key: idDragAndDrop, newObjectState: { ...items }, validateId }
      })
    }
  }, [onState, items])

  return (
    <DragAndDropContext.Provider
      value={{
        listId: validateId,
        propValidate,
        validate,
        isDragging: activeId
      }}
    >
      <DndContext
        sensors={sensors}
        accessibility={{
          announcements,
          screenReaderInstructions: {
            draggable: screenReaderInstructions
          }
        }}
        onDragStart={({ active }) => setActiveId(active.id)}
        onDragEnd={onDragEnd}
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
  announcements: defaultAnnouncements,
  defaultState: {},
  defaultValidate: [],
  screenReaderInstructions:
    'Para recoger un elemento arrastrable, presiona la barra espaciadora o la tecla Enter. Mientras arrastras, usa las teclas de flecha para mover el elemento en cualquier dirección deseada. Presiona nuevamente la barra espaciadora o la tecla Enter para soltar el elemento en su nueva posición, o presiona escape para cancelar.'
}

DragAndDrop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node)
  ]),
  multipleDrags: PropTypes.bool,
  onValidate: PropTypes.func,
  reboot: PropTypes.bool,
  validate: PropTypes.bool.isRequired,
  propValidate: PropTypes.string.isRequired,
  modifiers: PropTypes.oneOf([
    'restrictToVerticalAxis',
    'restrictToHorizontalAxis'
  ]),
  screenReaderInstructions: PropTypes.string.isRequired,
  announcements: PropTypes.object.isRequired,
  defaultState: PropTypes.object,
  defaultValidate: PropTypes.array,
  onState: PropTypes.func,
  id: PropTypes.string
}
