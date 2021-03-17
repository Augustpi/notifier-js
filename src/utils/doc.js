import { isNil } from "./isNil"

/**
 * Document select
 *
 * query            -> Selected given '#id' or '.className' element
 * queryAll         -> Selected all element
 * queryAllToInt    -> Select all and parseInt
 * attr             -> get attribute
 * hasattrAndEqual  -> @return Boolean if given value is equal elemetn attr value
 * attrToInt        ->
 * setAttr          ->
 * hasAttr          ->
 * rmAttr           ->
 * has              ->
 * getId            ->
 * remove           ->
 */
const doc = {
  query: (e) => document.querySelector(e),
  queryAll: (e) => document.querySelectorAll(e),
  queryAllToInt: (e) => parseInt(document.querySelectorAll(e)),
  attr: (el, attr) => !isNil(el) ? el.getAttribute(attr) : undefined,
  hasattrAndEqual: (el, attr, v) => v === el.getAttribute(attr),
  attrToInt: (el, s) => parseInt(el.getAttribute(s)),
  setAttr: (el, attr, v) => el.setAttribute(attr, v),
  hasAttr: (el, properyName) => el.hasAttribute(properyName),
  rmAttr: (el, attr) => el.removeAttribute(attr),
  has: (el, className) => el.classList.contains(className),
  getId: (id) => document.getElementById(id),
  remove: (el) => !isNil(el) ? el.remove() : null,
  child: (el) => !isNil(el) ? el.childElementCount : 0,
  parentContain: (el, className) => el.parentElement.classList.contains(className)
}

export { doc }
