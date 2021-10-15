const params = {};
getParams();
const idDrink = params['id'];

const title = document.getElementById("drinkName");
const img = document.getElementById("drinkImage");
const instructions = document.getElementById("drinkInstructions");

function getParams() {
    var paramstr = window.location.search.substr(1);
    var paramarr = paramstr.split("&");
    
    for (var i = 0; i < paramarr.length; i++) {
        var tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
    if (params['id']) {
        console.log('El valor del parámetro variable es: ' + params['id']);
    } else {
        console.log('No se envió el parámetro variable');
    }
}

function showDrink(drink) {
    console.log(drink);

    img.src = drink.strDrinkThumb;
    title.innerHTML = drink.strDrink;
    instructions.innerHTML = drink.strInstructions;
}

getDrink(idDrink, showDrink, functionError);

function functionError(error) {
    console.log(error)
    img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ftechdirectarchive.com%2Fwp-content%2Fuploads%2F2020%2F06%2F1_pUEZd8z__1p-7ICIO1NZFA.png%3Ffit%3D978%252C542%26ssl%3D1&f=1&nofb=1";
    title.innerHTML = "Error al cargar bebida";
    instructions.innerHTML = drink.strInstructions;
}