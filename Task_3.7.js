const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];
for (country of countries){addToSelect(country)}

function addToSelect (country){
    let select = document.querySelector(".card>select")
    let option = document.createElement("option")
    option.innerText = country;
    option.value = (country[0] + country[1]).toLowerCase()
    select.appendChild(option)
}