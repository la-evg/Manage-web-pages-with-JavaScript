let card = document.querySelector('.card')

function incrementElement (){
    this.innerText = parseInt(this.innerText) + 1
}

for (let p of card.children){
    p.addEventListener('click', incrementElement)
}