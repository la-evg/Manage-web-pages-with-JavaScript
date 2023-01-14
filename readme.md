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
В HTML-документе есть тег `<p>` c классом links. Внутри этого элемента указана просто текстовая ссылка без тега `<a>`. Напишите скрипт, который заменит этот текст на тег `<a>`, а в качестве содержимого тега `<a>` укажет изначальный текст.

```javascript
let selector = document.querySelector(".links");
let url = selector.innerText
selector.innerHTML = `<a>${url}</a>`
```

### Задание 1.7
В HTML-документе есть тег с классом content, внутри него есть тег `<p>`. Напишите скрипт, который заменит этот тег `<p>` на тег `<b>`, сохранив текст внутри этого тега.

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

### Задание 1.9
В HTML-документе заданы теги с числовым значением с классом numeric. Напишите скрипт, который оборачивает в тег `<b>` все значения тега с классом numeric, которые меньше нуля.

```javascript
let selector = document.querySelectorAll(".numeric");
selector.forEach(el => {
    parseInt(el.innerText) < 0 ?
     el.innerHTML = `<b>${el.innerHTML}</b>` :
     el
});
```

### Задание 1.10
Исправьте скрипт таким образом, чтобы в результате его работы в переменной result была сумма значений тегов с классом numeric.

```javascript
let result = 0;
let elems = document.querySelectorAll(".numeric");
elems.forEach(elem => result += +elem.innerText);
```

### Задание 1.11
В HTML-документе задан тег `<ul>` c классом cars. Внутри этого тега есть несколько тегов `<li>`. Реализуйте скрипт, который считывает содержимое этих элементов `<li>`, формирует из них массив и сохраняет в переменной cars.

```javascript
let selector = document.querySelectorAll(".cars>li");
let cars = []
selector.forEach(el => {
    cars.push(el.innerText)
});
console.log(cars)
```