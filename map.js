var animals = [
	{name: 'Fluffykins', species: 'rabbit'},
	{name: 'Caro',       species: 'dog'},
	{name: 'Hamilton',   species: 'dog'},
	{name: 'Harold',     species: 'fish'},
	{name: 'Ursula',     species: 'cat'},
	{name: 'Jimmy',      species: 'fish'}
]

/* Normal way - for loop */
/*
var names = [];
for (var i = 0; i < animals.length; i++){
	names.push(animals[i].name);
}
*/

/* Higher order functions - Map */
var names = animals.map(function(){
	return animal.name
});

/* Using higher order functions with Arrow (ES6 stuff) */
// var names = animals.map((animal) => animal.name);

console.log(names);
