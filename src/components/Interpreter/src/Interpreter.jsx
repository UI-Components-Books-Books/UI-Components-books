import { useState, useEffect, useRef } from 'react'
import Draggable from 'react-draggable'
import PropTypes from 'prop-types'

import { useVideo } from '../../../hooks/useVideo'

import css from './Interpreter.module.scss'

export const Interpreter = ({
  width,
  addClass,
  image,
  pathVideo,
  pathname
}) => {
  const [getCurrentTiem, setCurrentTime] = useState('00:00') // estado del tiempo de ver el video
  const [showVideo1, setShowVideo1] = useState(false)
  const [showVideo2, setShowVideo2] = useState(false)
  const [hidden, setHidden] = useState(false)

  const { video1, video2 } = useVideo('body', pathVideo, pathname)

  const [getstateVideoPlay, setStateVideoPlay] = useState({
    state: false,
    icon: playIcon,
    label: 'Reproducir video'
  }) // estado del play

  const [positionDrag, setPositionDrag] = useState({
    activeDrags: 0,
    deltaPosition: {
      x: 0,
      y: 0
    },
    controlledPosition: {
      x: -400,
      y: 200
    }
  })

  const { deltaPosition } = positionDrag

  // funcion de click del play
  function handlePlay () {
    const $video = showVideo1 ? refVideo1.current : refVideo2.current
    // $video.
    if (getstateVideoPlay.state) {
      $video.pause()
      setStateVideoPlay({
        state: false,
        icon: playIcon,
        label: 'Reproducir video'
      })
    } else {
      $video.play()
      setStateVideoPlay({
        state: true,
        icon: pauseIcon,
        label: 'Pausar video'
      })
    }
  }

  // progreso de la barra
  function handleBarProgress () {
    const video = showVideo1 ? refVideo1.current : refVideo2.current
    const progressElem = refProgressBar.current
    const porcent = (video.currentTime / video.duration) * 100
    progressElem.style.flexBasis = `${porcent}%`
  }

  // tiempo de video y de progreso
  function handleTimeProcess () {
    const dataVideo = showVideo1 ? refVideo1.current : refVideo2.current
    initialValores(dataVideo)
    // funcion inicial
    function initialValores (element) {
      // const durationVideo = hourToString(element.duration);
      const travelVideo = hourToString(element.currentTime)
      setCurrentTime(travelVideo)
    }
    // funcion saca segundos, minutos, horas
    function hourToString (timeSeconds) {
      const secundsNumber = parseInt(timeSeconds, 10)
      const hours = Math.floor(secundsNumber / 3600)
      const minutes = Math.floor((secundsNumber - hours * 3600) / 60)
      const seconds = secundsNumber - hours * 3600 - minutes * 60
      // valores validados si son mas de dos digitos
      const valisateHours = validateIsNan(validateDigits(hours))
      // se valida si el value es NaN
      const validateMinutes = validateIsNan(validateDigits(minutes))
      const validateSeconds = validateIsNan(validateDigits(seconds))
      return `${valisateHours}:${validateMinutes}:${validateSeconds}`
    }
    // funcion para validar la cantidad de digitos y agregarles el 0
    function validateDigits (value) {
      if (value < 10) {
        return (value = '0' + value)
      } else {
        return value
      }
    }
    // funcion valida si el valor ingresado es Na-n
    function validateIsNan (elem) {
      return isNaN(elem) ? '00' : elem
    }
  }

  // funcion para adelantar o atrasar video
  function handleProcessControl (e) {
    const progress = refProgress.current
    const video = showVideo1 ? refVideo1.current : refVideo2.current
    const positionClick = e.nativeEvent.offsetX // se obtiene posicion del click
    const scrubTime = (positionClick / progress.offsetWidth) * video.duration // operacion
    video.currentTime = scrubTime
  }

  const handlerClick = (state, setState) => {
    setShowVideo1(false)
    setShowVideo2(false)
    setState(state)
    resetVideo()
  }

  const resetVideo = () => {
    const progressElem = refProgressBar.current
    progressElem.style.flexBasis = '0%'
    setStateVideoPlay({
      state: false,
      icon: playIcon,
      label: 'Reproducir video'
    })
  }

  const handleDrag = (e, ui) => {
    const { x, y } = positionDrag.deltaPosition
    setPositionDrag({
      ...positionDrag,
      deltaPosition: {
        x: x + ui.deltaX,
        y: y + ui.deltaY
      }
    })
  }

  useEffect(() => {
    resetVideo()
  }, [video1, video2])

  const nodeRef = useRef(null)

  const refVideo1 = useRef()

  const refVideo2 = useRef()

  const refProgress = useRef()

  const refProgressBar = useRef()

  return (
    <Draggable
      nodeRef={nodeRef}
      handle='strong'
      position={deltaPosition}
      onDrag={handleDrag}
    >
      <div
        ref={nodeRef}
        className={`${css.interpreter} ${addClass ?? ''} ${
          (showVideo1 || showVideo2) && css['interpreter-active']
        }`}
      >
        <div className={css['interpreter-dropdown']}>
          {((!showVideo1 && !showVideo2) ||
            (!!video1 && !showVideo1 && !showVideo2) ||
            (!!video2 && (showVideo1 || showVideo2)) ||
            (!!video2 && (showVideo1 || showVideo2) && !showVideo1)) && (
              <button
                {...(!hidden &&
                !showVideo1 &&
                !showVideo2 && { 'data-interpreter-primary-button': true })}
                onClick={() => {
                  if (!hidden) {
                    handlerClick(true, setShowVideo1)
                    setHidden(true)
                  }
                }}
                className={`${css['interpreter-btn']} ${
                css['interpreter-btn-switch']
              } ${
                !showVideo1 && !showVideo2 && css['interpreter-btn-disable']
              }`}
                aria-label='Intérprete de lenguaje de señas'
              >
                {!showVideo1 &&
                !showVideo2 &&
                (image
                  ? (
                    <img className={css['image-Video']} src={image} alt='' />
                    )
                  : (
                    <svg
                      id='Capa_1'
                      xmlns='http://www.w3.org/2000/svg'
                      x={0}
                      y={0}
                      viewBox='0 0 157.39 157.39'
                      className={css['interpreter-btn-switch-svg']}
                      style={{
                        enableBackground: 'new 0 0 157.39 157.39'
                      }}
                      xmlSpace='preserve'
                      aria-hidden='true'
                    >
                      <path
                        className='st0'
                        d='M76.31 74.62s9.79 5.59 11.53 7.69c1.75 2.1 2.45 5.59 0 6.64C85.4 90 48.7 82.31 45.9 81.79c-2.8-.52-4.89 5.61 0 7.26s14.68 2.35 17.83 3.75 4.89 4.89.7 4.54c-4.19-.35-22.02-2.45-25.86-2.8-3.84-.35-6.29 4.89-2.1 6.29 4.19 1.4 22.56 2.1 23.86 2.8s4.94 4.89.5 5.24c-4.44.35-18.07-.7-20.52 0-2.45.7-5.94 6.64 2.1 7.34s19.57 0 22.02 0c2.45 0 4.54 2.45.7 3.15s-11.18 2.1-13.98 3.15c-2.8 1.05-5.59 6.99 2.45 6.29 8.04-.7 43.69-5.59 47.53-5.94 3.84-.35 4.19-2.8 5.59-8.39s2.8-13.98 2.8-16.78-1.4-5.24-3.5-7.69-6.64-7.69-12.93-12.93c-6.29-5.24-11.03-7.09-12.93-8.04-3.5-1.74-6.84 3.83-3.85 5.59z'
                      />
                      <path
                        className='st0'
                        d='M119.84 50.55c-.52-3.87-7.01-3.51-6.79-.04 0 0 .87 11.24.12 13.86-.75 2.62-3.25 5.17-5.49 3.73-2.24-1.43-16.5-36.11-17.64-38.72-1.14-2.61-7.39-.89-6.01 4.08 1.39 4.97 6.31 13.46 6.92 16.85s-1.3 6.8-3.37 3.13-10.34-19.58-12.22-22.96-7.58-2.45-6.38 1.8c1.2 4.25 10.94 19.84 11.1 21.31.15 1.47-1.27 6.83-4.06 3.36-2.78-3.48-9.58-15.34-11.53-16.97-1.95-1.63-8.83-1.18-4.89 5.86s11 16.19 12.37 18.21c1.37 2.02.53 5.13-2.21 2.35-2.74-2.79-8.02-8.07-10.46-9.8s-8.92-.7-3.83 5.56c2.89 3.55 11.88 13.68 19.57 22.33 4.28.22 10.16.41 9.83-.26-.52-1.05-10.31-6.82-12.06-8.91-1.75-2.1-1.05-6.64 1.05-8.74 2.1-2.1 6.47-1.92 9.26-.7 2.8 1.22 16.78 10.49 19.75 13.98 1.89 2.22 6.31 7.68 9.29 11.37.17-.11.33-.21.47-.3 2.31-1.57 3.55-4.1 4.4-7.21s2.63-9.81 3.43-17.96c.8-8.14-.34-13.1-.62-15.21z'
                      />
                      <path
                        className='st0'
                        d='M78.7 157.39C35.3 157.39 0 122.09 0 78.7 0 35.3 35.3 0 78.7 0c43.39 0 78.69 35.3 78.69 78.7 0 43.39-35.3 78.69-78.69 78.69zm0-145.13c-36.63 0-66.44 29.8-66.44 66.44s29.8 66.44 66.44 66.44 66.44-29.8 66.44-66.44-29.81-66.44-66.44-66.44z'
                      />
                    </svg>
                    ))}
                <SvgMoreVert />
                {(showVideo1 || showVideo2) && (showVideo1 ? '1' : '2')}
              </button>
          )}
          {(showVideo1 || showVideo2) && (
            <>
              <button
                tabIndex={-1}
                className={`${css['interpreter-btn']} ${css['interpreter-btn--video']}`}
                onClick={() => {
                  showVideo2 && handlerClick(true, setShowVideo1)
                }}
              >
                1
                <strong className='cursor'>
                  <SvgLaptopMac />
                </strong>
              </button>
              <button
                tabIndex={-1}
                className={`${css['interpreter-btn']} ${css['interpreter-btn--video']}`}
                onClick={() => {
                  showVideo1 && handlerClick(true, setShowVideo2)
                }}
              >
                2
                <strong className='cursor'>
                  <SvgLaptopMac />
                </strong>
              </button>
              <button
                tabIndex={-1}
                className={`${css['interpreter-btn']}`}
                onClick={() => {
                  return false
                }}
                onMouseEnter={() => setHidden(true)}
                onMouseLeave={() => setHidden(false)}
                aria-label='Arrastrar video'
              >
                <strong className='cursor'>
                  <SvgOpenWith />
                </strong>
              </button>
              <button
                className={`${css['interpreter-btn']} ${css['interpreter-btn--close']}`}
                onClick={() => {
                  setShowVideo1(false)
                  setShowVideo2(false)
                  setPositionDrag({
                    deltaPosition: {
                      x: 0,
                      y: 0
                    }
                  })
                  setHidden(false)
                }}
                onFocus={() => setHidden(true)}
                onBlur={() => setHidden(true)}
                aria-label='Cerrar'
              >
                <SvgCloset />
              </button>
            </>
          )}
        </div>

        {/* Contendor video */}
        <div
          className={css['c-vid-container']}
          display={showVideo1 || showVideo2 ? 'true' : 'false'}
        >
          <div className={css['c-vid']} style={{ maxWidth: `${width}px` }}>
            {showVideo1 && (
              <video
                src={video1}
                ref={refVideo1}
                onTimeUpdate={() => {
                  handleBarProgress()
                  handleTimeProcess()
                }}
                className={`${css['no-captions']}`}
              />
            )}
            {showVideo2 && (
              <video
                src={video2}
                ref={refVideo2}
                onTimeUpdate={() => {
                  handleBarProgress()
                  handleTimeProcess()
                }}
                className={`${css['no-captions']}`}
              />
            )}
            <div className={css['c-vid-controls']}>
              <button aria-label={getstateVideoPlay.label} onClick={handlePlay}>
                {getstateVideoPlay.icon}
              </button>
              <div className={css.flex}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='48'
                  height='48'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                  focusable='false'
                >
                  <path fill='none' d='M0 0h24v24H0z' />
                  <path d='M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0014 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z' />
                </svg>
              </div>
              <p className={css['c-vid-controls-text']}>
                <span>{getCurrentTiem}</span>
              </p>
              <div className={css['progress-content']}>
                <div
                  ref={refProgress}
                  className={css.progress}
                  onClick={handleProcessControl}
                >
                  <div
                    ref={refProgressBar}
                    className={css['progress-bar']}
                    onChange={handleBarProgress}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Draggable>
  )
}

Interpreter.propTypes = {
  width: PropTypes.string,
  addClass: PropTypes.string,
  image: PropTypes.string,
  pathVideo: PropTypes.array,
  pathname: PropTypes.string
}

Interpreter.defaultProps = {
  width: '210'
}

const SvgMoreVert = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='48'
    viewBox='0 96 960 960'
    width='48'
  >
    <path d='M479.858 896Q460 896 446 881.858q-14-14.141-14-34Q432 828 446.142 814q14.141-14 34-14Q500 800 514 814.142q14 14.141 14 34Q528 868 513.858 882q-14.141 14-34 14Zm0-272Q460 624 446 609.858q-14-14.141-14-34Q432 556 446.142 542q14.141-14 34-14Q500 528 514 542.142q14 14.141 14 34Q528 596 513.858 610q-14.141 14-34 14Zm0-272Q460 352 446 337.858q-14-14.141-14-34Q432 284 446.142 270q14.141-14 34-14Q500 256 514 270.142q14 14.141 14 34Q528 324 513.858 338q-14.141 14-34 14Z' />
  </svg>
)

const SvgCloset = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 0 48 48'
    aria-hidden='true'
  >
    <path
      id='close'
      d='m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z'
    />
  </svg>
)
const SvgOpenWith = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 0 48 48'
    aria-hidden='true'
  >
    <path
      id='open_with'
      d='m24 44-8.15-8.15 2.2-2.2 4.45 4.45v-9.45h3v9.45l4.45-4.45 2.2 2.2ZM11.9 31.9 4 24l7.95-7.95 2.2 2.2L9.9 22.5h9.45v3H9.9l4.2 4.2Zm24.2 0-2.2-2.2 4.2-4.2h-9.4v-3h9.4l-4.2-4.2 2.2-2.2L44 24ZM22.5 19.3V9.9l-4.2 4.2-2.2-2.2L24 4l7.9 7.9-2.2 2.2-4.2-4.2v9.4Z'
    />
  </svg>
)

const SvgLaptopMac = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 96 960 960'
    aria-hidden='true'
  >
    <path d='M57 896q-23.513 0-40.256-17.625Q0 860.75 0 836h141q-24 0-42-18t-18-42V276q0-24 18-42t42-18h678q24 0 42 18t18 42v500q0 24-18 42t-42 18h141q0 25-17.625 42.5T900 896H57Zm423-22q14.45 0 24.225-9.775Q514 854.45 514 840q0-14.45-9.775-24.225Q494.45 806 480 806q-14.45 0-24.225 9.775Q446 825.55 446 840q0 14.45 9.775 24.225Q465.55 874 480 874Zm-339-98h678V276H141v500Zm0 0V276v500Z' />
  </svg>
)

const playIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='48'
    height='48'
    viewBox='0 0 24 24'
    aria-hidden='true'
    className='svg-icon'
    focusable='false'
  >
    <path fill='none' d='M0 0h24v24H0z' />
    <path d='M8 5v14l11-7z' />
  </svg>
)

const pauseIcon = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    height='48px'
    viewBox='0 0 24 24'
    width='48px'
    fill='#000000'
    aria-hidden='true'
    className='svg-icon'
    focusable='false'
  >
    <path d='M0 0h24v24H0z' fill='none' />
    <path d='M6 19h4V5H6v14zm8-14v14h4V5h-4z' />
  </svg>
)
