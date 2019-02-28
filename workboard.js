
//https://stephengrider.github.io/JSPlaygrounds/
// var collection = [
// {"user": "Tinky-Winky", "sex": "male"}, 
// {"user": "Dipsy", "sex": "male"}, 
// {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}
// ];

// var pre = [];


// collection.filter(function(object){
// 	pre.push("sex");
	

// });
// pre
// var snot = pre.length;
// snot
// var piss = collection.length;
// snot === piss

// // function myFunction(){
// // document.getElementById("demo").innerHTML = reject([1, 3, 6, 7, 11, 12, 13], function(item){return item % 2});
// // }

// var cities = [
// {city: "London", street: "Harley", rent: 3000, danger: 16},
// {city: "Madrid", street: "Ferdinand", rent: 1200, danger: 12},
// {city: "Portland", street: "Forest", rent: 920, danger: 9},
// {city: "Marshall", street: "West Rusk", rent: 770, danger: 21}

// ];
// //forEach
// var bestCity = [];
// cities.forEach(function(city){
// 	return bestCity.push(city.street +" is a sexy becky");

// });
// bestCity
// //filter
// var bestCities = cities.filter(function(city){
// 	return city.rent < 1500 && city.danger < 16; 
// });
// bestCities

// //find method using functions
// function Car(model){
// 	this.model = model;
// }

// var cars = [
// new Car('Ferrari'),
// new Car('Camry'),
// new Car('Justy')
// ];

// cars.find(function(car){
// 	return car.model === 'Justy';
// });

// //find using a function and Object.key();

// var ladders = [
// {id: 1, height: 20},
// {id: 3, height: 25}
// ];



// function findWhere(array, criteria) {
// 	return array.find(function(el) {
// 		var property = Object.keys(criteria)[0];
// 		return el[property] === criteria[property];
// 	});
// }
// function myFunction(){
// 	document.getElementById("demo").innerHTML = findWhere(ladders, {height: 25});
// } 

// //reduce 
// var primaryColors = [
// {color: "red"},
// {color: "yellow"},
// {color: "blue"}
// ];

// primaryColors.reduce(function(prev, primeColor){
// 	prev.push(primeColor.color);
// 	return prev;
// }, []);

// //another example of reduce

// function balancedParens(string){
// 	return !string.split("").reduce(function(prev, char){
// 		if(prev < 0){return prev}
// 			if(char === "("){return ++prev}
// 				if(char === ")"){return --prev}
// 					return prev;
// 			}, 0);


// }
// balancedParens("((()())");

// //working on a reduce algo
// var desks = [
//   { type: 'sitting' },
//   { type: 'standing' },
//   { type: 'sitting' },
//   { type: 'sitting' },
//   { type: 'standing' }
// ];

// var sit = desks.reduce(function(sitting, desk) {
//   if(desk.type === 'sitting'){return sitting + 1;}
//   return sitting 
	
 
// }, 0);

// var stand = desks.reduce(function(standing, desk){
// 	if(desk.type === 'standing'){
//   	return standing + 1;
//   }
//   return standing;
// }, 0);
// sit
// stand
// //ending should go }, {sitting: 0, standing: 0}}
// //seem to turn the values into keys of new resulting object with number values

// //a reduce function to create an object of counted string elements
// function countString(str){
// var result = {};
//   for(var i = 0; i < str.length; i++){
//   var char = str[i].toLowerCase();
//   if(result[char] > 0){
//   	result[char]++
//   }else {
//   	result[char] = 1;
//   };
   
//   }
//   return result;
// }
// countString("Lemon wood under winter light. Nothing like a highlight moon machine to start us of again.");


// //char counter into an object (key value pairs), now using reduce

// // var str = "This is the sausage of I saw such!";
// // var chars = str.toLowerCase().split("");


// // chars.reduce(function(acc, char){
// // 	if(!acc[char]){
// //    acc[char]= 1; 
// //   } else {
// //   acc[char] = acc[char]+1;
// //   }
// //   return acc;
// // }, {});

// //perhaps try to learn simple accumulation with reduce!
// var desks = [
//   { type: 'sitting' },
//   { type: 'standing' },
//   { type: 'sitting' },
//   { type: 'sitting' },
//   { type: 'standing' }
// ];
// var deskTypes = desks.reduce(function(acc, desk) {
//     if(desk.type === "sitting") {
//         acc.sitting++
//     } if(desk.type === "standing") {
//         acc.standing++
//     }
//     return acc;
    
// }, { sitting: 0, standing: 0 });
// deskTypes


// //remove redundant elements from array
// function unique(array) {
  

	
//   	return [...new Set(array)];
  

// }
// unique([1,1,3,4,4,4,5,7,7]);//[1,3,4,5,7]
// //longer version, using reduce

// function unique(origin) {
  
// var array = origin.split(" ");

//   	return array.reduce(function(acc, curr){
//     if(acc.indexOf(curr) == -1){
//     	acc.push(curr);
//     }
//       return acc;
//     }, []);
  

// }
// unique("All of the free movies found on this website are hosted on third-party servers that are freely available to watch online for all internet users. Any legal issues regarding the free online movies on this website should be taken up with the actual file hosts themselves, as we're not affiliated with them.");
// // using the ...new Set

// function unique(origin) {
//   var array = origin.split(" ");
// var edited = [...new Set(array)];
// return edited.join(" ");
// }
// unique("Who would have thought the Ivory Coast would lead to this tragedy and horror in a small town in a small East Texas city?");

// //fat arrow and fibonacci
// const fibonacci = n =>(n < 3) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

// //create bookshop using enhanced object literals
// //create bookshop using enhanced object literals
// function createBookshop(inventory){
// 	return {
//   	inventory,
//     inventoryValue(){
//       return inventory.reduce((total, book) => total + book.price, 0);
//     },
//     priceForTitle(title){
//     return this.inventory.find(book => book.title === title).price;
//     }
//   };
// }

// const inventory = [
//   { 
//     title: 'Loser Escapade', 
//     price: 22 
//   }, 
//   { 
//     title: 'Salmonskin Sneakers', 
//     price: 14 
//   }
// ];

// const bookshop = createBookshop(inventory);
// bookshop.inventoryValue();
// //es6 default cases

// function User(id){
// this.id = id;
// }

// function generateId(){
// return Math.random()* 99999;
  
// }

// function createAdminUser(user = new User(generateId())  ){
// 	user.admin = true;
//   return user;
// }

// const user = createAdminUser(new User(generatedId()));

// createAdminUser();



// //algo if every object has property/key pre parameter

// function truthCheck(collection = "defaulted", pre = "defaulted") {
//   // Is everyone being true?
  
//   collection.every(function(person){
//   	if(!person.pre){
//     	return false;
//     }else {
//       return true;
//      }
//     return 
//   });
  
// truthCheck(
//   [
//   {"user": "Tinky-Winky", "sex": "male"}, 
//   {"user": "Dipsy", "sex": "male"}, 
//   {"user": "Laa-Laa", "sex": "female"}, 
//   {"user": "Po", "sex": "female"}], 
//            "sex"
// );

// //use some es2015
// function truthCheck(collection = "defaulted", pre = "defaulted") {
// 	return collection.every(person => person === person.pre);
// }
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


// //use ternary 
// function truthCheck(collection = "defaulted", pre = "defaulted") {
 
//   return collection.every(person=> person.find(pre) ? true : false);
    
// }
  
// truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// //rest and spread

// function validateShoppingList(...items){

// if( items.indexOf("milk, eggs"< 0)){
//       return "milk, eggs,"+items;
//       }
//       else {
//     return items;
//     }
// }
// validateShoppingList(" muffins", " index cards", " apples", " cheese")
// //refactor for a 
// function product(...numbers) {

  
//   return numbers.reduce((acc, number)=>  acc * number, 1);
// }
// product(3,5,7)

// //destructuring

// const Expense = {
// type: "Creative Writing",
// amount: "$3440 usd"

// };
// const {type, amount} = Expense;
// type
// //fizzbuzz from the top
// function fizzBuzz(){
// for(let i = 1; i <= 100; i++){
 
// 	if(i % 15 === 0){
   
//   console.log("FizzBuzz");
//   } else if(i % 5 === 0){
  
//   	console.log("Buzz");
//   } else if(i % 3 === 0){
//    console.log("Fizz");
//   }else{
//   	console.log(i);
//   }
// }

// }
// fizzBuzz();
// //the mirror using for loop—creating a palindrome(made this up on my ownsome)
// function reverse(str) {
//    const arr = str.split("");
//    for(let i = str.length; i > -1; i--){
//     arr.push(str[i]);
//    }
//    return arr.join("");
// }
// reverse("The goat lives in the well")
// //straight reversal
// function reverse(str) {
//    let arr = [];
//    for(let i = str.length; i > -1; i--){
    
//      arr.push(str[i]);
//    }
//    return arr.join("");
// }

// //forof recursion for straight reversal of string
// function reverse(str) {
//    let reversed = "";
//    for(let character of str){
//     reversed = character + reversed;
//    }
//   return reversed;
// }
// reverse("The goat lives in the well");

// //reversal with reduce and es2015
// function reverse(str){

// return str.split("").reduce((rev, char)=> char + rev, "");
// }
// reverse("beetle shit");

// //destructuring stuff
// const Google = {
// locations: ["Mountain View", "New York", "London"]
// };

// const {locations: [,location]} = Google;

// location//New York
// //simple destructuring of obj
// const expense = {
//   type: "Artistic",
//   amount: "$55 USD"
// };

// const {type, amount} = expense;
// //destructuring properties in obj in function
// const savedFile = {
//   extension:"jpg",
//   name: "repost",
//   size: 45000
// };
// function fileSummary({extension, name, size}){
//   return `This file ${name}.${extension} uses ${size} bytes of memory.`;
// }
// fileSummary(savedFile);
// //destructuring elements from arrays
// const companies = [
//   "Shoe Stores",
//   "Google",
//   "Uber Devil Drive"
// ];
// const [one, ...rest] = companies;//output below
// // Shoe Stores
// // ["Google","Uber Devil Drive"]

// //most literal/direct palindrome func
// function palindrome(str) {
//  var re = /[^A-Za-z0-9]/g;
 
//  var len = str.length;
//  for (var i = 0; i < len/2; i++) {
//    if (str[i] !== str[len - 1 - i]) {
//        return false;
//    }
//  }
//  return true;
// }
// //palindrome that removes spaces and capitals
// function palindrome(str) {
//  var re = /[^A-Za-z0-9]/g;
//  str = str.toLowerCase().replace(re, "");
//  var len = str.length;
//  for (var i = 0; i < len/2; i++) {
//    if (str[i] !== str[len - 1 - i]) {
//        return false;
//    }
//  }
//  return true;
// }
// //palindrome without for loop
// function palindrome(str) {
//   var re = /[\W_]/g;
//   var lowRegStr = str.toLowerCase().replace(re, '');
//   var reverseStr = lowRegStr.split('').reverse().join(''); 
//   return reverseStr === lowRegStr;
// }
// palindrome("A man, a plan, a canal. Panama");
// //verbatim palindrome using reduce
// function palindrome(str){

// const revStr = str.split("").reduce((rev, char)=> char + rev, "");
//   return str === revStr
// } 
// //correcting kind of palindrome using reduce
// function palindrome(str){
//   const res = /[^A-Za-z09]/g;
// str = str.toLowerCase().replace(res, "");
// const revStr = str.split("").reduce((rev, char)=> char + rev, "");
//   return str === revStr
// }
// palindrome("a man. a plan. A canal. Panama!");
// //verbatim palindrome using reverse()
// function palindrome(str){
//   const revStr = str.split("").reverse().join("");
//   return str === revStr;
// }
// palindrome("livevil");

// //palindrome using every()
// function palindrome(str){
//   return str.split("").every((char, i)=> {
//       return char === str[str.length - i - 1];
//   });
// }
// palindrome("eye");
// //reverse int
// function reverseInt(n){
//   n = n + "";//or any other method for converting int to str
//   return n.split("").reverse().join("");
// }
// reverseInt(123);
// //reverse int with regard to sign and value
// function reverseInt(n){
 
//   const reversed = n.toString().split("").reverse().join("");
//   return Math.sign(n) * parseInt(reversed);
// }
// reverseInt(-120);//-21

// //charMax
// const string = "This isn't what you thought your mother wanted you to do.";
// const chars = {};
// // for(let char of string){
// //   if(!chars[char]){
// //     chars[char] =1;
// //   } else {
// //     chars[char]++
// //   }
// // }

// //maxChar finding the largest valued char in object
// function maxChar(str){
// const chars = {};
// for(let char of str){
//   chars[char] = chars[char] +1 || 1;
// }

// return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b);
// }
// maxChar("abbbaaaacccbbbb");

// //maxChar using for/in 
// function maxChar(str){
//   const charMap = {};
//   let max = 0;
//  let maxChar = "";
//   for(let char of str){
//     if(charMap[char]){
//        charMap[char]++;
//     }else {
//        charMap[char] = 1;
//     }
  
//   }
//   for(let char in charMap){
//     if(charMap[char] > max){
//     max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }
// maxChar("Listen to thistles at night");
// //fizzbuzz
// function fizzBuzz(n){
// for(let i = 1; i <= n; i++){
 
//   if(i % 15 === 0){
   
//   console.log("fizzbuzz");
//   } else if(i % 5 === 0){
  
//     console.log("buzz");
//   } else if(i % 3 === 0){
//    console.log("fizz");
//   }else{
//     console.log(i);
//   }
// }

// }

// //chunking arrays
// function chunk(array, size) {


// return array.map( function(e,i){ 
//      return i%size===0 ? array.slice(i,i+size) : null; 
// }).filter(function(e){ return e; });
// }
//   chunk([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],5);
//   //chunk array without ternary
//   function chunk(array, size){
//   const chunked = [];
//   for(let element of array){
//     const last = chunked[chunked.length -1];
//     if(!last || last.length === size){
//     chunked.push([element]);
//     }else {
//       last.push(element);
//     }
//   }
//   return chunked;
// }

// chunk([1,2,3,4,5,6,7,8,9,0], 3);
//chunked with slice
// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;
//   while(index < array.length){
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }
//   return chunked;
// }
// function myFunction(){
// document.getElementById("demo").innerHTML = chunk([1,2,3,4,5,6,7,8,7,6,5,4], 3);
// }
//anagrams
// function anagram(stringA, stringB){
// const R = /[^\w]/g;
// const str1 = stringA.toLowerCase().replace(R,'').split('').sort().join('').trim();
// const str2 = stringB.toLowerCase().replace(R,'').split('').sort().join('').trim();

// if (str1 === str2) {
//      return true;
// } else {
//    return false;
// }
// }
// function myFunction(){
// document.getElementById("demo").innerHTML = anagram("flowing!", "wolf gin");
// }
//anagrams trying to use object mapping
// function objectify(str){

//   let object = {};
//   const restr = str.toLowerCase().replace(/[^\w]/g, "").trim();
//   for(let el of restr){
//     if(object[el]){
//       object[el]++
//     } else {
//       object[el] = 1;
//     }
    
//   } 
// return object;
// }

// objectify("This can make up an object with key value pairs.");
//anagram using helper function
// function anagrams(stringA, stringB) {
//   return cleanString(stringA)===cleanString(stringB);
// }

// function cleanString(str){
//   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// }
// anagrams("Nicest", "incest?");
// if seperate strings are palindrome
// function isPalindrome(strA, strB){
// 	return cleanStr(strA) === cleanStr(strB).split("").reverse().join("");
// }

// function cleanStr(str){
// 	const re = /[^\w]/g;
// 	return str.toLowerCase().replace(re, "");
// }

// function myFunction(){
// 	document.getElementById("demo").innerHTML = isPalindrome("8God flow 4!", "4 wolf-dog? 8");
// }
// const str = "this is where the dog sings";
// const firstLetter = 
// str.split(" ")[0].split("")[0].toUpperCase().;
// function myFunction(){
// document.getElementById("demo").innerHTML = capitalize("the long dog shadow flew");
// }

// const str = "this is where the dog sings";
// const words = str.split(" ");
// const word = words[0].split("");


// const capLetter = word[0].toUpperCase();



// const str = "this is where the dog sings";
// const bucket = [];
// const arrayOfWords = str.split(" ");

// for (let word of arrayOfWords){
// 	word+=1;
// }
// const letters = arrayOfWords[word].split("")[0].toUpperCasse().join("");



// function capitalize(str){
// for(let i = 0; i < arrWords.length; i++){
// 	i += 1;
// }
// const arrWords = str.split(" ");
//   const word = arrWords[i];
//   const oldLet = word[0];
//   const cap = word[0].toUpperCase();
//    return word.replace(oldLet, cap).join();
  
// }
//  capitalize("the sore neck of the library screams");

// const letter = word[0];
// const capLetter = word[0].toUpperCase();
// bucket.push(replace(capLetter, letter));
// function capitalize(str){
// 	const words = [];

// 	for(let word of str.split(" ")){
// 		words.push(word[0].toUpperCase() + word.slice(1));
// 	}
// 	return words.join(" ");
// }

// function myFunction(){
// 	document.getElementById("demo").innerHTML = capitalize("look, the small crab of the Lordly crabtree!");
// }
// //maxChar
// function maxChar(str){
// const chars = {};
// const re = /[^\w]/g;
// for(let char of str.replace(re, "").toLowerCase()){
//   chars[char] = chars[char] +1 || 1;
// }

// return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b);
// }
// maxChar("Nothing was as wonderful as her...her smile. And email.");
// //objectify
// function objectify(str){
// 	const chars = {};
// 	for(let char of str){
// 		if(chars[char]){
// 			chars[char]++;
// 		}else{
// 			chars[char] = 1;
// 		}

// 	}
// 	return chars;
// }
// objectify("Any string will do, for now.");
//mostFrequentWords
// function mostFrequentWords (string){
 
// 	const words = {};
// 	for(let word of string.split(" ")){
// 		words[word] = words[word] + 1 || 1;
// 	}
// 	 return Object.keys(words).reduce((a, b)=> words[a] > words[b] ? a:b);
 
// }
// listing the words and frequency
// function mostFrequentWords (string){
 
// 	const words = {};
// 	for(let word of string.split(" ")){
// 		words[word] = words[word] + 1 || 1;
// 	}
// 	 return Object.keys(words).reduce((a, b)=> words[a] > words[b] ? a:b);
// }
 
//  	mostFrequentWords("For hours and for weeks he watched Tarantino films, making notes on the mechanics of tention, of dialogue and its silences, and, above all, how a moment expertly milked subtext.");
 
//translating a string into an array of words
	
// function chunk(array, size){
// 	array = array.split(" ");
	
// 	const chunked = [];
// 	let index = 0;
// 	while(index < array.length){
// 		chunked.push(array.slice(index, index + size));
// 		index += size;
// 	}
// 	return chunked;
// }
// chunk("For hours and for weeks he watched Tarantino films, making notes on the mechanics", 3);
//steps
// function steps(n){
// 	for(let row = 0; row < n; row++){
//   	let stair = "";
//     for(let column = 0; column < n; column++){
//     	if(column <= row){
//       	stair += "#";
//       } else {
//       	stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }
// steps(5)

//recursive steps printout

// function steps(n, row=0, stair=""){
// 	if(n === row){
// 		return;
// 	}
// 	if(n === stair.length){
// 		console.log(stair);
// 		return steps(n, row + 1);
// 	}
// 	if(stair.length <= row){
// 		stair += "#";
// 	} else{
// 		stair += " ";
// 	}
// 	steps(n, row, stair);
// }

 // steps(5);
// // frequency
// function frequency(str){

//   str = str.toLowerCase();
//   const words = {};
//   for(let word of str.split(" ")){
//   	words[word] = words[word] + 1 || 1;
//   }
//   return words;
// }
// frequency("This was what we was called for and was");
// iterative pyramid
// function pyramid(n) {
// 	const midpt = Math.floor((2 * n -1)/2);
//   for(let row = 0; row < n; row++){
//   	let stair = "";
//     for(let column = 0; column < 2 * n -1; column++){
//     	if(midpt - row <= column && midpt + row >= column){
//       	stair += "#";
//       } else{
//       	stair += " ";
//       }
//     }
//     console.log(stair);
//   }
// }
// pyramid(5);

//palindrome with self fashioned reverse method
// function palindrome(str){
// 	const re = /[^\w]/g;
//   str = str.replace(re, "").toLowerCase();
//   const revStr = mirror(str);
//   return str === revStr;
// }

// function mirror(item){
// 	let mirrored = "";
//   for(let it of item){
//   	mirrored = it + mirrored;
//   }
//   return mirrored;
// }

// palindrome("ey eye");

//vowel count
function vowels(str) {
	const vowel = /[^\aeiou]/g;
	str = str.replace(vowel, "");
	return str.length;
}
vowels("This was the test you asked for.");