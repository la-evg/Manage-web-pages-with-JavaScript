let paragraf = document.querySelectorAll('p')

function transferElements(){
    let newElem = document.createElement(this.tagName);
    newElem.innerHTML = this.innerHTML
    console.log(newElem)
    if (this.parentNode.id === 'div1'){
        document.querySelector('#div2').appendChild(newElem)
        this.remove();
    } else if (this.parentNode.id === 'div2'){
        document.querySelector('#div1').appendChild(newElem)
        this.remove();
    }
    paragraf = document.querySelectorAll('p')
}

paragraf.forEach((elem)=>{elem.addEventListener('click', transferElements)})