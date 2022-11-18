import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import css from './Col.module.scss'

export const Col = forwardRef(({ addClass, ...props }, ref) => {
  return <div ref={ref} className={`${css.col} ${addClass ?? ''}`} {...props} />
})

Col.propTypes = {
  addClass: PropTypes.string
}
