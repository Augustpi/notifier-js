// Events
export const events = Object.freeze({
  click: 'click',
  scroll: 'scroll',
  focus: 'focus',
  blur: 'blur',
  input: 'input',
  mouseup: 'mouseup',
  mousedown: 'mousedown',
  mousemove: 'mousemove',
  mouseenter: 'mouseenter',
  mouseleave: 'mouseleave',
  resize: 'resize',
  error: 'error',
  abort: 'abort',
  load: 'load',
  beforeunload: 'beforeunload',
  unload: 'unload',
  reset: 'reset',
  submit: 'submit',
  keyup: 'keyup',
  keydown: 'keydown',
  keypress: 'keypress',
  change: 'change',
  online: 'online',
  offline: 'offline',
})

export const selectors = Object.freeze({
  backdrop: '.modal-backdrop',
})

// CSS Case (cssClassName function)
export const Css = Object.freeze({
  add: 'ADD',
  remove: 'REMOVE',
  toggle: 'TOGGLE',
  insteadOf: 'INSTEADOF'
})