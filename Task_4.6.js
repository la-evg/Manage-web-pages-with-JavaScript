function changeOpacity (){
    console.log(this.style.height.match(/\d+/g)[0]* 0.9)
    this.style.height = this.style.height.match(/\d+/g)[0] * 0.9 +'px'
    this.style.width = this.style.width.match(/\d+/g)[0] * 0.9 +'px'
}
let square = document.querySelector('#square')
square.addEventListener('click', changeOpacity)