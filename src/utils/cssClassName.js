import { Css } from './constants'
import { isNil } from './isNil'

/**
 * Given element set, remove handler
 * 
 * @param {Element} el Element
 * @param {StyleSheet} classclassName Css class name
 * @param {String} event Event ('ADD', 'REMOVE', 'TOGGLE')
 */
export default function cssClassName (el, className, event, insteadOf) {
  if (isNil(el)) return

  switch (event) {
    case Css.add:
      el.classList.add(className)
      break
    case Css.remove:
      el.classList.remove(className)
      break
    case Css.toggle:
      el.className = className
      break
    case Css.insteadOf:
      el.classList.remove(insteadOf)
      el.classList.add(className)
      break
  }
}

export const css = {
  add: (el, className) => cssClassName(el, className, Css.add),
  remove: (el, className) => cssClassName(el, className, Css.remove),
  toggle: (el, className) => cssClassName(el, className, Css.toggle),
  insteadOf: (el, className, insteadOf) => cssClassName(el, className, Css.insteadOf, insteadOf)
}