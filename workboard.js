


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

//perhaps try to learn simple accumulation with reduce!
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];
var deskTypes = desks.reduce(function(acc, desk) {
    if(desk.type === "sitting") {
        acc.sitting++
    } if(desk.type === "standing") {
        acc.standing++
    }
    return acc;
    
}, { sitting: 0, standing: 0 });
deskTypes


//remove redundant elements from array
function unique(array) {
  

	
  	return [...new Set(array)];
  

}
unique([1,1,3,4,4,4,5,7,7]);//[1,3,4,5,7]
//longer version, using reduce

function unique(origin) {
  
var array = origin.split(" ");

  	return array.reduce(function(acc, curr){
    if(acc.indexOf(curr) == -1){
    	acc.push(curr);
    }
      return acc;
    }, []);
  

}
unique("All of the free movies found on this website are hosted on third-party servers that are freely available to watch online for all internet users. Any legal issues regarding the free online movies on this website should be taken up with the actual file hosts themselves, as we're not affiliated with them.");
// using the ...new Set

function unique(origin) {
  var array = origin.split(" ");
var edited = [...new Set(array)];
return edited.join(" ");
}
unique("Who would have thought the Ivory Coast would lead to this tragedy and horror in a small town in a small East Texas city?");

//fat arrow and fibonacci
const fibonacci = n =>(n < 3) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

//create bookshop using enhanced object literals
//create bookshop using enhanced object literals
function createBookshop(inventory){
	return {
  	inventory,
    inventoryValue(){
      return inventory.reduce((total, book) => total + book.price, 0);
    },
    priceForTitle(title){
    return this.inventory.find(book => book.title === title).price;
    }
  };
}

const inventory = [
  { 
    title: 'Loser Escapade', 
    price: 22 
  }, 
  { 
    title: 'Salmonskin Sneakers', 
    price: 14 
  }
];

const bookshop = createBookshop(inventory);
bookshop.inventoryValue();
//es6 default cases

function User(id){
this.id = id;
}

function generateId(){
return Math.random()* 99999;
  
}

function createAdminUser(user = new User(generateId())  ){
	user.admin = true;
  return user;
}

const user = createAdminUser(new User(generatedId()));

createAdminUser();



//algo if every object has property/key pre parameter

function truthCheck(collection = "defaulted", pre = "defaulted") {
  // Is everyone being true?
  
  collection.every(function(person){
  	if(!person.pre){
    	return false;
    }else {
      return true;
     }
    return 
  });
  
truthCheck(
  [
  {"user": "Tinky-Winky", "sex": "male"}, 
  {"user": "Dipsy", "sex": "male"}, 
  {"user": "Laa-Laa", "sex": "female"}, 
  {"user": "Po", "sex": "female"}], 
           "sex"
);

//use some es2015
function truthCheck(collection = "defaulted", pre = "defaulted") {
	return collection.every(person => person === person.pre);
}
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//use ternary 
function truthCheck(collection = "defaulted", pre = "defaulted") {
 
  return collection.every(person=> person.find(pre) ? true : false);
    
}
  
truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

//rest and spread

function validateShoppingList(...items){

if( items.indexOf("milk, eggs"< 0)){
      return "milk, eggs,"+items;
      }
      else {
    return items;
    }
}
validateShoppingList(" muffins", " index cards", " apples", " cheese")
//refactor for a 
function product(...numbers) {

  
  return numbers.reduce((acc, number)=>  acc * number, 1);
}
product(3,5,7)

//destructuring

const Expense = {
type: "Creative Writing",
amount: "$3440 usd"

};
const {type, amount} = Expense;
type
//fizzbuzz from the top
function fizzBuzz(){
for(let i = 1; i <= 100; i++){
 
	if(i % 15 === 0){
   
  console.log("FizzBuzz");
  } else if(i % 5 === 0){
  
  	console.log("Buzz");
  } else if(i % 3 === 0){
   console.log("Fizz");
  }else{
  	console.log(i);
  }
}

}
fizzBuzz();
//the mirror using for loop—creating a palindrome(made this up on my ownsome)
function reverse(str) {
   const arr = str.split("");
   for(let i = str.length; i > -1; i--){
    arr.push(str[i]);
   }
   return arr.join("");
}
reverse("The goat lives in the well")
//straight reversal
function reverse(str) {
   let arr = [];
   for(let i = str.length; i > -1; i--){
    
     arr.push(str[i]);
   }
   return arr.join("");
}

//forof recursion for straight reversal of string
function reverse(str) {
   let reversed = "";
   for(let character of str){
    reversed = character + reversed;
   }
  return reversed;
}
reverse("The goat lives in the well");

//reversal with reduce and es2015
function reverse(str){

return str.split("").reduce((rev, char)=> char + rev, "");
}
reverse("beetle shit");

//destructuring stuff
const Google = {
locations: ["Mountain View", "New York", "London"]
};

const {locations: [,location]} = Google;

location//New York
//simple destructuring of obj
const expense = {
  type: "Artistic",
  amount: "$55 USD"
};

const {type, amount} = expense;

