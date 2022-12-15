import { Children, cloneElement, isValidElement, useState } from 'react'
import PropTypes from 'prop-types'

import { getChildrenByType } from '../../../utils/validations/getChildrenType'

export const CheckBoxGroup = ({ legend, children: childrenProps, onChecked, addClass }) => {
  /**
    * Estado usado para almacenar los objetos
    * provenientes de los checkbox que han sido seleccionados.
    */
  const [checked, setChecked] = useState([])

  /**
    * Función callback que se pasa como parámetro del componente CheckBox
    * y retorna un objeto con los valores ID y value.
    *
    * @param {Object} value - Objeto { Id, value }
    */
  const onCheck = (value) => {
    // Usada para almacenar el nuevo valor del estado. de esta manera no usamos un useEffect.
    let checkedArray

    const validate = checked.filter((option) => option.id === value.id)

    if (validate.length) {
      checkedArray = [...checked.filter((option) => option.id !== value.id)]
    } else {
      checkedArray = [...checked, { ...value }]
    }

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
