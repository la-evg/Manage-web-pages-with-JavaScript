let paragraf = document.getElementById("rainbow")

function changeColor (elem) {
    let value = parseInt(elem.innerText)

    if (1 <= value && value <= 9){
        elem.style.color = "#c0392b";
    }
    else if (10 <= value && value <= 20){
        elem.style.color = "#e17055";
    }
    else {
        elem.style.color = "#fdcb6e"
    }
}

changeColor(paragraf)