import PropTypes from 'prop-types'
import classnames from 'classnames'

import { typeValidation } from '../../../utils/validations/typeValidation'
import css from './Accordion.module.scss'

export const AccordionPanel = ({
  children,
  id,
  isExpanded,
  addClass,
  defaultStyle,
  __TYPE,
  ...props
}) => {
  return (
    <div
      id={`accordion-panel-${id}`}
      role='region'
      aria-hidden={!isExpanded}
      aria-labelledby={`accordion-button-${id}`}
      data-type={__TYPE}
      className={classnames(css['c-accordion__panel'], {
        [addClass]: addClass
      })}
      {...props}
    >
      <div
        className={classnames({
          [css['c-accordion__panel-content']]: !defaultStyle
        })}
      >
        {children}
      </div>
    </div>
  )
}

AccordionPanel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node
  ]),
  id: PropTypes.number,
  isExpanded: PropTypes.bool,
  addClass: PropTypes.string,
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('AccordionPanel')
}

AccordionPanel.defaultProps = {
  __TYPE: 'AccordionPanel'
}
