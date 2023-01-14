# Управление веб-страницей с помощью JavaScript

### Задание 1.1
Напишите скрипт, который определяет тип тега с классом secret и выводит его в консоль.

```javascript
let secret = document.querySelector(".secret")
console.log(secret.tagName.toLowerCase())
```

### Задание 1.2
Напишите скрипт, который определяет тип тега с идентификатором elem и выводит его в консоль.

```javascript
let secret = document.querySelector("#elem")
console.log(secret.tagName.toLowerCase())
```

### Задание 1.3
Напишите скрипт, который определяет тип тега с идентификатором elem и выводит его в консоль.

```javascript
let selector = document.querySelectorAll(".promo")
console.log(selector.length)
```

### Задание 1.4
Выведите в консоль название последнего тега, у которого есть класс target.

```javascript
let selector = document.querySelectorAll(".target")
console.log(selector[selector.length - 1].tagName.toLowerCase())
```