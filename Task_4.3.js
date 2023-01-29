function changeOpacity (){
    this.style.opacity = "0"
}
let square = document.querySelector('#square')
square.addEventListener('click', changeOpacity)