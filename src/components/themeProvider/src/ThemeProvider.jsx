import { useEffect, memo } from 'react'
import PropTypes from 'prop-types'

export const ThemeProvider = memo(({ children, theme = {} }) => {
  /**
    * Función encargada de agregas las nuevas
    * variables de color a una hoja de estilos.
    * @param {Object} customProperties
    */
  const updateCSSProperties = (customProperties) => {
    // Creamos el elemento style.
    const styleElement = document.createElement('style')

    // Agregamos el elemento <style> al <head>.
    document.head.append(styleElement)

    // Referenciamos la hoja de estilos del styleElement.
    const styleSheet = styleElement.sheet

    // Variable que almacenara todas las reglas de CSS.
    let rule = ''

    for (const variable in customProperties) {
      rule += `--clr-${variable}: ${customProperties[variable]};\n`
    }

    // Insertamos las reglas del CSS a la hoja de estilos.
    styleSheet.insertRule(`:root{${rule}}`)
  }

  useEffect(() => {
    if (Object.entries(theme).length === 0) return

    updateCSSProperties(theme)

    return () => {
      theme = {}
    }
  }, [theme])

  return children
})

ThemeProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]),
  theme: PropTypes.object.isRequired
}
