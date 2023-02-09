import { useContext, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { Icon, PanelContext } from '../../../components'

import css from './Panel.module.scss'

/**
 * Se crea un objeto que no se puede cambiar para
 * almacenar las definiciones en español
 * de diferentes terminos usados en el aria-label.
 */
const getSpanishType = Object.freeze({
  previous: 'anterior',
  next: 'siguiente'
})

/**
 *
 * Se crea una función que permite definir el aria-label
 * de los elementos que son usados en la navegación de la secciones.
 *
 * @param {String} type - Tipo de elemento
 * @param {Number} section - Número de la sección
 * @param {Boolean} selected - Boolean que informa si está la sección seleccionada.
 * @returns {string} Message - Mensaje utiliado en el aria-label
 */
const defaultAriaLabel = (type, section, selected) => {
  if (type === 'section') {
    return `${selected ? '' : 'Ir a la '}sección ${section}`
  }
  return `Ir a la ${getSpanishType[type]} sección`
}

export const NavSection = ({ renderItem, showPrevButton, showNextButton, icons, label, orientation, onValue, addClass, getItemAriaLabel }) => {
  /**
    * Obtenemos las propiedaes validation,
    * onToggle, listId y currentSection del contexto.
    */
  const { validation, onToggle, listId, currentSection } = useContext(PanelContext)

  /**
    * Creamos está referencia para almacenar
    * las referencias de los botones usados
    * para navegar entre secciones.
    */
  const refSections = useRef([])

  /**
    * Se crea un objeto que no se puede cambiar para
    * almacenar el keyCode de las teclas left y right.
    */
  const KEYCODE = Object.freeze({
    LEFT: 37,
    RIGHT: 39
  })

  /**
    * Objeto que almacena el valor de la sección a la cual el botón
    * tiene que redirigir dependiendo el tipo de este.
    */
  const BUTTON_TYPE = Object.freeze({
    previous: currentSection - 1,
    next: currentSection + 1
  })

  /**
    * Objeto que tiene como fin almacenar los diferentes
    * tipos de iconos que se usaran para los botones previous y next
    * de la navegación.
    */
  const normalizedIcons = {
    previous: icons?.previous || <path id='navigate_before' d='M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z' />,
    next: icons?.next || <path id='navigate_next' d='m18.75 36-2.15-2.15 9.9-9.9-9.9-9.9 2.15-2.15L30.8 23.95Z' />
  }

  /**
    *  Lista básica de items a renderizar.
    *  e.g. itemList = ['previous', 1, 2, 3, 4, 'next']
    */
  const itemList = [
    // Botón para navegar a la sección anterior.
    ...(showPrevButton ? ['previous'] : []),

    // Lista de todas la secciones.
    ...(listId || []),

    // Botón para navegar a la siguiente sección.
    ...(showNextButton ? ['next'] : [])
  ]

  /**
    * Función utilizada para obtener y almacenar
    * las referencias de los botones.
    *
    * @param {HTMLElement} ref - Referencia del botón.
    */
  const addNewRef = (ref) => {
    if (!refSections.current.includes(ref) && ref) {
      return (refSections.current = [...refSections.current, ref])
    }
    return refSections.current
  }

  /**
    * Función utilizada en el evento KeyDown del botón,
    * permite decidir el focus del siguiente elemento
    * utilizando las teclas ArrowLeft o ArrowRight.
    *
    * @param {Event} event - Evento disparado por KeyDown
    */
  const onNavigation = (e) => {
    // Obtenemos la primera sección.
    const FIRST_SECTION = refSections.current[0]
    // Obtenemos la última sección.
    const LAST_SECTION = refSections.current[refSections.current.length - 1]

    // Si la tecla pulsada ArrowLeft
    if ((e.keyCode || e.which) === KEYCODE.LEFT) {
      if (e.target === FIRST_SECTION) {
        LAST_SECTION.focus()
      } else {
        const prevFocusButton = refSections.current.indexOf(e.target) - 1
        // Agregamos el focus al botón anterior
        refSections.current[prevFocusButton].focus()
      }
    } else if ((e.keyCode || e.which) === KEYCODE.RIGHT) {
      // Si la tecla pulsada es ArrowRight
      if (e.target === LAST_SECTION) {
        FIRST_SECTION.focus()
      } else {
        const nextFocusButton = refSections.current.indexOf(e.target) + 1
        // Agregamos el focus al siguiente botón
        refSections.current[nextFocusButton].focus()
      }
    }
  }

  /**
    * Función del evento onClick utilizado
    * para mostrar la sección.
    * @param {Number} section - sección
    */
  const onClick = (section) => {
    onToggle(listId.findIndex((elem) => elem === section))
    if (onValue !== undefined) {
      onValue(section, listId.length)
    }
  }

  // Convierte la lista de elemento básicos en objetos.
  const items = itemList.map((item) => {
    let storageLastId = [...listId]
    storageLastId = storageLastId.pop()

    return typeof item === 'number'
      ? {
          onClick: (_) => {
            onClick(item)
          },
          type: 'section',
          section: item,
          selected: validation(item),
          ref: addNewRef,
          onKeyDown: onNavigation
        }
      : {
          onClick: () => {
            onClick(BUTTON_TYPE[item])
          },
          type: item,
          section: BUTTON_TYPE[item],
          selected: false,
          disabled: true && (item === 'next' ? currentSection >= storageLastId : currentSection <= listId[0])
        }
  })

  /**
    * Efecto que comprueba si existe la propiedad onValue,
    * si es asi la ejecuta.
    */
  useEffect(() => {
    if (onValue !== undefined) onValue(currentSection, listId.length)
  }, [])

  return (
    <>
      <h2 id='section-list-navigation' className='u-sr-only'>
        {label}
      </h2>
      <ul
        role='tablist'
        aria-labelledby='section-list-navigation'
        aria-orientation={orientation}
        className={`${css['c-navigation']} ${addClass ?? ''}`}
      >
        {renderItem
          ? renderItem(items)
          : items.map(({ section, type, selected, ...others }, index) => (
            <li key={`navigation-section-item-${index}`} role='presentation' className={css['c-navigation__item']}>
              {type === 'section'
                ? (
                  <button
                    id={`navigation-section-tab-${section}`}
                    role='tab'
                    tabIndex={`${selected ? 0 : -1}`}
                    aria-selected={selected}
                    className={css['c-navigation__section']}
                    aria-label={getItemAriaLabel(type, section, selected)}
                    {...others}
                  />
                  )
                : (
                  <button
                    type='button'
                    className={`${css['c-navigation__button']}`}
                    aria-label={getItemAriaLabel(type, section, selected)}
                    {...others}
                  >
                    {normalizedIcons[type]
                      ? icons
                        ? <Icon path={normalizedIcons[type]} key={type} />
                        : (
                          <Icon key={type}>
                            <svg xmlns='http://www.w3.org/2000/svg' height='48' width='48' viewBox='0 0 48 48'>
                              {normalizedIcons[type]}
                            </svg>
                          </Icon>
                          )
                      : null}
                  </button>
                  )}
            </li>
          ))}
      </ul>
    </>
  )
}

NavSection.propTypes = {
  renderItem: PropTypes.func,
  showNextButton: PropTypes.bool,
  showPrevButton: PropTypes.bool,
  icons: PropTypes.shape({
    next: PropTypes.string,
    previous: PropTypes.string
  }),
  label: PropTypes.string,
  orientation: PropTypes.string,
  onValue: PropTypes.func,
  addClass: PropTypes.string,
  getItemAriaLabel: PropTypes.func
}

NavSection.defaultProps = {
  label: 'Lista de secciones',
  orientation: 'horizontal',
  getItemAriaLabel: defaultAriaLabel
}
