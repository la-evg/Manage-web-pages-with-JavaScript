let ulElem = document.querySelector("ul#first");
let new_element = document.createElement("li")
ulElem.append(new_element)
console.log(ulElem.querySelectorAll("li").length)