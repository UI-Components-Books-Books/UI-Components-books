import { Children } from 'react'

/**
 *
 *  Obtiene en string el tipo de componente o tag HTML, para los
 *  React.Fragment devolvera el tipo 'react.fragment'.
 *
 * @param {ReactNode} component
 * @returns {string} - El string que representa el tipo
 */
export const typeOfComponent = (component) =>
  component?.props?.__TYPE || component?.type?.toString().replace('Symbol(react.fragment)', 'react.fragment') || undefined

/**
 *
 * @param {ReactNode} children - JSX children
 * @param {string[]} types - Tipos de children a encontrar.
 * @returns {ReactNode[]} Arreglo de children encontrados.
 * @example
 *  // Encuentra todas las ocurrencias de AccordionItem, div, React Fragment
 *  getChildrenByType(childre, ['AccordionItem', 'div', 'react.fragment'])
 */
export const getChildrenByType = (children, types) => Children.toArray(children).filter((child) => types.indexOf(typeOfComponent(child)) !== -1)
