import { useState, useRef, useId } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { useInteractOutside } from '../../../hooks/useInteractionOutside'

import css from './Audio.module.scss'

/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar los tipos o formas que tiene el componente.
 */
const TYPES = Object.freeze({
  BUTTON: 'Button',
  BAR: 'Bar'
})

const PLAYER_ICONS = Object.freeze({
  play: <path id='play' d='M306-184v-598l471 299-471 299Z' />,
  pause: (
    <path id='pause' d='M550-186v-590h201v590H550Zm-340 0v-590h201v590H210Z' />
  ),
  volume_on: (
    <path
      id='volume_on'
      d='M552-94v-75q108-28 176-115t68-198q0-110-68-196.5T552-793v-75q139 28 228 136.5T869-482q0 143-88.5 252T552-94ZM91-350v-260h167l214-215v690L258-350H91Zm441 44v-348q57 18 91.5 66T658-480q0 60-34.5 108T532-306Z'
    />
  ),
  volume_down: (
    <path
      id='volume_down'
      d='M173-337v-287h173l233-231v750L346-337H173Zm466 33v-353q55 18 92 67.5T768-480q0 60-37 108t-92 68Z'
    />
  ),
  volume_off: (
    <path
      id='volume_off'
      d='M821-37 697-160q-34 23-72.5 40T543-94v-75q27-7 52.5-17t48.5-27L463-395v260L249-350H82v-260h165L27-831l52-52L873-90l-52 53Zm-14-247-54-54q18-33 26-69t8-75q0-112-67.5-200.5T543-793v-75q139 28 228 136.5T860-482q0 53-13.5 103T807-284ZM644-447 543-548v-99q49 23 77.5 68t28.5 99q0 9-1 17t-4 16ZM463-628l-98-99 98-98v197Z'
    />
  ),
  a11y: (
    <>
      <path
        fill='currentColor'
        d='M23 14v-2H9v2h5v2.734l-3.868 6.77 1.736.992L15.58 18h.84l3.712 6.496 1.736-.992L18 16.734V14h5z'
      />
      <circle cx='16' cy='9' r='2' fill='currentColor' />
      <path
        fill='currentColor'
        d='M16 30a14 14 0 1 1 14-14 14.016 14.016 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12.014 12.014 0 0 0 16 4Z'
      />
    </>
  )
})

export const Audio = ({
  src,
  format,
  a11y,
  size,
  type,
  addClass,
  defaultStyle,
  hasDescription = false,
  description,
  ...props
}) => {
  /**
   * Es utilizado para conocer el estado del audio.
   */
  const [play, setPlay] = useState(false)
  const [openMenu, setOpenMenu] = useState(false)

  const Id = useId()

  /**
   * Duración y tiempo actual del audio.
   */
  const [mediaTime, setMediaTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(0)

  /**
   * Se obtiene la referencia del HTMLAudioElement.
   */
  const refAudio = useRef()

  const refVolumeButton = useRef(null)
  const refVolumeSlider = useRef(null)

  const shouldCloseOnInteractOutside = (element, refVolumeButton) => {
    return element === refVolumeButton.current
  }

  const onInteractionOutside = (event) => {
    if (!shouldCloseOnInteractOutside(event.target, refVolumeButton)) {
      setOpenMenu(false)
      event.stopPropagation()
      event.preventDefault()
    }
  }

  useInteractOutside({ ref: refVolumeSlider, onInteractionOutside })

  /**
   * Obtiene todos los HTMLAudioElement,
   * y los pausa si se están reproduciéndose,
   * con el fin de que no se escuchen un audio encima de otro.
   */
  const pauseAllAudios = () => {
    const audios = document.querySelectorAll('audio')
    audios.forEach((audio) => {
      if (!audio.paused && audio !== refAudio.current) {
        audio.pause()
      }
    })
  }

  /**
   * Función utilizada para alternar entre
   * activar o pausar el audio, dependiendo
   * del estado del mismo.
   *
   */
  const togglePlay = () => {
    if (!refAudio.current) return

    pauseAllAudios()

    if (refAudio.current.paused) {
      refAudio.current.play()
    } else {
      refAudio.current.pause()
    }

    setPlay(!play)
  }

  const isTouchScreen = window.matchMedia(
    '(any-hover: none) and (any-pointer: coarse)'
  ).matches

  const onLoadedMetadata = () => {
    setDuration(Math.round(refAudio.current.duration))
    isTouchScreen ? setVolume(1) : setVolume(refAudio.current.volume)
  }

  const onTimeUpdate = () => {
    setMediaTime(Math.round(refAudio.current.currentTime))
  }

  const handleVolume = (event) => {
    setVolume(event.target.volume)
  }

  const onPlayTimeChange = (event) => {
    const playhead = parseFloat(event.target.value)
    setMediaTime(playhead)
    refAudio.current.currentTime = playhead
  }

  return type === TYPES.BAR
    ? (
      <>
        <div
          className={`${css['audio-bar']} ${addClass ?? ''}`}
          role='group'
          aria-labelledby={`description${Id}`}
          data-a11y={a11y}
          data-class='c-audio-bar'
        >
          {hasDescription
            ? (
              <span id={`description${Id}`} className={css['hidden-description']}>
                {a11y ? 'Audio description' : `Barra de audio ${description}`}
              </span>
              )
            : (
              <span id={`description${Id}`} hidden>
                {a11y ? 'Audio description' : 'Barra de audio'}
              </span>
              )}
          {a11y
            ? (
              <Icon>
                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
                  {PLAYER_ICONS.a11y}
                </svg>
              </Icon>
              )
            : null}
          <button type='button' onClick={togglePlay}>
            <div className='u-sr-only'>{play ? 'Pausar' : 'Reproducir'}</div>
            <Icon size='big'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                viewBox='0 -960 960 960'
              >
                {play ? PLAYER_ICONS.pause : PLAYER_ICONS.play}
              </svg>
            </Icon>
          </button>
          <small aria-hidden='true'>
            {String(Math.floor(mediaTime / 60)).padStart(2, '0')}:
            {String(mediaTime - 60 * Math.floor(mediaTime / 60)).padStart(2, '0')}{' '}
            / {String(Math.floor(duration / 60)).padStart(2, '0')}:
            {String(duration - 60 * Math.floor(duration / 60)).padStart(2, '0')}
          </small>
          <label className='u-sr-only' htmlFor={`time${Id}`}>
            Tiempo transcurrido
          </label>
          <input
            className={css.scrubber}
            id={`time${Id}`}
            value={mediaTime}
            min={0}
            max={duration}
            aria-valuetext={`${mediaTime} seconds`}
            onChange={onPlayTimeChange}
            type='range'
          />
          <button
            type='button'
            ref={refVolumeButton}
            aria-expanded={openMenu}
            className={css['volume-btn']}
            onClick={() => setOpenMenu(!openMenu)}
          >
            <span className='u-sr-only'>Controlar volumen</span>
            <Icon>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='48'
                height='48'
                viewBox='0 -960 960 960'
              >
                {volume === 0
                  ? PLAYER_ICONS.volume_off
                  : volume <= 0.25
                    ? PLAYER_ICONS.volume_down
                    : PLAYER_ICONS.volume_on}
              </svg>
            </Icon>
          </button>
          {openMenu
            ? (
              <div className={css['volume-control']} ref={refVolumeSlider}>
                <label className='u-sr-only' htmlFor={`volume${Id}`}>
                  Volumen
                </label>
                <input
                  id={`volume${Id}`}
                  value={volume}
                  min={0}
                  max={1}
                  step={0.05}
                  type='range'
                  aria-valuetext={volume * 100}
                  aria-orientation='vertical'
                  orient='vertical'
                  onChange={(event) => {
                    setVolume(event.target.value)
                    refAudio.current.volume = event.target.value
                  }}
                />
              </div>
              )
            : null}
        </div>
        <audio
          ref={refAudio}
          preload='metadata'
          controls
          className={classnames({
            [css['c-audio']]: !defaultStyle,
            [css[`c-audio--${size}`]]: size,
            [addClass]: addClass
          })}
          onLoadedMetadata={onLoadedMetadata}
          onTimeUpdate={onTimeUpdate}
          onPlay={() => setPlay(true)}
          onPause={() => setPlay(false)}
          onVolumeChange={(event) => handleVolume(event)}
          data-a11y={a11y}
          hidden
        >
          <source src={src} type={format} />
        </audio>
      </>
      )
    : (
      <>
        <audio
          ref={refAudio}
          src={src}
          type={format}
          onPlay={() => setPlay(true)}
          onPause={() => setPlay(false)}
          onEnded={() => setPlay(false)}
          className={css['c-audio--hidden']}
        />
        <Button
          type='button'
          label={play ? 'Pausar' : 'Reproduccir'}
          data-a11y={a11y}
          data-class='c-audio-button'
          addClass={classnames({
            [css['c-button']]: !defaultStyle,
            [css['is-button-playing']]: play,
            [css['is-button-paused']]: !play,
            [addClass]: addClass
          })}
          onClick={togglePlay}
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
  hasDescription: PropTypes.bool,
  description: PropTypes.string,
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool
}
