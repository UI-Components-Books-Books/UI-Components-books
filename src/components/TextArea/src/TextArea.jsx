import { forwardRef, useId } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import css from './TextArea.module.scss'

export const TextArea = forwardRef(
  (
    {
      id,
      value,
      resize,
      placeholder,
      label,
      addClass,
      isLabelVisible,
      isDisabled,
      isRequired,
      defaultStyle,
      onValue,
      ...props
    },
    ref
  ) => {
    /**
     * Se crea un ID para identificar el textarea y además
     * para pasarlo dentro la función onValue proveniente
     * de los props.
     */
    const textAreaId = id || useId()

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
      <label
        htmlFor={textAreaId}
        className={classnames({
          [css['c-label']]: !defaultStyle,
          [addClass]: addClass
        })}
      >
        <span className={`${!isLabelVisible && 'u-sr-only'}`}> {label} </span>

        <textarea
          id={textAreaId}
          ref={ref}
          defaultValue={value}
          disabled={isDisabled}
          required={isRequired}
          placeholder={placeholder}
          autoComplete='off'
          onChange={onChange}
          data-class='c-textarea'
          className={classnames({
            [`${css['c-textarea']} ${css[`c-textarea--${resize}`]}`]:
              !defaultStyle
          })}
          {...props}
        />
      </label>
    )
  }
)

TextArea.defaultProps = {
  resize: 'vertical',
  placeholder: 'This is an example of a placeholder'
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
  defaultStyle: PropTypes.bool,
  onValue: PropTypes.func
}
