/* eslint-disable no-undef */
import { useRef, useState, useEffect, useLayoutEffect } from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../../Icon'
import { useOnScreen } from '../../../hooks/useOnScreen'

import css from './Video.module.scss'

export const Video = ({ src, width = '1000', hasDescription, description, addClass, poster, ...props }) => {
  // Estado duracion del video
  const [getDurationVideo, setDurationVideo] = useState({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: '00:00'
  })

  // Estado del play
  const [getCurrentTime, setCurrentTime] = useState({
    totalSeconds: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    string: '00:00'
  })

  // Estado del tiempo de ver el video
  const [getstateVideoPlay, setStateVideoPlay] = useState({
    state: false,
    label: 'Reproducir video'
  })

  // Estado del muted
  const [getStateMuted, setStateMuted] = useState({
    state: true,
    label: 'Volumen'
  })
  const [getValueVolumeeMuted, setValueVolumeMuted] = useState(100)

  // Estado de la pantalla completa
  const [getStateScreen, setStateScreen] = useState({
    state: false,
    label: 'Ver en pantalla completa'
  })

  const [captionsDisabled, setCaptionsDisabled] = useState(false)

  const [getValueVolume, setValueVolume] = useState(100)
  const refCont = useRef(null)
  const refVideo = useRef(null)
  const refCaptions = useRef(null)
  const refProgress = useRef(null)
  const refVolume = useRef(null)
  const refPlayPulse = useRef(null)
  const refForwardPulse = useRef(null)
  const refRewindPulse = useRef(null)
  const [captions, setCaptions] = useState(false)

  /**
   * Custom hook utilizado para dectectar
   * si el componente esta visible en el
   * viewport.
   */
  const [setRef, isVisible] = useOnScreen({
    rootMargin: '20px 10px',
    threshold: [0, 0.25, 0.5, 0.75, 1]
  })

  /**
   * Cambia la clase del elemento para generar la animación de pulse
   * @param {element} element - elemento del DOM a animar
   */
  const pulseAnimation = (element) => {
    element.classList.add(`${css.active}`)
    setTimeout(() => {
      element.classList.remove(`${css.active}`)
    }, 650)
  }

  /**
   * Cambia el video entre reproduciendo y pausado
   */
  function handlePlay () {
    const video = refVideo.current
    if (getstateVideoPlay.state) {
      video.pause()
      setStateVideoPlay({
        state: false,
        label: 'Reproducir video'
      })
    } else {
      video.play()
      setStateVideoPlay({
        state: true,
        label: 'Pausar video'
      })
    }
    pulseAnimation(refPlayPulse.current)
  }

  // function handleClickOnVideo() {
  //    if (!document.fullscreen) {
  //       handlePlay();
  //    } else {
  //       return null;
  //    }
  // }

  /**
   * Cambia el video entre modo de pantalla completa o normal
   */
  function hanldeFullScrenn () {
    const isInFullScreen =
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)

    // const video = refVideo.current
    const docElm = refCont.current

    if (!isInFullScreen) {
      setStateScreen({
        state: true,
        label: 'Salir de pantalla completa'
      })

      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen()
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen()
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen()
      }
    } else {
      setStateScreen({
        state: false,
        label: 'Ver en pantalla completa'
      })

      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
  }

  /**
   * Calcula la cantidad de horas, minutos y segundos
   * @param {number} time - Valor en segundos del que se necesita hacer el cálculo
   * @returns {object} - { hours: number, minutes: number, seconds: number }
   */
  function getTime (time) {
    const secondsNumber = parseInt(time, 10)

    // Calcula la cantidad de horas, minutos y segundos del video
    const hours = secondsNumber >= 3600 ? Math.floor(secondsNumber / 3600) : 0
    const minutes = Math.floor((secondsNumber - hours * 3600) / 60)
    const seconds = secondsNumber - hours * 3600 - minutes * 60

    // Valida si los valores calculados son válidos
    const validateHours = validateIsNan(validateDigits(hours))
    const validateMinutes = validateIsNan(validateDigits(minutes))
    const validateSeconds = validateIsNan(validateDigits(seconds))

    return {
      hours: validateHours,
      minutes: validateMinutes,
      seconds: validateSeconds
    }
  }

  /**
   *
   * @param {element} element - Elemento del DOM a calcular
   */
  function initialValues (element) {
    const durationVideo = hourToString(element.duration)
    const travelVideo = hourToString(element.currentTime)
    setCurrentTime({
      totalSeconds: element.currentTime,
      hours: parseInt(getTime(element.currentTime).hours),
      minutes: parseInt(getTime(element.currentTime).minutes),
      seconds: parseInt(getTime(element.currentTime).seconds),
      string: travelVideo
    })
    setDurationVideo({
      totalSeconds: Math.floor(element.duration),
      hours: parseInt(getTime(element.duration).hours),
      minutes: parseInt(getTime(element.duration).minutes),
      seconds: parseInt(getTime(element.duration).seconds),
      string: durationVideo
    })
  }

  /**
   * Convierte las horas, minutos y segundos del video en un string en formato de hora
   * @param { number } timeSeconds - Segundos a calcular
   * @returns {string} - Tiempo en formato de hora
   */
  function hourToString (timeSeconds) {
    const secondsNumber = parseInt(timeSeconds, 10)

    if (secondsNumber <= 3600) {
      return `${getTime(timeSeconds).minutes}:${getTime(timeSeconds).seconds}`
    } else {
      return `${getTime(timeSeconds).hours}:${getTime(timeSeconds).minutes}:${getTime(timeSeconds).seconds}`
    }
  }

  /**
   * Validad la cantidad de dígitos y agrega un 0 si es necesario
   * @param {number} value - Cantidad a validad
   * @returns {string}
   */
  function validateDigits (value) {
    if (value < 10) {
      return (value = '0' + value)
    } else {
      return value
    }
  }

  /**
   * Revisa si el número es válido, si no, retorna "00"
   * @param {number} elem - Valor a validad
   * @returns {string}
   */
  function validateIsNan (elem) {
    return isNaN(elem) ? '00' : elem
  }

  /**
   * Controla la barra de progreso para que al hacer clic controle la posición del video
   * @param {event} e - Evento del video
   */
  function handleProcessControl (e) {
    const progress = refProgress.current
    const video = refVideo.current
    const positionClick = e.nativeEvent.offsetX // se obtiene posicion del click
    const scrubTime = (positionClick / progress.offsetWidth) * video.duration // operacion
    video.currentTime = scrubTime
  }

  /**
   * Controla el volumen
   * @param {event} e - Evento del teclado
   */
  function handleVolume (e) {
    const video = refVideo.current
    const value = e.target.value
    const volume = value / 100
    setValueVolume(value)
    setValueVolumeMuted(value)
    video.volume = volume

    if (!getStateMuted.state) {
      setStateMuted({
        state: true,
        label: 'Volumen'
      })
    }
  }

  /**
   * Cambia el volumen de 0 a la posición actual
   */
  const handleMuted = () => {
    if (getStateMuted.state) {
      setStateMuted({
        state: false,
        label: 'Mutear video'
      })
      const video = refVideo.current
      const value = 0
      const volume = value
      setValueVolume(value)
      video.volume = volume
    } else {
      setStateMuted({
        state: true,
        label: 'Volumen'
      })
      const video = refVideo.current
      const value = getValueVolumeeMuted
      const volume = value / 100
      setValueVolume(value)
      video.volume = volume
    }
  }

  /**
   * Permite pausar o reproducir el video presionando la tecla Space (solo en la barra de progreso)
   * @param {event} e - Evento del teclado
   */
  const handleProgressBar = function (e) {
    if ((e.keyCode || e.which) === 32) {
      handlePlay()
    }
  }

  /**
   * Agrega funcionalidad a las flechas izquierda y derecha para adelantar o retrasar 5 segundos el video
   * @param {event} e - Evento del teclado
   * @returns
   */
  const handleArrowKeys = function (e) {
    const currentTime = Math.floor(refProgress.current.getAttribute('aria-valuenow'))

    if (document.activeElement === refVolume.current) {
      return null
    } else {
      if ((e.keyCode || e.which) === 37) {
        const actualTime = currentTime - 5
        if (actualTime >= 0) {
          refVideo.current.currentTime = actualTime
        } else {
          refVideo.current.currentTime = 0
        }
        pulseAnimation(refRewindPulse.current)
      }

      if ((e.keyCode || e.which) === 39) {
        const actualTime = currentTime + 5
        if (actualTime >= refVideo.current.duration) {
          refVideo.current.currentTime = refVideo.current.duration
        } else {
          refVideo.current.currentTime = actualTime
        }
        pulseAnimation(refForwardPulse.current)
      }
    }
  }

  /**
   * Convierte los valores numéricos en una frase para usar como el aria-valuetext
   * @returns
   */
  const getTextValueString = () => {
    return getDurationVideo >= 3600
      ? `${getCurrentTime.hours} horas, ${getCurrentTime.minutes} minutos y ${getCurrentTime.seconds} segundos de ${getDurationVideo.hours} horas, ${getDurationVideo.minutes} y ${getDurationVideo.seconds} segundos`
      : `${getCurrentTime.minutes} minutos y ${getCurrentTime.seconds} segundos de ${getDurationVideo.minutes} minutos y ${getDurationVideo.seconds} segundos`
  }

  // Revisa en local storage los valores de volumen y estado de pressed de subtítulos y los aplica al componente
  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('ui-video')) || {}
    if (Object.prototype.hasOwnProperty.call(storage, 'caption')) {
      setCaptions(JSON.parse(localStorage.getItem('ui-video')).caption)
    }
    if (Object.prototype.hasOwnProperty.call(storage, 'volume')) {
      setValueVolume(JSON.parse(localStorage.getItem('ui-video')).volume)
    }
  }, [])

  // Almacena en local storage los valores de volumen y estado de pressed de subtítulos
  useEffect(() => {
    localStorage.setItem('ui-video', JSON.stringify({ caption: captions, volume: getValueVolume }))
  }, [captions, getValueVolume])

  useEffect(() => {
    if (refCaptions.current) {
      refCaptions.current.addEventListener('error', () => {
        setCaptionsDisabled(true)
      })
    } else {
      setCaptionsDisabled(true)
    }

    if (src.caption) {
      setCaptionsDisabled(false)
    }

    return () => {
      if (refCaptions.current) {
        refCaptions.current.removeEventListener('error', () => {
          setCaptionsDisabled(true)
        })
      }
    }
  }, [src.caption])

  useEffect(() => {
    // Verificar si el video está reproduciéndose y no es visible.
    if (getstateVideoPlay.state && !isVisible) {
      // Si se cumple la condición, ejecutar la función handlePlay.
      handlePlay()
    }
  }, [isVisible])

  useLayoutEffect(() => {
    // Verificar si "refVideo.current" existe
    if (refVideo.current) {
      // Si existe, establecer "refVideo.current" en la variable de estado "ref"
      setRef(refVideo.current)
    }
  }, [refVideo])

  return (
    <figure
      className={`${css['c-vid']} ${addClass}`}
      style={{ maxWidth: `${width}px` }}
      onKeyDown={(e) => handleArrowKeys(e)}
      {...props}
    >
      <div className={`${css['c-vid__container']} ${addClass}`} data-video-full-screen={getStateScreen.state} ref={refCont}>
        <div className={css['c-vid__wrapper']}>
          <video
            preload='none'
            ref={refVideo}
            onTimeUpdate={(event) => initialValues(event.target)}
            onLoadedData={(event) => initialValues(event.target)}
            onClick={handlePlay}
            className={`${css['c-vid__video']} ${captions ? '' : css['no-captions']}`}
            {...(poster && { poster })}
          >
            <source src={src.video} />
            {src.caption
              ? (
                <track
                  ref={refCaptions}
                  src={src.caption}
                  label='Subtítulos en español'
                  kind='subtitles'
                  srcLang='es'
                  default
                />
                )
              : (
                  ''
                )}
          </video>
          <div className={css['c-vid__icon-container']}>
            <div ref={refRewindPulse} className={css['c-vid__icon']}>
              <Icon>
                <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
                  <path id='fast_rewind' d='M42.7 36 25.4 24l17.3-12Zm-20.1 0L5.3 24l17.3-12Z' />
                </svg>
              </Icon>
            </div>
            <div ref={refPlayPulse} className={css['c-vid__icon']}>
              <Icon>
                <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
                  {getstateVideoPlay.state
                    ? (
                      <path id='play' d='M16 37.85v-28l22 14Z' />
                      )
                    : (
                      <path id='pause' d='M28.25 38V10H36v28ZM12 38V10h7.75v28Z' />
                      )}
                </svg>
              </Icon>
            </div>
            <div ref={refForwardPulse} className={css['c-vid__icon']}>
              <Icon>
                <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
                  <path id='fast_forward' d='M5.2 36V12l17.3 12Zm20.35 0V12l17.3 12Z' />
                </svg>
              </Icon>
            </div>
          </div>
        </div>

        <div className={css['progress-container']}>
          <div
            role='slider'
            aria-label='Progreso del video'
            aria-valuemin='0'
            aria-valuenow={Math.round(getCurrentTime.totalSeconds)}
            aria-valuemax={Math.round(getDurationVideo.totalSeconds)}
            aria-valuetext={getTextValueString()}
            tabIndex='0'
            onKeyDown={handleProgressBar}
            className={css['c-vid__progress-bg']}
            onClick={handleProcessControl}
            ref={refProgress}
          >
            <div
              className={css['c-vid__progress-bar']}
              style={{
                transform: `scaleX(${
                  isNaN(getCurrentTime.totalSeconds / getDurationVideo.totalSeconds)
                    ? 0
                    : getCurrentTime.totalSeconds / getDurationVideo.totalSeconds
                })`
              }}
            />
            <div
              // className={css['c-vid__progress-sphere']}
              style={{
                left: `min(calc((${getCurrentTime.totalSeconds} / ${getDurationVideo.totalSeconds}) * 100 * 1%), 99%)`
              }}
            />
          </div>
        </div>

        <div className={`controls ${css['c-vid__controls']}`}>
          <button
            className={`${css['c-vid__button']} js-button-video-play`}
            aria-label={getstateVideoPlay.label}
            onClick={handlePlay}
            data-description='Este botón reproduce el video'
          >
            <Icon>
              <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
                {getstateVideoPlay.state
                  ? (
                    <path id='pause' d='M28.25 38V10H36v28ZM12 38V10h7.75v28Z' />
                    )
                  : (
                    <path id='play' d='M16 37.85v-28l22 14Z' />
                    )}
              </svg>
            </Icon>
          </button>

          <button
            className={`${css['c-vid__button']} js-button-video-volumen`}
            aria-label={getStateMuted.label}
            data-description='Este botón controla el volumen'
            onClick={handleMuted}
          >
            <Icon>
              <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
                {getStateMuted.state
                  ? (
                    <path
                      id='volume_on'
                      d='M28 41.45v-3.1q4.85-1.4 7.925-5.375T39 23.95q0-5.05-3.05-9.05-3.05-4-7.95-5.35v-3.1q6.2 1.4 10.1 6.275Q42 17.6 42 23.95t-3.9 11.225Q34.2 40.05 28 41.45ZM6 30V18h8L24 8v32L14 30Zm21 2.4V15.55q2.75.85 4.375 3.2T33 24q0 2.85-1.65 5.2T27 32.4Zm-6-16.8L15.35 21H9v6h6.35L21 32.45ZM16.3 24Z'
                    />
                    )
                  : (
                    <path
                      id='volume_off'
                      d='m40.65 45.2-6.6-6.6q-1.4 1-3.025 1.725-1.625.725-3.375 1.125v-3.1q1.15-.35 2.225-.775 1.075-.425 2.025-1.125l-8.25-8.3V40l-10-10h-8V18h7.8l-11-11L4.6 4.85 42.8 43Zm-1.8-11.6-2.15-2.15q1-1.7 1.475-3.6.475-1.9.475-3.9 0-5.15-3-9.225-3-4.075-8-5.175v-3.1q6.2 1.4 10.1 6.275 3.9 4.875 3.9 11.225 0 2.55-.7 5t-2.1 4.65Zm-6.7-6.7-4.5-4.5v-6.5Q30 17 31.325 19.2q1.325 2.2 1.325 4.8 0 .75-.125 1.475-.125.725-.375 1.425Zm-8.5-8.5-5.2-5.2 5.2-5.2Zm-3 14.3v-7.5l-4.2-4.2h-7.8v6h6.3Zm-2.1-9.6Z'
                    />
                    )}
              </svg>
            </Icon>
          </button>

          <label className={css['c-vid__volume']} htmlFor='volumeControl'>
            <span className='u-sr-only'>Controlar volumen</span>
            <input
              className={css['c-vid__volume-item']}
              ref={refVolume}
              id='volumeControl'
              type='range'
              min='0'
              max='100'
              step='5'
              value={getValueVolume}
              onChange={handleVolume}
              aria-valuetext={`${getValueVolume}%`}
            />
          </label>

          <p className={css['c-vid__time']} aria-hidden='true'>
            <span>{getCurrentTime.string}</span>/<span>{getDurationVideo.string}</span>
          </p>

          <button
            disabled={captionsDisabled}
            aria-pressed={captionsDisabled ? undefined : captions}
            onClick={() => setCaptions(!captions)}
            aria-label='Subtítulos'
            className={`${css['c-vid__button']} ${css['c-vid__subtitles']}`}
          >
            <Icon>
              <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
                {captionsDisabled
                  ? (
                    <path
                      id='closed_caption_disabled'
                      d='m18.05 18.05 2.5 2.5H14.5v6.9h5.1v-1.1h2.5v2.1q0 .65-.425 1.075-.425.425-1.075.425h-7.1q-.65 0-1.075-.425Q12 29.1 12 28.45v-8.9q0-.65.425-1.075.425-.425 1.075-.425ZM12.3 8H39q1.15 0 2.075.925Q42 9.85 42 11v26.7l-3-3V11H15.3Zm23.75 18.35v1.95q0 .65-.425 1.075-.425.425-1.075.425h-.45l-2.35-2.35h1.8v-1.1Zm-2.5-4.7v-1.1h-5.1v3.6l-2.5-2.5v-2.1q0-.65.425-1.075.425-.425 1.075-.425h7.1q.65 0 1.075.425.425.425.425 1.075v2.1Zm-6.4 1.2Zm-6.3 2.3Zm-12.7-17L11 11H9v26h23.7L1.3 5.6l2.15-2.15L43.8 43.8l-2.15 2.15L35.7 40H9q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1 .625-1.775Q7.25 8.45 8.15 8.15Z'
                    />
                    )
                  : (
                    <path
                      id='closed_caption'
                      d='M9 40q-1.2 0-2.1-.9Q6 38.2 6 37V11q0-1.2.9-2.1Q7.8 8 9 8h30q1.2 0 2.1.9.9.9.9 2.1v26q0 1.2-.9 2.1-.9.9-2.1.9Zm0-3h30V11H9v26Zm4.5-7.05h7.1q.65 0 1.075-.425.425-.425.425-1.075v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.65-.425-1.075-.425-.425-1.075-.425h-7.1q-.65 0-1.075.425Q12 18.9 12 19.55v8.9q0 .65.425 1.075.425.425 1.075.425Zm13.95 0h7.1q.6 0 1.05-.45.45-.45.45-1.05v-2.1h-2.5v1.1h-5.1v-6.9h5.1v1.1h2.5v-2.1q0-.6-.45-1.05-.45-.45-1.05-.45h-7.1q-.6 0-1.05.45-.45.45-.45 1.05v8.9q0 .6.45 1.05.45.45 1.05.45ZM9 37V11v26Z'
                    />
                    )}
              </svg>
            </Icon>
          </button>

          <button className={css['c-vid__button']} aria-label={getStateScreen.label} onClick={hanldeFullScrenn}>
            <Icon>
              <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
                {getStateScreen.state
                  ? (
                    <path
                      id='fullscreen_exit'
                      d='M16.65 38v-6.65H10v-3h9.65V38Zm11.7 0v-9.65H38v3h-6.65V38ZM10 19.65v-3h6.65V10h3v9.65Zm18.35 0V10h3v6.65H38v3Z'
                    />
                    )
                  : (
                    <path
                      id='fullscreen'
                      d='M10 38v-9.65h3V35h6.65v3Zm0-18.35V10h9.65v3H13v6.65ZM28.35 38v-3H35v-6.65h3V38ZM35 19.65V13h-6.65v-3H38v9.65Z'
                    />
                    )}
              </svg>
            </Icon>
          </button>
        </div>
      </div>
      {hasDescription && (
        <figcaption className={css['c-vid__caption']}>
          <strong>{description.title}</strong> {description.content}
        </figcaption>
      )}
    </figure>
  )
}

Video.propTypes = {
  src: PropTypes.shape({
    video: PropTypes.string.isRequired,
    caption: PropTypes.string
  }),
  width: PropTypes.string,
  addClass: PropTypes.string,
  hasDescription: PropTypes.bool,
  description: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string
  }),
  poster: PropTypes.string
}

Video.defaultProps = {
  src: '',
  addClass: '',
  width: '1000',
  hasDescription: false,
  poster: ''
}
