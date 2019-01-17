


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
	});
}
function myFunction(){
	document.getElementById("demo").innerHTML = findWhere(ladders, {height: 25});
} 

//reduce 
var primaryColors = [
{color: "red"},
{color: "yellow"},
{color: "blue"}
];

primaryColors.reduce(function(prev, primeColor){
	prev.push(primeColor.color);
	return prev;
}, []);

//another example of reduce

function balancedParens(string){
	return !string.split("").reduce(function(prev, char){
		if(prev < 0){return prev}
			if(char === "("){return ++prev}
				if(char === ")"){return --prev}
					return prev;
			}, 0);


}
balancedParens("((()())");

//working on a reduce algo
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var sit = desks.reduce(function(sitting, desk) {
  if(desk.type === 'sitting'){return sitting + 1;}
  return sitting 
	
 
}, 0);

var stand = desks.reduce(function(standing, desk){
	if(desk.type === 'standing'){
  	return standing + 1;
  }
  return standing;
}, 0);
sit
stand
//ending should go }, {sitting: 0, standing: 0}}
//seem to turn the values into keys of new resulting object with number values

//a reduce function to create an object of counted string elements
function countString(str){
var result = {};
  for(var i = 0; i < str.length; i++){
  var char = str[i].toLowerCase();
  if(result[char] > 0){
  	result[char]++
  }else {
  	result[char] = 1;
  };
   
  }
  return result;
}
countString("Lemon wood under winter light. Nothing like a highlight moon machine to start us of again.");


//char counter into an object (key value pairs), now using reduce

// var str = "This is the sausage of I saw such!";
// var chars = str.toLowerCase().split("");


// chars.reduce(function(acc, char){
// 	if(!acc[char]){
//    acc[char]= 1; 
//   } else {
//   acc[char] = acc[char]+1;
//   }
//   return acc;
// }, {});

//perhaps try Object.values()
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(acc, desk) {
    if(!acc[desk.type]){
    acc[desk.type] = 1;
    }else {
      acc[desk.type] = acc[desk.type]+1;
  }
}, {} );

deskTypes
