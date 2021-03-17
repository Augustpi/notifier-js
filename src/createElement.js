
/**
 * Create Element
 * by Avni Onur Pehlivan @Augustpi
 *
 * @param {Element} target Target element to create the dialog
 */
export default class CreateElement {
  constructor (target) {
    this.target = target
  }

  /**
   * Create Element method
   * @param {String} type domElm properties, domElm.div
   * @param {*} attributes class or other properties
   * @param {*} context HTML or Text context
   */
  #create (type = h.div, attributes = {}, context = null) {
    const el = this.#_createElement(type, this.#_setAttr(attributes), context)
    return el
  }

  // add child element to wrapper
  #add (wrapper, child) {
    this.#_append(wrapper, child)
  }

  // Remove given element
  #rm (el) {
    this.#_removeElement(el)
  }

  // Append child element to target wrapper
  #into (el) {
    this.#_append(this.target, el)
  }

  elm = {
    create: this.#create.bind(this),
    add: this.#add.bind(this),
    in: this.#into.bind(this),
    rm: this.#rm.bind(this),
  }

  /**
   * Create Element
   * --------------
   * var newDivEl = this.#_createElement('div', this.#_setAttr({
   *   class: 'className',
   *   style: 'width: "100px"'
   - })
   *
   * @param {Element} el HTMLElement
   * @param {Function} attrs Attributes this.#_setAttr({property: value})
   * @param {Context} ctx Element context child/text
   */
  #_createElement (el = 'div', attrs = undefined, ctx = undefined) {
    var element = document.createElement(el)
    if (attrs)
      attrs.forEach((name, value) => {
        element.setAttribute(value, name)
      })

    if (ctx) element.innerHTML = ctx
    return element
  }

  /**
   * Wrapper
   * @param {Element} el Target, wrapper div
   */
  _intoContainer (el) {
    this.#_append(this.target, el)
  }

  /**
   * Given child element append into wrapper
   *
   * @param {Element} wrapper HTMLElement
   * @param {Element} child HTMLElement
   */
  #_append (wrapper, child) {
    wrapper.appendChild(child)
  }

  /**
   * Removes the given element
   * @param {Element} el Remove
   */
  #_removeElement (el) {
    if (el) el.remove()
  }

  /**
   * Create attributes
   * #_createElement() second param
   *
   * this.#_setAttr({
   *   class: 'className',
   *   'data-point': 1213
   *   style: 'width: "100px"'
   * }
   *
   * @param {Map} obj
   * @memberof #_createElement
   */
  #_setAttr (obj = {}) {
    var map = new Map()
    for (let member in obj) {
      map.set(member, obj[member])
    }
    return map
  }

  async removeAll () {
    this.target.innerHTML = ''
  }
}

export const h =
  Object.freeze({
    div: 'div',
    span: 'span',
    input: 'input',
    canvas: 'canvas',
    textarea: 'textarea',
    select: 'select',
    option: 'option',
    strong: 'strong',
    label: 'label',
    button: 'button',
    h4: 'h4',
  })
