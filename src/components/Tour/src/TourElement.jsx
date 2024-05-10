import { createElement, useContext, isValidElement, useRef } from 'react'
import { usePopper } from 'react-popper'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Button, TourContext } from '../../../components'

import css from './Tour.module.scss'

export const TourElement = ({
  ariaAttributes,
  hideCloseButton,
  hideBackButton,
  addClass
}) => {
  // Propiedad obtenidas a través del contexto.
  const {
    isOpen,
    lastId,
    methods,
    id,
    target,
    content,
    placement,
    distance,
    defaultStyle
  } = useContext(TourContext)

  // Obtenemos la referencia del contenedor.
  const refContainer = useRef()

  /**
   * Desestructuramos el objeto "methods" que
   * contiene las diferentes funciones usada
   * en los botones.
   */
  const { onClose, onPrev, onNext } = methods

  // Hook para controlar el posicionamiento del TourElement con respecto a su elemento padre.
  const { styles, attributes } = usePopper(
    document.querySelector(target),
    refContainer.current,
    {
      placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, distance || 8]
          }
        },
        {
          name: 'computeStyles',
          options: {
            adaptive: false
          }
        },
        { name: 'eventListeners', enabled: isOpen }
      ]
    }
  )

  /**
   * Función utilizada para distiguir que renderizar,
   * si es un texto crea un elemento "p", si no
   * devuelve el elemento contenido en la propiedad content.
   *
   * @returns {ReactNode} - Elemento react.
   */
  const renderContent = () => {
    if (isValidElement(content)) {
      return content
    }
    return createElement('p', { role: 'status', 'aria-live': 'polite', className: css['tour-description'] }, [
      content
    ])
  }

  /**
   * Función que se encarga de actualizar la custom property
   * que almacena la velocidad de la transición del componente.
   * y lanza el método "onNext".
   */
  const handleNextElement = () => {
    refContainer.current.style.setProperty('--speed-movement', '0.8s')
    onNext()
  }

  return (
    <>
      <div
        className={classnames({ [css['c-layout']]: !defaultStyle })}
        data-class='c-layout'
      />
      <div
        id={`unique-id-tour-element-${id}`}
        ref={refContainer}
        style={styles.popper}
        className={classnames({
          [css['c-tour-content']]: !defaultStyle,
          'animate__animated animate__fadeIn animate__faster': isOpen,
          [addClass]: addClass
        })}
        {...ariaAttributes}
        {...attributes.popper}
      >
        <span className='u-sr-only'>
          Parte {id} de {lastId}.
        </span>

        <div
          aria-hidden
          className={classnames({ [css['c-tour-progress']]: !defaultStyle })}
          data-class='c-tour-progress'
        >
          <div
            className={css['c-tour-progress-bar']}
            data-class='c-tour-progress__bar'
            style={{ transform: `scaleX(${id / lastId})` }}
          />
        </div>

        {renderContent()}

        <div
          className={classnames({
            [css['c-tour-button-container']]: !defaultStyle
          })}
          data-class='c-tour-button-container'
        >
          {!hideCloseButton && (
            <Button
              hasAriaLabel
              label='Salir'
              data-class='c-button__close'
              onClick={onClose}
              icon={{ path: new URL('/assets/icons/svg/close.svg', import.meta.url).href, size: 'big' }}
              {...(defaultStyle && { defaultStyle })}
            />
          )}

          {!hideBackButton && (
            <Button
              disabled={id === 1}
              hasAriaLabel
              label='Anterior'
              data-class='c-button__before'
              onClick={onPrev}
              icon={{ path: new URL('/assets/icons/svg/navigate_before.svg', import.meta.url).href, size: 'big' }}
              {...(defaultStyle && { defaultStyle })}
            />
          )}

          <Button
            disabled={id === lastId}
            hasAriaLabel
            label='Siguiente'
            data-class='c-button__after'
            onClick={handleNextElement}
            icon={{ path: new URL('/assets/icons/svg/navigate_next.svg', import.meta.url).href, size: 'big' }}
            {...(defaultStyle && { defaultStyle })}
          />
        </div>
      </div>
    </>
  )
}

TourElement.propTypes = {
  ariaAttributes: PropTypes.shape({
    role: PropTypes.string,
    tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    'aria-label': PropTypes.string,
    'aria-modal': PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
  }),
  hideCloseButton: PropTypes.bool,
  hideBackButton: PropTypes.bool,
  addClass: PropTypes.string
}
