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

### Задание 1.5
В HTML-документе существует тег с классом price и числовым значением. Напишите скрипт, который увеличивает в теге значение цены в два раза.

```javascript
let selector = document.querySelector(".price");
selector.innerText *= 2;
```

### Задание 1.6
В HTML-документе есть тег <p> c классом links. Внутри этого элемента указана просто текстовая ссылка без тега <a>. Напишите скрипт, который заменит этот текст на тег <a>, а в качестве содержимого тега <a> укажет изначальный текст.

```javascript
let selector = document.querySelector(".links");
let url = selector.innerText
selector.innerHTML = `<a>${url}</a>`
```

### Задание 1.7
В HTML-документе есть тег с классом content, внутри него есть тег <p>. Напишите скрипт, который заменит этот тег <p> на тег <b>, сохранив текст внутри этого тега.

```javascript
let selector = document.querySelector(".links");
let text = selector.innerText
selector.innerHTML = `<b>${text}</b>`
```

### Задание 1.8
В HTML-документе заданы элементы с числовым значением с классом price. Напишите скрипт, который считает общую сумму значений всех элементов с классом price и выводит в консоль.

```javascript
let selector = document.querySelectorAll(".price");
let sum = 0;
selector.forEach(el => {
    sum += parseInt(el.innerText)
});
console.log(sum)
```