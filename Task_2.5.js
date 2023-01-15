let new_elements = document.querySelectorAll("p");
let i = 1;
new_elements.forEach(el => {
    el.id = `p_${i}`
    i++;
});