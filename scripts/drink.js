const params = {};
getParams();
const idDrink = params['id'];

const title = document.getElementById("drinkName");
const img = document.getElementById("drinkImage");
const instructions = document.getElementById("drinkInstructions");
const ingredientsList = document.getElementById("listaIngredientes");

getDrink(idDrink, showDrink, errorDrink);

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
    img.src = drink.strDrinkThumb;
    title.innerHTML = drink.strDrink;
    instructions.innerHTML = drink.strInstructions;

    showIngredients(drink);
}

function showIngredients(drink) {
    var nombresDeIngredientes = [];
    nombresDeIngredientes[0] = drink.strIngredient1;
    nombresDeIngredientes[1] = drink.strIngredient2;
    nombresDeIngredientes[2] = drink.strIngredient3;
    nombresDeIngredientes[3] = drink.strIngredient4;
    nombresDeIngredientes[4] = drink.strIngredient5;
    nombresDeIngredientes[5] = drink.strIngredient6;
    nombresDeIngredientes[6] = drink.strIngredient7;
    nombresDeIngredientes[7] = drink.strIngredient8;
    nombresDeIngredientes[8] = drink.strIngredient9;
    nombresDeIngredientes[9] = drink.strIngredient10;
    nombresDeIngredientes[10] = drink.strIngredient11;
    nombresDeIngredientes[11] = drink.strIngredient12;
    nombresDeIngredientes[12] = drink.strIngredient13;
    nombresDeIngredientes[13] = drink.strIngredient14;
    nombresDeIngredientes[14] = drink.strIngredient15;

    var maxIngredients = 15;
    var i = 0;

    while(i < maxIngredients && nombresDeIngredientes[i] != null) {
        getIngredient(nombresDeIngredientes[i], showIngredient, errorIngredient);
        i++;
    }
}

function showIngredient(ingredient) {
    ingredientsList.innerHTML += createIngredientItem(ingredient);
}

function createIngredientItem(ingredient) {
    let content = 
    `<li>
        <div class="card ingre" style="width: 8rem;">
            <img src="${ingredient.image}" class="card-img-top">
            <div class="card-body">
            <p class="card-text">${ingredient.strIngredient}</p>
            </div>
        </div>
    </li>`;
    return content;
}

function errorDrink(error) {
    console.log(error);
    img.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ftechdirectarchive.com%2Fwp-content%2Fuploads%2F2020%2F06%2F1_pUEZd8z__1p-7ICIO1NZFA.png%3Ffit%3D978%252C542%26ssl%3D1&f=1&nofb=1";
    title.innerHTML = "Error al cargar bebida";
}

function errorIngredient(error) {
    console.log(error);
    ingredientsList.innerHTML += 
    `<li>
        <div class="card ingre" style="width: 8rem;">
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Ftechdirectarchive.com%2Fwp-content%2Fuploads%2F2020%2F06%2F1_pUEZd8z__1p-7ICIO1NZFA.png%3Ffit%3D978%252C542%26ssl%3D1&f=1&nofb=1" class="card-img-top">
            <div class="card-body">
            <p class="card-text">Error al cargar ingrediente</p>
            </div>
        </div>
    </li>`;
}