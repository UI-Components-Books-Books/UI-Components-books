import { useState, Children, cloneElement, isValidElement, useEffect } from 'react'
import PropTypes from 'prop-types'

export const InputGroup = ({ children: childrenProps, onAllValue }) => {
  /**
    * Estado usado para almacenar los objetos
    * provenientes de los inputs que han sido modificados.
    */
  const [allValue, setAllValue] = useState([])

  /**
    * Función callback que se pasa como parámetro del componente Input
    * y retorna un objeto con los valores ID y value.
    *
    * @param {Object} choise - Objeto { Id, value }
    */
  const onAddValue = (choise) => setAllValue([...allValue.filter((option) => option.id !== choise.id), { ...choise }])

  useEffect(() => {
    // Si existe la propiedad onAllValue emita el valor del estado.
    if (onAllValue) onAllValue(allValue)
  }, [allValue, onAllValue])

  /**
    * Función que se realizo para agregar las propiedades onValue
    * al componente Input que se pasa junto al InputStyle.
    *
    * @param {ReactNode[]} childs - Arreglo de childrens.
    * @param {string} type - Tipo de child a modificar.
    * @param {object} properties - Objeto de propiedades para agregar a los children.
    * @returns {ReactNode[]} Arreglo de children modificados.
    */
  const setChildProperties = (childs, type, properties) => {
    return Children.toArray(childs).map((child) => {
      if (child.props.__TYPE === type) {
        return cloneElement(child, { ...child.props, ...properties })
      }
      return child
    })
  }

  /**
    * Agregamos la propiedad onValue al componente Input.
    */
  const children = Children.map(childrenProps, (child) => {
    if (!isValidElement(child)) return null

    if (child?.props?.__TYPE === 'InputStyle') {
      return cloneElement(child, { ...child.props, children: setChildProperties(child.props.children, 'Input', { onValue: onAddValue }) })
    }

    if (child?.props?.__TYPE === 'Input') {
      return cloneElement(child, { ...child.props, onValue: onAddValue })
    }

    return child
  })

  return children
}

InputGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]),
  onAllValue: PropTypes.func
}
