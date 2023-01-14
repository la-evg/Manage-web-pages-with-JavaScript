let selector = document.querySelectorAll(".cars>li");
let cars = []
selector.forEach(el => {
    cars.push(el.innerText)
});
console.log(cars)