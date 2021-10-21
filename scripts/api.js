const url = 'https://www.thecocktaildb.com/api/json/v1/1/';
const searchCocktailByName = 'search.php?s=';
const getCocktailById = 'lookup.php?i=';
const randomCocktail = 'random.php';
const getIngredientByName = 'search.php?i=';

function makeQuery(query, doSomething, functionError) {
    fetch(url + query)
        .then(result => result.json())
        .then(data => {
            doSomething(data);
        })
        .catch(err => {
            functionError();
        });
}

function searchDrink(name, doSomething, functionError) {
    makeQuery(searchCocktailByName + name, (data) => {
        doSomething(data.drinks);
    }, functionError);
}

function getDrink(id, doSomething, functionError) {
    makeQuery(getCocktailById + id, (data) => {
        doSomething(data.drinks[0]);
    }, functionError);
}

function getIngredient(name, doSomething, functionError) {
    makeQuery(getIngredientByName + name, (data) => {
        data.ingredients[0].image = `https://www.thecocktaildb.com/images/ingredients/${data.ingredients[0].strIngredient}.png`
        doSomething(data.ingredients[0]);
    }, functionError);
}
/*
Search cocktail by name
www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

List all cocktails by first letter
www.thecocktaildb.com/api/json/v1/1/search.php?f=a

Search ingredient by name
www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

Lookup full cocktail details by id
www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

Lookup ingredient by ID
www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

Lookup a random cocktail
www.thecocktaildb.com/api/json/v1/1/random.php

Lookup a selection of 10 random cocktails (only available to $2+ Patreon supporters)
www.thecocktaildb.com/api/json/v1/1/randomselection.php

List Popular cocktails (only available to $2+ Patreon supporters)
www.thecocktaildb.com/api/json/v1/1/popular.php

List most latest cocktails (only available to $2+ Patreon supporters)
www.thecocktaildb.com/api/json/v1/1/latest.php

Search by ingredient
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

Filter by multi-ingredient (only available to $2+ Patreon supporters)
www.thecocktaildb.com/api/json/v1/1/filter.php?i=Dry_Vermouth,Gin,Anis

Filter by alcoholic
www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

Filter by Category
www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

Filter by Glass
www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

List the categories, glasses, ingredients or alcoholic filters
www.thecocktaildb.com/api/json/v1/1/list.php?c=list
www.thecocktaildb.com/api/json/v1/1/list.php?g=list
www.thecocktaildb.com/api/json/v1/1/list.php?i=list
www.thecocktaildb.com/api/json/v1/1/list.php?a=list
*/