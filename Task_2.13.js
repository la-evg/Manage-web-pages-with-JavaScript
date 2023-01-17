let tasks = document.querySelector("#tasks")

let myArray = [...tasks.children].sort(function(a, b) {
    return a.innerText.length - b.innerText.length
});
tasks.innerHTML = ''
myArray.forEach(el => {
    tasks.appendChild(el)
});