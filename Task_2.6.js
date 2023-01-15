let new_elements = document.querySelectorAll("p");
new_elements.forEach(el => {
    if (el.innerText == "Delete"){
        el.remove()
    }
});