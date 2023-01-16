let nameList = document.querySelectorAll("#div1>p")
let div2 = document.querySelector("#div2")

nameList.forEach(el => {
    if (values.includes(el.innerText)){
        div2.append(el)
    }
});