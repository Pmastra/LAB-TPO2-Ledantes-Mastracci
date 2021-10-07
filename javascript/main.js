var resultado = document.getElementById("resultado");
var buscador = document.getElementById("buscador");
var btnBuscar = document.getElementById("btnBuscar");

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

function buscarTrago() {
    let tragoBuscado = buscador.value;

    fetch(url+tragoBuscado)
    .then(response => response.json())
    .then(data => {
        resultado.innerHTML = `<p>${data.drinks[0].strDrink}</p>`;
        console.log(data.drinks[0].strDrink);
    })
    .catch(err => {
        console.log(err);
    })
}
