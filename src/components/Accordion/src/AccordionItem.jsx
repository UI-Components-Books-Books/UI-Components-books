import { Children, cloneElement, isValidElement } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { typeValidation } from '../../../utils/validations/typeValidation'
import { getChildrenByType } from '../../../utils/validations/getChildrenType'

import css from './Accordion.module.scss'

export const AccordionItem = ({ children: childrenProp, id, isOpen, onToggle, addClass, defaultStyle }) => {
  /**
    * Se crea la función onExpanded para lanzar la función
    * onToggle proveniente de las props desde acá,
    * de tal manera que no necesitamos pasar el ID
    * ni la función a cada hijo.
    *
    * @returns {function} onToggle - Abre el Accordion.
    */
  const onExpanded = () => onToggle(id)

  /**
    * Valida si el estado es un "Array" o "Number"
    * y devuelve "true" o "false" apartir de comporar
    * el ID con el estado.
    *
    * @returns {(Boolean)}
    */
  const validation = () => {
    if (typeof isOpen === 'number') {
      return isOpen === id
    } else if (Array.isArray(isOpen)) {
      return !!isOpen.includes(id)
    } else {
      return false
    }
  }

  /**
    * Necesitamos agregar las propiedades onExpanded, isExpanded, a los dos
    * diferentes tipos de hijos que recibe el componete.
    */
  const children = Children.map(childrenProp, (child) => {
    if (!isValidElement(child)) return null

    // Comprueba si el child es de tipo AccordionItem
    if (child.props.__TYPE === 'AccordionButton') {
      return cloneElement(child, { ...child.props, id, onExpanded, isExpanded: validation() })
    }

    return cloneElement(child, { ...child.props, id, isExpanded: validation() })
  })

  return (
    <div className={classnames({
      [css['c-accordion__item']]: !defaultStyle,
      [addClass]: addClass
    })}
    >
      {/* Filtramos los children para solo aceptar de tipo AccordionButton y AccordionPanel. */}
      {getChildrenByType(children, ['AccordionButton', 'AccordionPanel'])}
    </div>
  )
}

AccordionItem.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  id: PropTypes.number,
  isOpen: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
  onToggle: PropTypes.func,
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('AccordionItem')
}

AccordionItem.defaultProps = {
  __TYPE: 'AccordionItem'
}
