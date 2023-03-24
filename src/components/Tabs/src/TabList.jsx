import { cloneElement, Children, isValidElement, useRef } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { typeValidation } from '../../../utils/validations/typeValidation'
import { getChildrenByType } from '../../../utils/validations/getChildrenType'

import css from './Tabs.module.scss'

/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar el keyCode de las teclas up, down, end y home.
 */
const KEYCODE = Object.freeze({
  LEFT: 37,
  RIGHT: 39
})

export const TabList = ({
  children: ChildrenProps,
  addClass,
  label,
  orientation,
  defaultStyle,
  __TYPE,
  ...props
}) => {
  /**
   * Usado para almacenar las referencias
   * de todos los botones usados como Tab.
   */
  const refTabs = useRef([])

  /**
   * Función para utilizada para agregar una nueva referencia
   * al arreglo de referencias refTabs.
   *
   * @param {ReactNode[]} ref - Referencia del botón usado en el Tab.
   * @returns {ReactNode[]} refTabs - Arreglo de referencias.
   */
  const addNewRef = (ref) => (refTabs.current = [...refTabs.current, ref])

  /**
   * Función utilizada en el evento KeyDown del botón,
   * permite decidir el focus del siguiente elemento
   * utilizando las teclas ArrowLeft o ArrowRight.
   *
   * @param {Event} event - Evento disparado por KeyDown
   */
  const onNavigation = (e) => {
    // Obtenemos la primera Tab
    const FIRST_TAB = refTabs.current[0]
    // Obtenemos la última Tab
    const LAST_TAB = refTabs.current[refTabs.current.length - 1]

    // Si la tecla pulsada ArrowLeft
    if ((e.keyCode || e.which) === KEYCODE.LEFT) {
      if (e.target === FIRST_TAB) {
        LAST_TAB.focus()
      } else {
        const prevFocusButton = refTabs.current.indexOf(e.target) - 1
        // Agregamos el focus al botón anterior
        refTabs.current[prevFocusButton].focus()
      }
    } else if ((e.keyCode || e.which) === KEYCODE.RIGHT) {
      // Si la tecla pulsada es ArrowRight
      if (e.target === LAST_TAB) {
        FIRST_TAB.focus()
      } else {
        const nextFocusButton = refTabs.current.indexOf(e.target) + 1
        // Agregamos el focus al siguiente botón
        refTabs.current[nextFocusButton].focus()
      }
    }
  }

  const children = Children.map(ChildrenProps, (child, index) => {
    if (!isValidElement(child)) return null
    return cloneElement(child, {
      ...child.props,
      id: index,
      addNewRef,
      onNavigation
    })
  })

  return (
    <div
      role='tablist'
      data-type={__TYPE}
      aria-label={label}
      aria-orientation={orientation}
      className={classnames({
        [css['c-tab__list']]: !defaultStyle,
        [addClass]: addClass
      })}
      {...props}
    >
      {/* Filtramos los children para solo aceptar de tipo Tab. */}
      {getChildrenByType(children, ['Tab'])}
    </div>
  )
}

TabList.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element
  ]),
  addClass: PropTypes.string,
  label: PropTypes.string,
  orientation: PropTypes.string,
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('TabList')
}

TabList.defaultProps = {
  __TYPE: 'TabList',
  label: 'Simple tabs',
  orientation: 'horizontal'
}
