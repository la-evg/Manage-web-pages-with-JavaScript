function incrimentCount() {
    this.innerText = parseInt(this.innerText) + 1;
}

let button = document.querySelector('#clicker')
button.addEventListener('click', incrimentCount)