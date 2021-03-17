import { isNil } from "./isNil"

/**
 * Event listener handler
 *
 * @param {Element} element Element
 * @param {Event} event Event listener action
 * @param {String} action Enter 'add' or 'remove' to add or remove listeners
 * @param {Function} callback Callback function
 */
export default function setEventListener ({ element, event, action = e.add, callback = () => { } }) {

  if (typeof element !== 'object') throw new Error('setEventListener - Element is necessary')
  if (typeof event !== "string") throw new Error('setEventListener - Event type is necessary')

  if (!isNil(element)) {

    if (element.length != undefined && element.length >= 1) {
      for (var i = 0; i < element.length; i++) {
        listenerHandler(action, event, element[i], callback)
      }
      return
    }

    listenerHandler(action, event, element, callback)

  } else {
    throw new Error('setEventListener - element is required')
  }
}

/**
 * Event listener Handler for remove or add new custom listener
 * @param {String} action e.add or e.remove
 * @param {Event} event event type
 * @param {Element} elm HTML element
 * @param {Function} callback callback funtion
 * @returns Event listener / or removeElementListener
 */
function listenerHandler (action, event, elm, callback) {
  return action === e.add
    ? elm.addEventListener(event, callback)
    : elm.removeEventListener(event, callback)
}

// base actions
export const e = {
  add: 'add',
  remove: 'remove'
}
