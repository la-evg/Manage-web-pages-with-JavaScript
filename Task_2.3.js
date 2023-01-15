let new_element = document.createElement("li")
new_element.innerText = "Велосипед"
document.querySelector("ul").insertAdjacentElement('afterbegin', new_element)