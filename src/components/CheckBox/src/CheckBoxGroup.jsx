import { Children, cloneElement, isValidElement, useState, useRef } from 'react'
import PropTypes from 'prop-types'

import { getChildrenByType } from '../../../utils/validations/getChildrenType'

export const CheckBoxGroup = ({ legend, children: childrenProps, onChecked, addClass }) => {
  /**
    * Estado usado para almacenar los objetos
    * provenientes de los checkbox que han sido seleccionados.
    */
  const [checked, setChecked] = useState([])

  /**
   * Almacena el tipo del input ya sea "checkbox" o "radio"
   */
  const inputType = useRef()

  /**
   * Se encarga de actualizar el valor
   * de la referencia inpuType.
   *
   * @param {String} type - tipo de input
   */
  const setInputType = (type) => {
    inputType.current = type || ''
  }

  /**
   * Función utilizada para evaluar que tipo
   * de array se devuelve a partir de el valor
   * del inputType
   *
   * @param {Array} value - Arreglo de Objetos
   * @returns {Array}
   */
  const validation = (value) => {
    if (inputType.current === 'radio') return [{ ...value }]

    const validate = checked.filter((option) => option.id === value.id)

    if (validate.length) {
      return [...checked.filter((option) => option.id !== value.id)]
    } else {
      return [...checked, { ...value }]
    }
  }

  /**
    * Función callback que se pasa como parámetro del componente CheckBox
    * y retorna un objeto con los valores ID y value.
    *
    * @param {Object} value - Objeto { Id, value }
    */
  const onCheck = (value) => {
    // Usada para almacenar el nuevo valor del estado. de esta manera no usamos un useEffect.
    const checkedArray = validation(value)

    // Si existe el método onChecked le pasamos el nuevo valor del estado.
    if (onChecked) {
      onChecked(checkedArray)
    }

    setChecked(checkedArray)
  }

  /**
    * Necesitamos agregar las propiedades onClick al componente CheckBox.
    */
  const children = Children.map(childrenProps, (child) => {
    if (!isValidElement(child)) return null

    if (child.props.__TYPE === 'CheckBox') {
      if (child.props.type) setInputType(child.props.type)

      return cloneElement(child, { ...child.props, onChange: onCheck })
    }

    return child
  })

  return (
    <fieldset {...(addClass && { className: `${addClass}` })}>
      <legend>{legend}</legend>
      <div className='u-flow'>{getChildrenByType(children, ['CheckBox'])}</div>
    </fieldset>
  )
}

CheckBoxGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  legend: PropTypes.string,
  onChecked: PropTypes.func,
  addClass: PropTypes.string
}
