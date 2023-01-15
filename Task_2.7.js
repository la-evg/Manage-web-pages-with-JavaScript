let new_elements = document.querySelectorAll("p");
new_elements.forEach(el => {
    if (values.includes(parseInt(el.innerText))){
        el.remove()
    }
});