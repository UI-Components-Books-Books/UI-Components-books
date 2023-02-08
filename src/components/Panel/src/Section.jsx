import { forwardRef, useContext, useMemo } from 'react'
import PropTypes from 'prop-types'

import { PanelContext } from '../../Panel'
import { typeValidation } from '../../../utils/validations/typeValidation'

import css from './Panel.module.scss'

function newId ({ current }) {
  const newId = current.counter += 1

  current.index.push(newId)

  return newId
}

export const Section = forwardRef(({ children, addClass, __TYPE, ...props }, ref) => {
  // Obtenemos la función validation del contexto
  const { validation, IdToSection } = useContext(PanelContext)

  const id = useMemo(() => newId(IdToSection), [])

  /**
    * Devuelve "true" o "false" apartir de evaluar
    * el Id de la sección con el que está en el estado.
    *
    * @returns {(Boolean)}
    */
  const isSelected = validation(id)

  // TODO: Agregar transición con FrameMotion
  return (
    <section
      ref={ref}
      role='tabpanel'
      hidden={!isSelected}
      data-type={__TYPE}
      aria-hidden={!isSelected}
      data-value={id - 1}
      aria-labelledby={`section-${id}`}
      className={`${css['c-section']} ${addClass ?? ''}`}
      {...props}
    >
      <span id={`section-${id}`} className='u-sr-only'>
        Sección {id}
      </span>
      {children}
    </section>
  )
})

Section.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.arrayOf(PropTypes.element), PropTypes.element, PropTypes.node]),
  id: PropTypes.number,
  addClass: PropTypes.string,
  __TYPE: typeValidation('Section')
}

Section.defaultProps = {
  __TYPE: 'Section'
}
