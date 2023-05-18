import { useState, useRef, useLayoutEffect, useEffect } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Button } from '../../Button'
import { useOnScreen } from '../../../hooks/useOnScreen'

import css from './Audio.module.scss'

/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar los tipos o formas que tiene el componente.
 */
const TYPES = Object.freeze({
  BUTTON: 'Button',
  BAR: 'Bar'
})

export const Audio = ({
  src,
  format,
  a11y,
  size,
  type,
  addClass,
  defaultStyle,
  ...props
}) => {
  /**
   * Es utilizado para conocer el estado del audio.
   */
  const [play, setPlay] = useState(false)

  /**
   * Se obtiene la referencia del HTMLAudioElement.
   */
  const refAudio = useRef()

  /**
   * Se obtiene la referencia del HTMLButtonElement.
   */
  const refButtonAudio = useRef()

  /**
   * Custom hook utilizado para dectectar
   * si el componente esta visible en el
   * viewport.
   */
  const [setRef, isVisible] = useOnScreen()

  /**
   * Función utilizada para alternar entre
   * activar o pausar el audio, dependiendo
   * del estado del mismo.
   *
   */
  const onToggle = (_) => {
    if (!refAudio.current) return

    if (refAudio.current.paused) {
      refAudio.current.play()
    } else {
      refAudio.current.pause()
    }
    setPlay(!play)
  }

  useEffect(() => {
    // Verificar si el audio está reproduciéndose (play es verdadero)
    // o si el audio no está en pausa y no es visible
    if ((play || !refAudio.current.paused) && !isVisible) {
      // Si se cumple la condición, detener la reproducción,
      // establecer play a falso y reiniciar el tiempo de reproducción a cero
      setPlay(!play)
      refAudio.current.pause()
      refAudio.current.currentTime = 0
    }
  }, [isVisible])

  useLayoutEffect(() => {
    // Verificar si existe la referencia del botón de audio o la referencia del audio
    const ref = refButtonAudio.current || refAudio.current

    // Si al menos uno de ellos existe
    if (ref) {
      // Establecer la referencia en la variable de estado "ref"
      setRef(ref)
    }
  }, [refAudio, refButtonAudio])

  return type === TYPES.BAR
    ? (
      <audio
        ref={refAudio}
        preload='metadata'
        controls
        className={classnames({
          [css['c-audio']]: !defaultStyle,
          [css[`c-audio--${size}`]]: size,
          [addClass]: addClass
        })}
        data-a11y={a11y}
        {...props}
      >
        <source src={src} type={format} />
      </audio>
      )
    : (
      <>
        <audio
          ref={refAudio}
          src={src}
          type={format}
          onEnded={() => setPlay(!play)}
          className={css['c-audio--hidden']}
        />
        <Button
          ref={refButtonAudio}
          label={play ? 'Pausar' : 'Reproduccir'}
          data-a11y={a11y}
          addClass={classnames({
            [css['c-button']]: !defaultStyle,
            [css['is-button-playing']]: play,
            [css['is-button-paused']]: !play,
            [addClass]: addClass
          })}
          onClick={onToggle}
          hasAriaLabel
          {...(defaultStyle && { defaultStyle })}
          {...(a11y && { disabled: a11y })}
          {...props}
        />
      </>
      )
}

Audio.defaultProps = {
  a11y: false,
  type: 'Bar'
}

Audio.propTypes = {
  src: PropTypes.string,
  a11y: PropTypes.bool,
  format: PropTypes.string,
  size: PropTypes.oneOf(['small']),
  type: PropTypes.oneOf(['Bar', 'Button']),
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool
}
