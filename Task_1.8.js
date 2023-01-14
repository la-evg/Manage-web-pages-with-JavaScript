let selector = document.querySelectorAll(".price");
let sum = 0;
selector.forEach(el => {
    sum += parseInt(el.innerText)
});
console.log(sum)