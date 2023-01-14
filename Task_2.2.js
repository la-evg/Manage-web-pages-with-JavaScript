let new_element = document.createElement("p")
new_element.innerText = "Сегодня солнечно, минус 15"
document.querySelector("#title").insertAdjacentElement('afterend', new_element)