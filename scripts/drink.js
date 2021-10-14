const params = {};
getParams();
const idDrink = params['id'];

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