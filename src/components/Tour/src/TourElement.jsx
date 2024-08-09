import { createElement, useContext, isValidElement, useRef } from 'react'
import { usePopper } from 'react-popper'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Button, Icon, TourContext } from '../../../components'

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
    return createElement(
      'p',
      {
        role: 'status',
        'aria-live': 'polite',
        className: css['tour-description']
      },
      [content]
    )
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
              {...(defaultStyle && { defaultStyle })}
            >
              <Icon>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24'
                  viewBox='0 -960 960 960'
                  width='24'
                >
                  <path d='M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z' />
                </svg>
              </Icon>
            </Button>
          )}

          {!hideBackButton && (
            <Button
              disabled={id === 1}
              hasAriaLabel
              label='Anterior'
              data-class='c-button__before'
              onClick={onPrev}
              {...(defaultStyle && { defaultStyle })}
            >
              <Icon>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  height='24'
                  viewBox='0 -960 960 960'
                  width='24'
                >
                  <path d='m432-480 156 156q11 11 11 28t-11 28q-11 11-28 11t-28-11L348-452q-6-6-8.5-13t-2.5-15q0-8 2.5-15t8.5-13l184-184q11-11 28-11t28 11q11 11 11 28t-11 28L432-480Z' />
                </svg>
              </Icon>
            </Button>
          )}

          <Button
            disabled={id === lastId}
            hasAriaLabel
            label='Siguiente'
            data-class='c-button__after'
            onClick={handleNextElement}
            {...(defaultStyle && { defaultStyle })}
          >
            <Icon>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                height='24'
                viewBox='0 -960 960 960'
                width='24'
              >
                <path d='M504-480 348-636q-11-11-11-28t11-28q11-11 28-11t28 11l184 184q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L404-268q-11 11-28 11t-28-11q-11-11-11-28t11-28l156-156Z' />
              </svg>
            </Icon>
          </Button>
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
