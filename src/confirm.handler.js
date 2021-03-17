import Notifier, { notify } from './notifier'
import { play, sound } from './utils/play'
import { events } from './utils/constants'

const DEFAULT_TITLE = 'Please Confirm'
const DEFAULT_CONTENT = 'Please check your data'
const DEFAULT_BUTTON_CAPTION = 'OK'

export const confirmHandler = ({
  confirmData = {},
  callback,
  data = '',
  title = DEFAULT_TITLE,
  content = DEFAULT_CONTENT,
  btnCaption = DEFAULT_BUTTON_CAPTION
}) => {

  var confirm = new Notifier({
    title: title,
    type: notify.type.info,
    content: content
  })

  // * Confirm dialog
  // * @return obj {ok, cancel, notification}
  const dialog = confirm.confirm({ data: confirmData, btnCaption: btnCaption })

  play({ music: sound.warning })

  var isSubmited = false

  // * OK button handler function
  dialog.result.ok.addEventListener(events.click, async () => {
    if (!isSubmited) {
      isSubmited = true
      await callback(data)
      __closeNotification(confirm, dialog.result.notification.id)
    }
    return true
  })

  // * Cancel button handler function
  dialog.result.cancel.addEventListener(events.click, () => {
    __closeNotification(confirm, dialog.result.notification.id)
    return false
  })

  document.removeEventListener(events.submit, function () { })
}

/**
 * Close given notification
 * @param {Notifier} notifier notifier instance
 * @param {Number} id notifier id
 */
function __closeNotification (notifier, id) {
  setTimeout(() => {
    notifier.close({ elem: id, closeBackDrop: true })
    notifier = null
  }, 300)
}