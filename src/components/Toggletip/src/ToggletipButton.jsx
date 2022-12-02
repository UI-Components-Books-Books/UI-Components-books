import { useContext, cloneElement, Children, isValidElement } from 'react'
import PropTypes from 'prop-types'

import { ToggletipContext } from './Toggletip'
import { typeValidation } from '../../../utils/validations/typeValidation'

export const ToggletipButton = ({ children }) => {
  // Obtenemos la función onOpen y setRefButton del contexto
  const { onOpen, setRefButton } = useContext(ToggletipContext)

  // Si tiene más de un hijo no retornar nada.
  if (Children.count(children) > 1) {
    return null
  }

  const returnElements = (child) => {
    if (!isValidElement(child)) return null
    // Agregamos las propiedades ref y onClick en el hijo
    return cloneElement(child, { ...child.props, ref: setRefButton, onClick: onOpen })
  }

  return Children.map(children, returnElements)
}

ToggletipButton.propTypes = {
  children: PropTypes.any, // Se cambia a any para aceptar etiquetas de svg
  __TYPE: typeValidation('ToggletipButton')
}

ToggletipButton.defaultProps = {
  __TYPE: 'ToggletipButton'
}
