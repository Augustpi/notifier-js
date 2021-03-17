# notifier 

Bealtiful notifications with CSS and Vanilla JavaScript!
## Welcome

![Notifier](https://github.com/Augustpi/notifier/blob/main/notifier-ss.png?raw=true)
![Confirm](https://github.com/Augustpi/notifier/blob/main/notifier-confirm-ss.png?raw=true)

## How to use

```
Notifier('info', 'title', 'content here', 1000).show();
```

* **type** -> 'success', 'info', 'todo', 'reminder', 'warning' and 'danger' select one of them, 
* **duration** int **milliseconds**

## Confirm dialog in notification

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
