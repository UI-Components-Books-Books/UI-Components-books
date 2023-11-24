import { useContext } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Button, Icon } from '../../../components'
import { ModalContext } from '../../Modal'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Modal.module.scss'

export const ModalContent = ({
  addClass,
  children,
  onClick,
  onKeyDown,
  defaultStyle,
  __TYPE,
  ...props
}) => {
  /**
   * Se obtienen las propiedades isOpen, onKeyDown, onCloseModal
   * y refModal del contexto generado por el componente Modal.
   */
  const {
    isOpen,
    onKeyDown: onKeyDownCloseModal,
    onCloseModal,
    refModal
  } = useContext(ModalContext)

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
      aria-modal='true'
      data-type={__TYPE}
      onKeyDown={handleKeyDown}
      className={classnames(
        'animate__animated animate__fadeIn animate__faster video-interpreter-ui-modal',
        {
          [`${css['c-modal']} u-px-3 u-py-3`]: !defaultStyle,
          [addClass]: addClass
        }
      )}
      {...props}
    >
      <div
        className={classnames({ [css['c-modal-container']]: !defaultStyle })}
        data-class='c-modal__container'
      >
        {isOpen ? children : null}
      </div>
      <Button
        addClass={classnames({ [css['c-close-button']]: !defaultStyle })}
        data-class='c-modal__close-button'
        label='Cerrar modal'
        hasAriaLabel
        onClick={handleClick}
        {...(defaultStyle && { defaultStyle })}
      >
        <Icon>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            height='48'
            width='48'
            viewBox='0 0 48 48'
          >
            <path
              id='close'
              d='m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z'
            />
          </svg>
        </Icon>
      </Button>
    </div>
  )
}

ModalContent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node
  ]),
  addClass: PropTypes.string,
  onClick: PropTypes.func,
  onKeyDown: PropTypes.func,
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('ModalContent')
}

ModalContent.defaultProps = {
  __TYPE: 'ModalContent'
}
