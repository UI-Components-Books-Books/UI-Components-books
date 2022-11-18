import { forwardRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import _uniquedId from 'lodash/uniqueId'

import css from './TextArea.module.scss'

export const TextArea = forwardRef(
  ({ id, value, resize, placeholder, label, addClass, isLabelVisible, isDisabled, isRequired, onValue, ...props }, ref) => {
    /**
       * Se crea un ID para identificar el textarea y además
       * para pasarlo dentro la función onValue proveniente
       * de los props.
       */
    const textAreaId = useMemo(() => id || _uniquedId('c-input-'), [id])

    /**
       * Detecta cuando el input tiene un cambio y si existe
       * la propiedad onValue le pasamos los parámetros
       *  id y value del input.
       *
       * @param {target} target - HTMLInputElement.
       */
    const onChange = ({ target }) => {
      if (onValue) onValue({ id: textAreaId, value: target.value })
    }

    return (
      <label htmlFor={textAreaId} className={`${css['c-label']} ${addClass ?? ''}`}>
        <span className={`${!isLabelVisible && 'u-sr-only'}`}> {label} </span>

        <textarea
          id={textAreaId}
          ref={ref}
          disabled={isDisabled}
          required={isRequired}
          placeholder={placeholder}
          autoComplete='off'
          onChange={onChange}
          className={`${css['c-textarea']} ${css[`c-textarea--${resize}`]}`}
          {...props}
        >
          {value}
        </textarea>
      </label>
    )
  }
)

TextArea.defaultProps = {
  resize: 'vertical',
  placeholder: 'Here is a sample placeholder'
}

TextArea.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  resize: PropTypes.oneOf(['none', 'horizontal', 'vertical']),
  placeholder: PropTypes.string,
  label: PropTypes.string,
  addClass: PropTypes.string,
  isLabelVisible: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  onValue: PropTypes.func
}
