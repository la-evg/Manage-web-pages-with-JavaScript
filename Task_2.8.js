let div1 = document.querySelector("#div1");
let div2 = document.querySelector("#div2")

div1.childNodes.forEach(el => {
        if (el.nodeName != "#text"){
            div2.append(el)
        }
});