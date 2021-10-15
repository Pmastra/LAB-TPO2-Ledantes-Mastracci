var input = document.getElementById("buscador");
var dinksList = document.getElementById("resultado");

function buscarBebidas() {
    var search = input.value;

    searchDrink(search, showDrinks);
}

function showDrinks(drinks) {
    dinksList.innerHTML = createDrinkList(drinks);
    console.log(drinks);
}

function createDrinkItem(drink) {
    var link = 'drink.html?id=' + drink.idDrink;
    
    var card =
    '<div class="card mb-3" style="max-width: 540px;">'+
        '<div class="row g-0">'+
            '<div class="col-md-4">'+
                '<img src="'+ drink.strDrinkThumb +'" class="img-fluid rounded-start" alt="...">'+
            '</div>'+
        '<div class="col-md-8">'+
            '<div class="card-body">'+
                '<a href="'+ link +'" target="_blank" >' +
                '<h3 class="card-title">'+ drink.strDrink +'</h3>' +
                '</a>' +
                '<p class="card-text"><small class="text-muted">'+ drink.strAlcoholic +'</small></p>'+
                '<p class="card-text"><small class="text-muted">'+ drink.strCategory +'</small></p>'+
            '</div>'+
        '</div>'+
    '</div>';

    return card;
}

function createDrinkList(drinks) {
    var content = '<ul class="list-group list-group-flush">'

    if(drinks != null) {
        drinks.forEach(drink => {
            content += '<li class="list-group-item">' + createDrinkItem(drink) + '</li>';
        });
    }

    content += '</ul>';
    return content;
}


// Dadas la division que contiene todas las pesta�as y la de la pesta�a que se 
// quiere mostrar, la funcion oculta todas las pesta�as a excepcion de esa.
function cambiarPestanna(pestanas, pestanna) {

    // Obtiene los elementos con los identificadores pasados.
    pestanna = document.getElementById(pestanna.id);
    listaPestannas = document.getElementById(pestanas.id);
    // Obtiene las divisiones que tienen el contenido de las pesta�as.
    cpestanna = document.getElementById('c' + pestanna.id);
    listacPestannas = document.getElementById('contenido' + pestanas.id);
    i = 0;
    // Recorre la lista ocultando todas las pesta�as y restaurando el fondo 
    // y el padding de las pesta�as.
    while (typeof listacPestannas.getElementsByTagName('div')[i] !== 'undefined') {
        $(document).ready(function () {
            $(listacPestannas.getElementsByTagName('div')).css('display', 'block');
            $(listaPestannas.getElementsByTagName('li')).css('background', '');
            $(listaPestannas.getElementsByTagName('li')).css('padding-bottom', '');
        });
        i += 1;
    }

    $(document).ready(function () {
        // Muestra el contenido de la pesta�a pasada como parametro a la funcion,
        // cambia el color de la pesta�a y aumenta el padding para que tape el  
        // borde superior del contenido que esta juesto debajo y se vea de este 
        // modo que esta seleccionada.
        $(cpestanna).css('display', 'none');
        $(pestanna).css('background', 'dimgray');
        $(pestanna).css('padding-bottom', '2px');
    });
}
function cambio(imag) {
    imag = document.getElementById(imag.id);
    $(document).ready(function () {
        $('gallery_output img').not(':first').hide();
        $('gallery a').click(function () {
            if ($('' + this.rel).is(':hidden')) {
                $('gallery_output img').slideUp();
                $('' + this.rel).slideDown();
            }
        });
    });
}