function btnClick(){
    console.log(document.querySelector('#val').innerText)
}
let button = document.querySelector('#btn')
button.addEventListener('click', btnClick)