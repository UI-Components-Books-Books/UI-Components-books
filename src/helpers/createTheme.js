/**
 * Función recursiva permite aplanar un objeto.
 *
 * @param {Object} object
 * @returns Object
 */
const flatObject = (object) => {
  let newObject = {}

  for (const i in object) {
    if (typeof object[i] === 'object') {
      const temporal = flatObject(object[i])
      for (const j in temporal) {
        newObject = {
          ...newObject,
          [i.includes('accents') || i.includes('palette') ? j : `${i}-${j}`]: temporal[j]
        }
      }
    } else {
      newObject[i] = object[i]
    }
  }

  return newObject
}

/**
 *
 * Función que permite crear un nuevo Tema
 * por medio de un objeto
 *
 * @param {Object} theme
 * @returns Object
 */
export const createTheme = (theme) => {
  return flatObject(theme)
}
