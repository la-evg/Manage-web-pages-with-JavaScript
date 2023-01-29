function copyElement (){
    let newElem = document.createElement(this.tagName);
    newElem.innerHTML = this.innerHTML
    newElem.classList.add(this.classList)
    document.body.append(newElem)
}
let button = document.querySelector('.copy')
button.addEventListener('click', copyElement)