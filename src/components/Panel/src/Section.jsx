import { forwardRef, useContext, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import _uniquedId from 'lodash/uniqueId';
import classnames from 'classnames';

import { PanelContext } from '../../Panel';
import { typeValidation } from '../../../utils/validations/typeValidation';

import css from './Panel.module.scss';

export const Section = forwardRef(({ children, addClass, defaultStyle, __TYPE, ...props }, ref) => {
  // Obtenemos la función validation del contexto
  const { validation, addNewIdToSection } = useContext(PanelContext);

  // Referencia para almacenar el valor del ID de la sección.
  const storageId = useRef(null);

  /**
   * Devuelve "true" o "false" apartir de evaluar
   * el Id de la sección con el que está en el estado.
   *
   * @returns {(Boolean)}
   */
  const isSelected = validation(storageId.current);

  useEffect(() => {
    if (!storageId.current) {
      storageId.current = parseInt(_uniquedId());
      addNewIdToSection(storageId.current);
    }
  }, [storageId]);

  // TODO: Agregar transición con FrameMotio
  return (
    <section
      ref={ref}
      role="tabpanel"
      hidden={!isSelected}
      data-type={__TYPE}
      aria-hidden={!isSelected}
      data-value={storageId.current}
      aria-labelledby={`section-${storageId.current}`}
      className={classnames({
        [css['c-section']]: !defaultStyle,
        ['video-interpreter-ui-section']: 'video-interpreter-ui-section',
        [addClass]: addClass
      })}
      {...props}>
      <span id={`section-${storageId.current}`} className="u-sr-only">
        Sección {parseInt(storageId.current) - 1}
      </span>
      {children}
    </section>
  );
});

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
};

Section.defaultProps = {
  __TYPE: 'Section'
};
