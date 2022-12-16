import { useContext } from 'react'
import PropTypes from 'prop-types'

import { Button } from '../../../components'
import { ModalContext } from '../../Modal'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Modal.module.scss'

export const ModalContent = ({ label, addClass, children, onClick, onKeyDown, __TYPE, ...props }) => {
  /**
    * Se obtienen las propiedades isOpen, onKeyDown, onCloseModal
    * y refModal del contexto generado por el componente Modal.
    */
  const { isOpen, onKeyDown: onKeyDownCloseModal, onCloseModal, refModal } = useContext(ModalContext)

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

  /**
   * Función creada para permitir que el
   * componente pueda ejecutar otro método
   * en el evento onKeyDown además del onKeyDownCloseModal.
   * @param {Event} event
   */
  const handleKeyDown = (event) => {
    if (onKeyDown && typeof onKeyDown === 'function') onKeyDown(event)

    onKeyDownCloseModal(event)
  }

  return (
    <div
      ref={refModal}
      role='dialog'
      tabIndex='-1'
      hidden={!isOpen}
      aria-label={label}
      aria-modal='true'
      data-type={__TYPE}
      onKeyDown={handleKeyDown}
      className={`${css['c-modal']} animate__animated animate__fadeIn animate__faster u-px-3 u-py-3 class-video-interpreter-ui-modal ${addClass ?? ''}`}
      {...props}
    >
      <div className={`${css['c-modal-container']}`}>{children}</div>
      <Button addClass={css['c-close-button']} label='Cerrar modal' hasAriaLabel icon={{ name: 'close' }} onClick={handleClick} />
    </div>
  )
}

ModalContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]),
  addClass: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  __TYPE: typeValidation('ModalContent')
}

ModalContent.defaultProps = {
  label: 'Default modal label',
  __TYPE: 'ModalContent'
}
