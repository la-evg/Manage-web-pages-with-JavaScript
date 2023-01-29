function removeElem() {
    let points = document.querySelector('#points')
    points.removeChild(points.lastElementChild)
}
let button = document.querySelector('#delete')
button.addEventListener('click', removeElem)
