let selector = document.querySelectorAll(".numeric");
selector.forEach(el => {
    parseInt(el.innerText) < 0 ?
     el.innerHTML = `<b>${el.innerHTML}</b>` :
     el
});