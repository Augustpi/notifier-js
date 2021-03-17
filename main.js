import './src/css/notifier.css'
import './src/css/modal.css'
import './style.css'

import CreateElement, { h } from './src/createElement'
import Notifier, { notify } from './src/notifier'
import { confirmHandler } from './src/confirm.handler'
import { events } from './src/utils/constants'
import { doc } from './src/utils/doc'

class Notification extends CreateElement {
  constructor ({ target, data }) {
    super(target)
    console.log(data)
    this.confirmData = data
  }

  init () {
    const confirmBtn = this.elm.create(h.button, { class: 'btn cbtn cblue' }, 'Confirm')
    const showSuccess = this.elm.create(h.button, { class: ` cbtn btn-success` }, 'Success')
    const showInfo = this.elm.create(h.button, { class: `cbtn btn-info` }, 'Info')
    const showWarning = this.elm.create(h.button, { class: `cbtn btn-warning` }, 'Warning')
    const showReminder = this.elm.create(h.button, { class: `cbtn btn-reminder` }, 'Reminder')
    const showTodo = this.elm.create(h.button, { class: `cbtn btn-todo` }, 'Todo')
    const showDanger = this.elm.create(h.button, { class: `cbtn btn-danger` }, 'Danger')

    confirmBtn.addEventListener(events.click, this.showConfirmDialog.bind(this))
    showSuccess.addEventListener(events.click, this.showNotification.bind(this, 'Success', notify.type.success, 'Something great happening 😄'))
    showInfo.addEventListener(events.click, this.showNotification.bind(this, 'Info', notify.type.info, 'There is a new notification for you 🤓'))
    showWarning.addEventListener(events.click, this.showNotification.bind(this, 'Warning', notify.type.warning, 'Something went wrong! 😱'))
    showReminder.addEventListener(events.click, this.showNotification.bind(this, 'Reminder', notify.type.reminder, 'There is a new reminder'))
    showTodo.addEventListener(events.click, this.showNotification.bind(this, 'Todo', notify.type.todo, 'To do something...'))
    showDanger.addEventListener(events.click, this.showNotification.bind(this, 'Danger', notify.type.danger, 'Unexpected situation'))

    this.elm.in(confirmBtn)
    this.elm.in(showSuccess)
    this.elm.in(showInfo)
    this.elm.in(showWarning)
    this.elm.in(showReminder)
    this.elm.in(showTodo)
    this.elm.in(showDanger)
  }

  showNotification (title, type, content) {
    const notification = new Notifier({
      title: title,
      type: type,
      content: content,
      duration: 49000
    })
    notification.show()
  }

  showConfirmDialog () {
    console.log(this.confirmData)
    confirmHandler({
      confirmData: this.confirmData,
      callback: (data) => { console.log(data) },
      data: 'confirmation callback data',
      btnCaption: 'Okay'
    })
  }
}
const data = {
  'deneme yap': 'data',
  'Diger bir': 'data 2',
  'deneme': 'data 3'
}

const app = doc.getId('app')
new Notification({ target: app, data: data }).init()
