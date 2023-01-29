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

### Задание 2.1
Напишите скрипт, который создает новый элемент `<p>` в переменной new_element и добавляет его в тег с идентификатором root. Созданный тег `<p>` должен содержать в себе фразу `Ура! Мой скрипт отработал верно!`

```javascript
let new_element = document.createElement("p")
new_element.innerText = "Ура! Мой скрипт отработал верно!"
document.querySelector("#root").append(new_element)
```

### Задание 2.2
В HTML-документе есть тег `<p>` c идентификатором `title`. Напишите скрипт, который создает новый элемент `<h2>` в переменной `new_element` с текстовым содержимым `Сегодня солнечно, минус 15` и добавляет новый элемент сразу после тега с идентификатором `title`.

```javascript
let new_element = document.createElement("p")
new_element.innerText = "Сегодня солнечно, минус 15"
document.querySelector("#title").insertAdjacentElement('afterend', new_element)
```

### Задание 2.3
В HTML-документе задан тег `<ul>` c элементами `<li>` внутри. Напишите скрипт, который создает новый элемент `<li>` с текстовым содержимым Велосипед в переменной `new_element` и добавляет его в начало списка `<ul>`.

```javascript
let new_element = document.createElement("li")
new_element.innerText = "Велосипед"
document.querySelector("ul").insertAdjacentElement('afterbegin', new_element)
```

### Задание 2.4
В HTML-документе есть несколько тегов `<div>`. Напишите скрипт, который всем тегам `<div>` добавляет класс `adds`.

```javascript
elements = document.querySelectorAll("div")
elements.forEach(el => {
    el.classList.add("adds")  
});
```

### Задание 2.5
В HTML-документе есть несколько тегов `<p>`. Напишите скрипт, который присваивает каждому тегу идентификатор — от значения `p_1` и до `p_<n>`. Тут `n` — количество параграфов.

```javascript
let new_elements = document.querySelectorAll("p");
let i = 1;
new_elements.forEach(el => {
    el.id = `p_${i}`
    i++;
});
```

### Задание 2.6
В HTML-документе заданы теги `<p>`. Напишите скрипт, который удаляет теги, внутри которых хранится текстовое значение `Delete`.

```javascript
let new_elements = document.querySelectorAll("p");
new_elements.forEach(el => {
    if (el.innerText == "Delete"){
        el.remove()
    }
});
```

### Задание 2.7
В скрипте объявлен массив `values`, который состоит из чисел. В HTML-документе есть множество тегов `<p>` с классом `elems`. Необходимо дописать скрипт так, чтобы он удалил все теги `<p>` с классом `elems`, значение которых входит в массив `values`.

```javascript
let new_elements = document.querySelectorAll("p");
new_elements.forEach(el => {
    if (values.includes(parseInt(el.innerText))){
        el.remove()
    }
});
```

### Задание 2.8
В HTML-документе заданы два `<div>` тега с идентификаторами `div1` и `div2`. Напишите скрипт, который позволит перенести содержимое тега с идентификатором `div1` в конец тега с идентификатором `div2`.

```javascript
let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2")

div1.childNodes.forEach(el => {
        if (el.nodeName != "#text"){
            div2.append(el)
        }
});
```

### Задание 2.9
В HTML-документе есть тег `<ul>` c идентификатором `first`. Внутри этого тега есть теги `<li>`. Напишите скрипт, который создает новый тег `<li>` в переменной `new_element` и добавляет в элемент `<ul>` с идентификатором `first`. После добавления нового элемента выведите в консоль общее количество тегов `<li>` в теге `<ul>` с идентификатором `first`.

```javascript
let ulElem = document.querySelector("ul#first");
let new_element = document.createElement("li")
ulElem.append(new_element)
console.log(ulElem.querySelectorAll("li").length)
```

### Задание 2.10
В скрипте объявлена переменная `values`, которая содержит массив из строк. В HTML-верстке есть два тега `<div>` с классами `div1` и `div2`. Допишите скрипт так, чтобы все теги `<p>` из тега с идентификатором `div1`, значение которого встречается в списке `values`, переместились в тег с идентификатором `div2`.

```javascript
const values = ["велосипед", "ролики", "лыжи"];

let nameList = document.querySelectorAll("#div1>p")
let div2 = document.querySelector("#div2")

nameList.forEach(el => {
    if (values.includes(el.innerText)){
        div2.append(el)
    }
});
```

### Задание 2.11
В скрипте объявлена переменная `task`, в которой хранится список из строк. В HTML-верстке есть тег `<div>` с идентификатором `root`. Допишите скрипт так, чтобы на основе значений списка сформировались теги `<p>` и добавились в элемент с идентификатором `root`.

```javascript
const tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];
let selector = document.querySelector("#root")
tasks.forEach(el => {
    let pTag = document.createElement("p")
    pTag.innerText = el;
    selector.append(pTag)
});
```

### Задание 2.12
Напишите программу, которая считает количество `<div>`-, `<p>`- и `<h2>`-тегов и записывает его в объект `tags`, как в примере. Выведите сформированный объект в консоль.

```javascript
const tags = {}

tags.div = document.querySelectorAll("div").length;
tags.p = document.querySelectorAll("p").length;
tags.h2 = document.querySelectorAll("h2").length;

console.log(tags)
```

### Задание 2.13
В HTML-документе есть тег `<ul>` с идентификатором `tasks`, и внутри него есть несколько тегов `<li>` с текстом. Напишите скрипт, который позволяет отсортировать элементы `<li>` в теге `<ul>` по длине содержимого.

```javascript
let tasks = document.querySelector("#tasks")

let myArray = [...tasks.children].sort(function(a, b) {
    return a.innerText.length - b.innerText.length
});
tasks.innerHTML = ''
myArray.forEach(el => {
    tasks.appendChild(el)
});
```

### Задание 3.1
В HTML-документе задан тег `<div>` с идентификатором `div_elem`. Напишите скрипт, который добавит в стиль данного элемента ширину и высоту по 100 пикселей.

```javascript
const divElem = document.getElementById("div_elem");

divElem.style.height = "100px"
divElem.style.width = "100px"
```

### Задание 3.2
В HTML-документе задан тег `<p>` с идентификатором `rainbow`. Напишите скрипт, который указывает в стиле синий цвет текста `(#2980b9)`.

```javascript
document.getElementById("rainbow").style.color = "#2980b9";
```

### Задание 3.3
В HTML-документе есть тег `<label>` и тег `<input>` с идентификатором `target`. Необходимо написать скрипт, который присваивает тегу `<label>` атрибут, позволяющий привязать его к тегу `<input>`. В результате при клике мышью на `<label>` тег `<input>` должен стать активным (в него должен переместиться курсор).

```javascript
document.querySelector("label").setAttribute("for", "target");
```
### Задание 3.4
В HTML-документе есть тег `<p>` c идентификатором `rainbow`. Внутри этого тега указано число. Реализуйте скрипт, который делает преобразование в зависимости от следующих условий:

- Если числовое значение находится в диапазоне от 1 до 9 включительно, должно меняться значение атрибута `style`. Цвет текста — на красный (`#c0392b`).
- Если числовое значение находится в диапазоне от 10 до 20 включительно — на коричневый (`#e17055`).
- В ином случае — на желтый (`#fdcb6e`).

```javascript
let paragraf = document.getElementById("rainbow")

function changeColor (elem) {
    let value = parseInt(elem.innerText)

    if (1 <= value && value <= 9){
        elem.style.color = "#c0392b";
    }
    else if (10 <= value && value <= 20){
        elem.style.color = "#e17055";
    }
    else {
        elem.style.color = "#fdcb6e"
    }
}

changeColor(paragraf)
```

### Задание 3.5
В HTML-документе есть тег `<div>` с идентификатором photo. Внутри этого тега указана ссылка на картинку. Необходимо написать скрипт, который:

- заменит ссылку на тег `<img>` с этой картинкой
- укажет размеры картинки в атрибуте `style` 100 на 100 пикселей

```javascript
let photo = document.querySelector("#photo")

imgTag = document.createElement("img")
imgTag.src = photo.innerText
imgTag.style.height = '100px'
imgTag.style.width = '100px'
photo.innerText = ""
photo.append(imgTag)
```

### Задание 3.6
В HTML-документе задан тег `<select>` c идентификатором `numbers`. Напишите скрипт, который добавит внутрь этого тега несколько тегов `<option>` со значениями от 10 до 550 с шагом 10. Значение у тега `<option>` должно быть указано внутри и в атрибуте value.

```javascript
let select = document.querySelector("#numbers")

for (i = 10; i <= 550; i += 10){
    let option = document.createElement("option")
    option.value = i;
    option.innerText = i;
    select.appendChild(option)
}
```

### Задание 3.7
В HTML-документе задан тег `<select>`. В скрипте объявлена переменная `countries`, в которой указаны некоторые страны. Доработайте скрипт так, чтобы в тег `<select>` добавились теги `<option>` по одному на каждую страну из массива `countries`. В качестве значения тега `option` укажите название страны, а в качестве атрибута — `value` первые две буквы страны в нижнем регистре (маленькими буквами).

```javascript
const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];
for (country of countries){addToSelect(country)}

function addToSelect (country){
    let select = document.querySelector(".card>select")
    let option = document.createElement("option")
    option.innerText = country;
    option.value = (country[0] + country[1]).toLowerCase()
    select.appendChild(option)
}
```

### Задание 4.1
В HTML-документе задан тег `<button>` с идентификатором `btn` и тег `<p>` с идентификатором `val`. Напишите скрипт, который выводит в консоль содержимое тега `<p>` при клике на кнопку.

```javascript
function btnClick(){
    console.log(document.querySelector('#val').innerText)
}
let button = document.querySelector('#btn')
button.addEventListener('click', btnClick)
```

### Задание 4.2
В HTML-документе задан тег `<button>` с идентификатором `btn` и тег `<input>` с идентификатором `val`. Напишите скрипт, который выводит в консоль значение тега `<input>` при клике на кнопку.

```javascript
function btnClick(){
    console.log(document.querySelector('#val').value)
}
let button = document.querySelector('#btn')
button.addEventListener('click', btnClick)
```

### Задание 4.3
В HTML-документе задан тег <div> c идентификатором square. Он представляет собой синий квадрат. Напишите скрипт, который позволяет сделать <div> прозрачным (opacity: 0) при клике по нему.

```javascript
function changeOpacity (){
    this.style.opacity = "0"
}
let square = document.querySelector('#square')
square.addEventListener('click', changeOpacity)
```

### Задание 4.4
В HTML-документе есть тег `<button>` с идентификатором `clicker`. Напишите скрипт, который добавит обработку события клика на кнопку с идентификатором `clicker`. При нажатии на кнопку число внутри тега `<button>` должно увеличиваться на один.

```javascript
function incrimentCount() {
    this.innerText = parseInt(this.innerText) + 1;
}
let button = document.querySelector('#clicker')
button.addEventListener('click', incrimentCount)
```

### Задание 4.5
В HTML-документе задан тег `<button>` с идентификатором `delete` и тег `<ul>` c идентификатором `points` и c элементами `<li>` внутри. Напишите скрипт, который позволяет удалить последний элемент `<li>` в списке `<ul>` при нажатии на кнопку.

```javascript
function removeElem() {
    let points = document.querySelector('#points')
    points.removeChild(points.lastElementChild)
}
let button = document.querySelector('#delete')
button.addEventListener('click', removeElem)
```

### Задание 4.6
В HTML-документе задан тег `<div>` c идентификатором `square` в виде красного квадрата. У него есть атрибут `style` с указанными высотой и шириной в 100 пикселей. Напишите скрипт, который уменьшает ширину и высоту квадрата на 10% при клике по нему.

```javascript
function changeOpacity (){
    console.log(this.style.height.match(/\d+/g)[0]* 0.9)
    this.style.height = this.style.height.match(/\d+/g)[0] * 0.9 +'px'
    this.style.width = this.style.width.match(/\d+/g)[0] * 0.9 +'px'
}
let square = document.querySelector('#square')
square.addEventListener('click', changeOpacity)
```

### Задание 4.7
В HTML-документе задан тег `<button>` с классом `copy`. Напишите скрипт, который позволит при нажатии на кнопку `<button>` создать ее копию и расположить в конце тега `body`.

```javascript
function copyElement (){
    let newElem = document.createElement(this.tagName);
    newElem.innerHTML = this.innerHTML
    newElem.classList.add(this.classList)
    document.body.append(newElem)
}
let button = document.querySelector('.copy')
button.addEventListener('click', copyElement)
```