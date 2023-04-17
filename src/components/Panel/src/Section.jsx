import { forwardRef, useContext, useEffect, useId } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { PanelContext } from '../../Panel'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Panel.module.scss'

export const Section = forwardRef(
  ({ children, addClass, defaultStyle, __TYPE, ...props }, ref) => {
    // Obtenemos la función validation del contexto
    const { validation, addNewIdToSection, getIndexById, type } = useContext(PanelContext)

    // Referencia para almacenar el valor del ID de la sección.
    const id = useId()

    /**
     * Devuelve "true" o "false" apartir de evaluar
     * el Id de la sección con el que está en el estado.
     *
     * @returns {(Boolean)}
     */
    const isSelected = validation(id)

    useEffect(() => {
      if (!id) return

      addNewIdToSection(id)
    }, [id])

    // TODO: Agregar transición con FrameMotio
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
