const tasks = ["Проверить документы", "Отправить начальству", "Организовать собрание"];
let selector = document.querySelector("#root")
tasks.forEach(el => {
    let pTag = document.createElement("p")
    pTag.innerText = el;
    selector.append(pTag)
});