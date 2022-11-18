import { forwardRef } from 'react'
import PropTypes from 'prop-types'

import css from './Row.module.scss'

export const Row = forwardRef(({ addClass, ...props }, ref) => {
  return <div ref={ref} className={`${css.row} ${addClass ?? ''}`} {...props} />
})

Row.propTypes = {
  addClass: PropTypes.string
}
