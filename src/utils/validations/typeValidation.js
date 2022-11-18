/**
 * Se asegura que alguna propiedad del componente
 * no se sobrescriba.
 *
 * @param {string} expectedType - El tipo esperado para validar
 * @returns {func} función de validación personalizada
 */
export const typeValidation = (expectedType) => (props, propName, componentName) => {
  if (props[propName] !== expectedType) {
    return new Error(
         `'${propName}' in '${componentName}' \n\n NO puedes pasar un valor de props para '${propName}'.` +
            'La propiedad tenia 2 guiones abajo por un razón, Así que, si tiene la amabilidad de eliminarlo, todos podremos seguir con nuestro día sin errores.'
    )
  }
}
