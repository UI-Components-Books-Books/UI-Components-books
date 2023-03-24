import PropTypes from 'prop-types'
import classnames from 'classnames'

import { typeValidation } from '../../../utils/validations/typeValidation'
import css from './Accordion.module.scss'

export const AccordionButton = ({
  children,
  id,
  onExpanded,
  isExpanded,
  expanded,
  addClass,
  icon,
  defaultStyle,
  __TYPE,
  ...props
}) => {
  return (
    <button
      id={`accordion-button-${id}`}
      aria-controls={`accordion-panel-${id}`}
      aria-expanded={isExpanded}
      className={classnames({
        [`${css['c-accordion__button']} u-flex`]: !defaultStyle,
        [addClass]: addClass,
        [isExpanded]: expanded
      })}
      onClick={onExpanded}
      data-type={__TYPE}
      {...props}
    >
      {children}
      {icon && icon(isExpanded)}
    </button>
  )
}

AccordionButton.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
    PropTypes.node
  ]),
  id: PropTypes.number,
  onExpanded: PropTypes.func,
  isExpanded: PropTypes.bool,
  expanded: PropTypes.string,
  addClass: PropTypes.string,
  icon: PropTypes.func,
  defaultStyle: PropTypes.bool,
  __TYPE: typeValidation('AccordionButton')
}

AccordionButton.defaultProps = {
  __TYPE: 'AccordionButton'
}
