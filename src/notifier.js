import CreateElement, { h } from './createElement'
import setEventListener, { e } from './utils/setEventListener'
import { events, selectors } from './utils/constants'
import { isNil } from './utils/isNil'
import { doc } from './utils/doc'
import { css } from './utils/cssClassName'

// Notifier constants
export const notify = {
  type: {
    danger: 'danger',
    info: 'info',
    warning: 'warning',
    success: 'success',
    reminder: 'reminder',
    todo: 'todo'
  }
}

/**
 * Notifier
 * --------
 *
 * by Avni Onur Pehlivan @Augustpi
 *
 * @param {String} type notify.type constant
 * @param {String} title title
 * @param {String} content content
 * @param {Number} duration duration
 * @param {Number} delay delay after new notify again
 */
export default class Notifier extends CreateElement {
  constructor ({ type, title, content, duration = 0 }) {
    super()
    this.type = type
    this.title = title
    this.content = content
    this.duration = duration
    this.container = this.#createContainer()
  }

  /**
   * Show notification
   */
  show () {
    this.#createNotification(
      this.type,
      this.title,
      this.content,
      this.container,
      this.duration
    )
  }

  /**
   * Confirm notification dialog
   * @param {String} btnCaption button caption
   * @param {Object} data object to view in confirm dialog
   * @returns {Object} result: {
   *    ok: HTMLDivELement (okButton)
   *    cancel: HTMLDivELement (cancelButton)
   *    notification: Notifier instance
   * }
   */
  confirm ({
    btnCaption = 'OK',
    data = undefined
  } = {}) {
    const wrapper = this.#createNotification(this.type, this.title, this.content, this.container, 0)
    const backdrop = this.elm.create(h.div, { class: 'modal-backdrop fade in' })
    const btnWrapper = this.elm.create(h.div, { class: 'cbtn-wrapper' })
    const space = this.elm.create(h.div, { class: 'cspace' })
    const okButton = this.elm.create(h.div, { class: 'notifier-ok-btn btn cbtn cblue' }, btnCaption)
    const cancelButton = this.elm.create(h.div, { class: 'notifier-ok-btn btn cbtn cred' }, 'CANCEL')

    if (data) {
      const dataWrapper = this.elm.create(h.div, { class: 'cwrapper' })
      for (var key in data) {
        const row = this.elm.create(h.div, { class: 'crow' })
        const label = this.elm.create(h.div, { class: 'label' }, key)
        const value = this.elm.create(h.div, { class: 'data' }, data[key])
        this.elm.add(row, label)
        this.elm.add(row, value)
        this.elm.add(dataWrapper, row)
      }
      this.elm.add(wrapper, dataWrapper)
    }

    this.elm.add(btnWrapper, space)
    this.elm.add(btnWrapper, okButton)
    this.elm.add(btnWrapper, cancelButton)
    this.elm.add(wrapper, btnWrapper)
    this.elm.add(document.body, backdrop)

    return {
      result: {
        ok: okButton,
        cancel: cancelButton,
        notification: wrapper
      }
    }
  }

  /**
   * Create Container
   * @returns Notifier container
   */
  #createContainer () {
    var nc = doc.getId('notifier-container')
    if (!isNil(nc)) {
      this.counter = nc.children.length + 1
      return doc.getId('notifier-container')
    } else {
      var element = this.elm.create(h.div, { id: 'notifier-container', class: 'notify container' })
      this.elm.add(document.body, element)
      return doc.getId('notifier-container')
    }
  }

  /**
   * Create Notification
   * @param {notify} type Notify object properties
   * @param {String} title Title
   * @param {String} content Notification content
   * @param {Object} container container properties
   * @param {Number} duration Notification duration
   * @returns Notifer item element
   */
  #createNotification (type, title, content, container, duration) {

    var itemId = 'notifier-item-' + this.counter
    var itemEl = this.elm.create(h.div, { class: `notify item ${type}`, id: itemId })
    var titleEl = this.elm.create(h.div, { class: 'header' }, title)
    var contentEl = this.elm.create(h.div, { class: 'content' }, content)
    var clsEl = this.elm.create(h.div, { class: 'close-btn' }, 'x')
    var iconEl = this.elm.create(h.div, { class: `img img-${type}` })
    var c = this.elm.create(h.div, { class: 'cover' })

    this.elm.add(itemEl, clsEl)
    this.elm.add(itemEl, titleEl)
    this.elm.add(c, iconEl)
    this.elm.add(c, contentEl)
    this.elm.add(itemEl, c)
    this.elm.add(container, itemEl)

    setEventListener({
      element: clsEl,
      event: events.click,
      action: h.add,
      callback: () => this.close({ elem: itemId })
    })

    setTimeout(() => {
      css.add(this.container, 'z')
      css.add(itemEl, 'show-notifier')
    }, 100)

    if (this.duration > 0) {
      setTimeout(() => this.close({ elem: itemId }), duration)
    }

    return itemEl
  }

  /**
   * 
   * @param {HTMLDivElement} elem Element
   * @param {Boolean} closeBackDrop default false
   */
  close ({ elem, closeBackDrop = false } = {}) {
    const el = doc.getId(elem)
    setEventListener({
      element: el,
      event: events.click,
      action: e.remove,
      callback: () => this.close()
    })

    if (el != null) {
      css.remove(el, 'show-notifier')
      setTimeout(() => el.remove(), 600)
      setTimeout(() => this.#removeZ(), 630)

      if (closeBackDrop) {
        const backdrop = doc.query(selectors.backdrop)
        if (backdrop) setTimeout(() => backdrop.remove(), 630)
      }
    }
  }

  /**
   * handler
   */
  #removeZ () {
    const container = document.getElementById("notifier-container")
    if (!isNil(container) && container.children.length === 0)
      container.classList.remove("z")
  }
}
