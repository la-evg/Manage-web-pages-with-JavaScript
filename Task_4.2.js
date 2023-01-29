function btnClick(){
    console.log(document.querySelector('#val').value)
}
let button = document.querySelector('#btn')
button.addEventListener('click', btnClick)