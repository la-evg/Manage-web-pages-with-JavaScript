let select = document.querySelector("#numbers")

for (i = 10; i <= 550; i += 10){
    let option = document.createElement("option")
    option.value = i;
    option.innerText = i;
    select.appendChild(option)
}