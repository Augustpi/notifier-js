# notifier 

Bealtiful notifications with CSS and Vanilla JavaScript!
## Welcome

![Notifier](https://github.com/Augustpi/notifier/blob/main/notifier-ss.png?raw=true)
![Confirm](https://github.com/Augustpi/notifier/blob/main/notifier-confirm-ss.png?raw=true)

## How to use

```
import './src/css/notifier.css';
import './src/css/modal.css';
import './style.css';

import Notifier, { notify } from './src/notifier';

const notification = new Notifier({
  title: 'title,
  type: notify.type.success,
  content: 'content,
  duration: 49000
});

notification.show();
```

* **type** -> 'success', 'info', 'todo', 'reminder', 'warning' and 'danger' select one of them, 
You should select one..

import Notifier, { ***notify*** } from './src/notifier';
```
// notify.type.success
// notify.type.info
// notify.type.reminder
// notify.type.warining
// notify.type.danger
```
* **duration** int **milliseconds**

## Confirm dialog

```
const data = {
  'Property 1': 'Value 1',
  'Property 2': 'Value 2',
  'Property 3': 'Value 3',
  'Property 4': 'Value 4'
}

confirmHandler({
  confirmData: data,
  callback: (data) => { 
    console.log(data) 
  },
  data: 'confirmation callback data',
  btnCaption: 'Okay'
})
```

## Contribute
Our project is, without any discrimination, open to anyone who is willing to make a contribution!

## License
Our project is licensed under ***MIT license***.
