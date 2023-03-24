import {
  useState,
  Children,
  cloneElement,
  isValidElement,
  useEffect
} from 'react'
import PropTypes from 'prop-types'

export const SelectGroup = ({ children: childrenProps, onAllSelect }) => {
  // Estado para controlar el valor de los select
  const [allSelect, setAllSelect] = useState([])

  /**
   * Función encargada de actualzar el estado con los valores
   * provenientes del select component.
   * @param {object} choise
   */
  /**
   * Función callback que se pasa como parámetro del componente select,
   * encargada de actualzar el estado con los valores
   * provenientes del select component.
   *
   * @return un objeto con los valores ID y value.
   * param {Object} value - Objeto { Id, value }
   */
  const onAddSelect = (choise) =>
    setAllSelect([
      ...allSelect.filter((option) => option.id !== choise.id),
      { ...choise }
    ])

  useEffect(() => {
    // Si existe la propiedad onAllSelect emita el valor del estado
    if (onAllSelect) onAllSelect(allSelect)
  }, [allSelect, onAllSelect])

  /**
   * Necesitamos agregar las propiedades onChoise al componente select.
   */
  const children = Children.map(childrenProps, (child) => {
    if (!isValidElement(child)) return null

    if (child?.props?.__TYPE === 'Select') {
      return cloneElement(child, { ...child.props, onChoise: onAddSelect })
    }

    return child
  })

  return children
}

SelectGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node
  ]),
  onAllSelect: PropTypes.func
}
