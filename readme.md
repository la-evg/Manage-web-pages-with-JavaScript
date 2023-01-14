# Управление веб-страницей с помощью JavaScript

### Задание 1.1
Напишите скрипт, который определяет тип тега с классом secret и выводит его в консоль.

```javascript
let secret = document.querySelector(".secret")
console.log(secret.tagName.toLowerCase())
```