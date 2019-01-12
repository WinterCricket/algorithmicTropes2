


var collection = [
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy", "sex": "male"}, 
  {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}
];

var pre = [];


collection.filter(function(object){
  pre.push("sex");
	
  
});
pre
var snot = pre.length;
snot
var piss = collection.length;
snot === piss

// function myFunction(){
// document.getElementById("demo").innerHTML = reject([1, 3, 6, 7, 11, 12, 13], function(item){return item % 2});
// }

var cities = [
  {city: "London", street: "Harley", rent: 3000, danger: 16},
  {city: "Madrid", street: "Ferdinand", rent: 1200, danger: 12},
  {city: "Portland", street: "Forest", rent: 920, danger: 9},
  {city: "Marshall", street: "West Rusk", rent: 770, danger: 21}

];
//forEach
var bestCity = [];
cities.forEach(function(city){
 return bestCity.push(city.street +" is a sexy becky");
  
});
bestCity
//filter
var bestCities = cities.filter(function(city){
  return city.rent < 1500 && city.danger < 16; 
});
bestCities

//find method using functions
function Car(model){
	this.model = model;
}

var cars = [
	new Car('Ferrari'),
  new Car('Camry'),
  new Car('Justy')
];

cars.find(function(car){
	return car.model === 'Justy';
});

//find using a function and Object.key();

var ladders = [
  {id: 1, height: 20},
  {id: 3, height: 25}
];



function findWhere(array, criteria) {
  return array.find(function(el) {
    var property = Object.keys(criteria)[0];
      return el[property] === criteria[property];
  })
}
findWhere(ladders, {height: 25});

