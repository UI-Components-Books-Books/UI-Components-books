import { useState, useEffect, useContext } from 'react'

import { TourContext } from '../../Tour'

import css from './Tour.module.scss'

export const TourHelpLayer = () => {
  // Propiedad obtenidas a través del contexto.
  const { isOpen, id, target, helpLayerClass } = useContext(TourContext)

  // Estado que almacena la posición del componente en el DOM.
  const [position, setPosition] = useState({})

  /**
    * Función que obtiene la posición del elemento en el DOM,
    * crea un objecto con eso valores y
    * actualiza el estado position.
    */
  const getPosition = () => {
    const { x: positionX, y: positionY, width: widthElement, height: heightElement } = document.querySelector(target).getBoundingClientRect()

    setPosition({
      width: `${widthElement}px`,
      height: `${heightElement}px`,
      top: `${positionY}px`,
      left: `${positionX}px`
    })
  }

  /**
    * Efecto que se lanza cuando existe un elemento
    * al cual se le pueda obtener la posición en el DOM.
    */
  useEffect(() => {
    if (target) getPosition()

    return () => {
      setPosition({})
    }
  }, [target])

  /**
    * Efecto utilizado para agregar el evento
    * resize en el objeto global window.
    */
  useEffect(() => {
    if (!isOpen || !target) return

    const handleResize = (_) => {
      getPosition()
    }

    // Si isOpen está en true, agregamos el evento "resize".
    if (isOpen) window.addEventListener('resize', handleResize)

    return () => {
      // Eliminamos el evento "resize" del window al desmontar el componente.
      window.removeEventListener('resize', handleResize)
    }
  }, [isOpen, target])

  return (
    <div
      className={`${css['c-tour-help']} ${isOpen && 'animate__animated animate__fadeIn animate__faster animate__delay-2s'} ${helpLayerClass ?? ''
        }`}
      style={position}
    >
      <span className={css['c-tour-number']}>{id}</span>
    </div>
  )
}
