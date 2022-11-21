import { useContext } from 'react'
import PropTypes from 'prop-types'

import { ModalContext } from '../../Modal'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Modal.module.scss'

export const ModalOverlay = ({ addClass, onClick }) => {
  /**
    * Se obtienen las propiedades isOpen y onCloseModal
    * del contexto generado por el componente Modal.
    */
  const { isOpen, onCloseModal } = useContext(ModalContext)

  /**
   * Función creada para permitir que el
   * componente pueda ejecutar otro método
   * en el evento onClick además del onCloseModal.
   * @param {Event} event
   */
  const handleClick = (event) => {
    if (onClick && typeof onClick === 'function') onClick(event)

    onCloseModal()
  }

  return (
    <div className={`${css['c-layout']} ${addClass ?? ''}`} onClick={handleClick} hidden={!isOpen} />
  )
}

ModalOverlay.propTypes = {
  addClass: PropTypes.string,
  onClick: PropTypes.func,
  __TYPE: typeValidation('ModalOverlay')
}

ModalOverlay.defaultProps = {
  __TYPE: 'ModalOverlay'
}
