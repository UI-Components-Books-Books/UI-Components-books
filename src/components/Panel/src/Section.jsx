import { forwardRef, useContext, useEffect, useId, useMemo } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { PanelContext } from '../../Panel'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Panel.module.scss'

export const Section = forwardRef(
  ({ children, addClass, defaultStyle, __TYPE, ...props }, ref) => {
    // Obtenemos la función validation del contexto
    const { validation, addNewIdToSection, getIndexById, type } =
      useContext(PanelContext)

    // Referencia para almacenar el valor del ID de la sección.
    const id = useId()

    /**
     * Obtiene todos los HTMLAudioElement,
     * y los pausa si se están reproduciéndose,
     * con el fin de que no se escuchen un audio encima de otro.
     */
    const pauseAllAudios = () => {
      const audios = document.querySelectorAll('audio')
      audios.forEach((audio) => {
        if (!audio.paused) {
          audio.pause()
        }
      })
    }

    /**
     * Devuelve "true" o "false" después de evaluar
     * el Id de la sección con el que está en el estado.
     *
     * @returns {Boolean}
     */
    const isSelected = useMemo(() => {
      const isSelected = validation(id)

      if (isSelected) {
        pauseAllAudios()
      }

      return isSelected
    }, [id, validation])

    useEffect(() => {
      if (!id) return

      addNewIdToSection(id)
    }, [id])

    return (
      <section
        ref={ref}
        role={type === 'carrousel' ? 'group' : 'tabpanel'}
        hidden={!isSelected}
        data-type={__TYPE}
        aria-hidden={!isSelected}
        data-value={id}
        aria-labelledby={`section-${id}`}
        className={classnames({
          [css['c-section']]: !defaultStyle,
          'video-interpreter-ui-section': 'video-interpreter-ui-section',
          [addClass]: addClass
        })}
        {...(type === 'carrousel' && {
          'aria-roledescription': 'Sección'
        })}
        {...props}
      >
        <span id={`section-${id}`} className='u-sr-only'>
          Sección {getIndexById(id)}
        </span>
        {children}
      </section>
    )
  }
)

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node
  ]),
  id: PropTypes.number,
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('Section')
}

Section.defaultProps = {
  __TYPE: 'Section'
}
