
// //https://stephengrider.github.io/JSPlaygrounds/
// // var collection = [
// // {"user": "Tinky-Winky", "sex": "male"}, 
// // {"user": "Dipsy", "sex": "male"}, 
// // {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}
// // ];

// // var pre = [];


// // collection.filter(function(object){
// // 	pre.push("sex");


// // });
// // pre
// // var snot = pre.length;
// // snot
// // var piss = collection.length;
// // snot === piss

// // // function myFunction(){
// // // document.getElementById("demo").innerHTML = reject([1, 3, 6, 7, 11, 12, 13], function(item){return item % 2});
// // // }

// // var cities = [
// // {city: "London", street: "Harley", rent: 3000, danger: 16},
// // {city: "Madrid", street: "Ferdinand", rent: 1200, danger: 12},
// // {city: "Portland", street: "Forest", rent: 920, danger: 9},
// // {city: "Marshall", street: "West Rusk", rent: 770, danger: 21}

// // ];
// // //forEach
// // var bestCity = [];
// // cities.forEach(function(city){
// // 	return bestCity.push(city.street +" is a sexy becky");

// // });
// // bestCity
// // //filter
// // var bestCities = cities.filter(function(city){
// // 	return city.rent < 1500 && city.danger < 16; 
// // });
// // bestCities

// // //find method using functions
// // function Car(model){
// // 	this.model = model;
// // }

// // var cars = [
// // new Car('Ferrari'),
// // new Car('Camry'),
// // new Car('Justy')
// // ];

// // cars.find(function(car){
// // 	return car.model === 'Justy';
// // });

// // //find using a function and Object.key();

// // var ladders = [
// // {id: 1, height: 20},
// // {id: 3, height: 25}
// // ];



// // function findWhere(array, criteria) {
// // 	return array.find(function(el) {
// // 		var property = Object.keys(criteria)[0];
// // 		return el[property] === criteria[property];
// // 	});
// // }
// // function myFunction(){
// // 	document.getElementById("demo").innerHTML = findWhere(ladders, {height: 25});
// // } 

// // //reduce 
// // var primaryColors = [
// // {color: "red"},
// // {color: "yellow"},
// // {color: "blue"}
// // ];

// // primaryColors.reduce(function(prev, primeColor){
// // 	prev.push(primeColor.color);
// // 	return prev;
// // }, []);

// // //another example of reduce

// // function balancedParens(string){
// // 	return !string.split("").reduce(function(prev, char){
// // 		if(prev < 0){return prev}
// // 			if(char === "("){return ++prev}
// // 				if(char === ")"){return --prev}
// // 					return prev;
// // 			}, 0);


// // }
// // balancedParens("((()())");

// // //working on a reduce algo
// // var desks = [
// //   { type: 'sitting' },
// //   { type: 'standing' },
// //   { type: 'sitting' },
// //   { type: 'sitting' },
// //   { type: 'standing' }
// // ];

// // var sit = desks.reduce(function(sitting, desk) {
// //   if(desk.type === 'sitting'){return sitting + 1;}
// //   return sitting 


// // }, 0);

// // var stand = desks.reduce(function(standing, desk){
// // 	if(desk.type === 'standing'){
// //   	return standing + 1;
// //   }
// //   return standing;
// // }, 0);
// // sit
// // stand
// // //ending should go }, {sitting: 0, standing: 0}}
// // //seem to turn the values into keys of new resulting object with number values

// // //a reduce function to create an object of counted string elements
// // function countString(str){
// // var result = {};
// //   for(var i = 0; i < str.length; i++){
// //   var char = str[i].toLowerCase();
// //   if(result[char] > 0){
// //   	result[char]++
// //   }else {
// //   	result[char] = 1;
// //   };

// //   }
// //   return result;
// // }
// // countString("Lemon wood under winter light. Nothing like a highlight moon machine to start us of again.");


// // //char counter into an object (key value pairs), now using reduce

// // // var str = "This is the sausage of I saw such!";
// // // var chars = str.toLowerCase().split("");


// // // chars.reduce(function(acc, char){
// // // 	if(!acc[char]){
// // //    acc[char]= 1; 
// // //   } else {
// // //   acc[char] = acc[char]+1;
// // //   }
// // //   return acc;
// // // }, {});

// // //perhaps try to learn simple accumulation with reduce!
// // var desks = [
// //   { type: 'sitting' },
// //   { type: 'standing' },
// //   { type: 'sitting' },
// //   { type: 'sitting' },
// //   { type: 'standing' }
// // ];
// // var deskTypes = desks.reduce(function(acc, desk) {
// //     if(desk.type === "sitting") {
// //         acc.sitting++
// //     } if(desk.type === "standing") {
// //         acc.standing++
// //     }
// //     return acc;

// // }, { sitting: 0, standing: 0 });
// // deskTypes


// // //remove redundant elements from array
// // function unique(array) {
	

	
// //   	return [...new Set(array)];


// // }
// // unique([1,1,3,4,4,4,5,7,7]);//[1,3,4,5,7]
// // //longer version, using reduce

// // function unique(origin) {
	
// // var array = origin.split(" ");

// //   	return array.reduce(function(acc, curr){
// //     if(acc.indexOf(curr) == -1){
// //     	acc.push(curr);
// //     }
// //       return acc;
// //     }, []);


// // }
// // unique("All of the free movies found on this website are hosted on third-party servers that are freely available to watch online for all internet users. Any legal issues regarding the free online movies on this website should be taken up with the actual file hosts themselves, as we're not affiliated with them.");
// // // using the ...new Set

// // function unique(origin) {
// //   var array = origin.split(" ");
// // var edited = [...new Set(array)];
// // return edited.join(" ");
// // }
// // unique("Who would have thought the Ivory Coast would lead to this tragedy and horror in a small town in a small East Texas city?");

// // //fat arrow and fibonacci
// // const fibonacci = n =>(n < 3) ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

// // //create bookshop using enhanced object literals
// // //create bookshop using enhanced object literals
// // function createBookshop(inventory){
// // 	return {
// //   	inventory,
// //     inventoryValue(){
// //       return inventory.reduce((total, book) => total + book.price, 0);
// //     },
// //     priceForTitle(title){
// //     return this.inventory.find(book => book.title === title).price;
// //     }
// //   };
// // }

// // const inventory = [
// //   { 
// //     title: 'Loser Escapade', 
// //     price: 22 
// //   }, 
// //   { 
// //     title: 'Salmonskin Sneakers', 
// //     price: 14 
// //   }
// // ];

// // const bookshop = createBookshop(inventory);
// // bookshop.inventoryValue();
// // //es6 default cases

// // function User(id){
// // this.id = id;
// // }

// // function generateId(){
// // return Math.random()* 99999;

// // }

// // function createAdminUser(user = new User(generateId())  ){
// // 	user.admin = true;
// //   return user;
// // }

// // const user = createAdminUser(new User(generatedId()));

// // createAdminUser();



// // //algo if every object has property/key pre parameter

// // function truthCheck(collection = "defaulted", pre = "defaulted") {
// //   // Is everyone being true?

// //   collection.every(function(person){
// //   	if(!person.pre){
// //     	return false;
// //     }else {
// //       return true;
// //      }
// //     return 
// //   });

// // truthCheck(
// //   [
// //   {"user": "Tinky-Winky", "sex": "male"}, 
// //   {"user": "Dipsy", "sex": "male"}, 
// //   {"user": "Laa-Laa", "sex": "female"}, 
// //   {"user": "Po", "sex": "female"}], 
// //            "sex"
// // );

// // //use some es2015
// // function truthCheck(collection = "defaulted", pre = "defaulted") {
// // 	return collection.every(person => person === person.pre);
// // }
// // truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


// // //use ternary 
// // function truthCheck(collection = "defaulted", pre = "defaulted") {
	
// //   return collection.every(person=> person.find(pre) ? true : false);

// // }

// // truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

// // //rest and spread

// // function validateShoppingList(...items){

// // if( items.indexOf("milk, eggs"< 0)){
// //       return "milk, eggs,"+items;
// //       }
// //       else {
// //     return items;
// //     }
// // }
// // validateShoppingList(" muffins", " index cards", " apples", " cheese")
// // //refactor for a 
// // function product(...numbers) {

	
// //   return numbers.reduce((acc, number)=>  acc * number, 1);
// // }
// // product(3,5,7)

// // //destructuring

// // const Expense = {
// // type: "Creative Writing",
// // amount: "$3440 usd"

// // };
// // const {type, amount} = Expense;
// // type
// // //fizzbuzz from the top
// // function fizzBuzz(){
// // for(let i = 1; i <= 100; i++){
	
// // 	if(i % 15 === 0){
	
// //   console.log("FizzBuzz");
// //   } else if(i % 5 === 0){
	
// //   	console.log("Buzz");
// //   } else if(i % 3 === 0){
// //    console.log("Fizz");
// //   }else{
// //   	console.log(i);
// //   }
// // }

// // }
// // fizzBuzz();
// // //the mirror using for loop—creating a palindrome(made this up on my ownsome)
// // function reverse(str) {
// //    const arr = str.split("");
// //    for(let i = str.length; i > -1; i--){
// //     arr.push(str[i]);
// //    }
// //    return arr.join("");
// // }
// // reverse("The goat lives in the well")
// // //straight reversal
// // function reverse(str) {
// //    let arr = [];
// //    for(let i = str.length; i > -1; i--){
	
// //      arr.push(str[i]);
// //    }
// //    return arr.join("");
// // }

// // //forof recursion for straight reversal of string
// // function reverse(str) {
// //    let reversed = "";
// //    for(let character of str){
// //     reversed = character + reversed;
// //    }
// //   return reversed;
// // }
// // reverse("The goat lives in the well");

// // //reversal with reduce and es2015
// // function reverse(str){

// // return str.split("").reduce((rev, char)=> char + rev, "");
// // }
// // reverse("beetle shit");

// // //destructuring stuff
// // const Google = {
// // locations: ["Mountain View", "New York", "London"]
// // };

// // const {locations: [,location]} = Google;

// // location//New York
// // //simple destructuring of obj
// // const expense = {
// //   type: "Artistic",
// //   amount: "$55 USD"
// // };

// // const {type, amount} = expense;
// // //destructuring properties in obj in function
// // const savedFile = {
// //   extension:"jpg",
// //   name: "repost",
// //   size: 45000
// // };
// // function fileSummary({extension, name, size}){
// //   return `This file ${name}.${extension} uses ${size} bytes of memory.`;
// // }
// // fileSummary(savedFile);
// // //destructuring elements from arrays
// // const companies = [
// //   "Shoe Stores",
// //   "Google",
// //   "Uber Devil Drive"
// // ];
// // const [one, ...rest] = companies;//output below
// // // Shoe Stores
// // // ["Google","Uber Devil Drive"]

// // //most literal/direct palindrome func
// // function palindrome(str) {
// //  var re = /[^A-Za-z0-9]/g;

// //  var len = str.length;
// //  for (var i = 0; i < len/2; i++) {
// //    if (str[i] !== str[len - 1 - i]) {
// //        return false;
// //    }
// //  }
// //  return true;
// // }
// // //palindrome that removes spaces and capitals
// // function palindrome(str) {
// //  var re = /[^A-Za-z0-9]/g;
// //  str = str.toLowerCase().replace(re, "");
// //  var len = str.length;
// //  for (var i = 0; i < len/2; i++) {
// //    if (str[i] !== str[len - 1 - i]) {
// //        return false;
// //    }
// //  }
// //  return true;
// // }
// // //palindrome without for loop
// // function palindrome(str) {
// //   var re = /[\W_]/g;
// //   var lowRegStr = str.toLowerCase().replace(re, '');
// //   var reverseStr = lowRegStr.split('').reverse().join(''); 
// //   return reverseStr === lowRegStr;
// // }
// // palindrome("A man, a plan, a canal. Panama");
// // //verbatim palindrome using reduce
// // function palindrome(str){

// // const revStr = str.split("").reduce((rev, char)=> char + rev, "");
// //   return str === revStr
// // } 
// // //correcting kind of palindrome using reduce
// // function palindrome(str){
// //   const res = /[^A-Za-z09]/g;
// // str = str.toLowerCase().replace(res, "");
// // const revStr = str.split("").reduce((rev, char)=> char + rev, "");
// //   return str === revStr
// // }
// // palindrome("a man. a plan. A canal. Panama!");
// // //verbatim palindrome using reverse()
// // function palindrome(str){
// //   const revStr = str.split("").reverse().join("");
// //   return str === revStr;
// // }
// // palindrome("livevil");

// // //palindrome using every()
// // function palindrome(str){
// //   return str.split("").every((char, i)=> {
// //       return char === str[str.length - i - 1];
// //   });
// // }
// // palindrome("eye");
// // //reverse int
// // function reverseInt(n){
// //   n = n + "";//or any other method for converting int to str
// //   return n.split("").reverse().join("");
// // }
// // reverseInt(123);
// // //reverse int with regard to sign and value
// // function reverseInt(n){
	
// //   const reversed = n.toString().split("").reverse().join("");
// //   return Math.sign(n) * parseInt(reversed);
// // }
// // reverseInt(-120);//-21

// // //charMax
// // const string = "This isn't what you thought your mother wanted you to do.";
// // const chars = {};
// // // for(let char of string){
// // //   if(!chars[char]){
// // //     chars[char] =1;
// // //   } else {
// // //     chars[char]++
// // //   }
// // // }

// // //maxChar finding the largest valued char in object
// // function maxChar(str){
// // const chars = {};
// // for(let char of str){
// //   chars[char] = chars[char] +1 || 1;
// // }

// // return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b);
// // }
// // maxChar("abbbaaaacccbbbb");

// // //maxChar using for/in 
// // function maxChar(str){
// //   const charMap = {};
// //   let max = 0;
// //  let maxChar = "";
// //   for(let char of str){
// //     if(charMap[char]){
// //        charMap[char]++;
// //     }else {
// //        charMap[char] = 1;
// //     }

// //   }
// //   for(let char in charMap){
// //     if(charMap[char] > max){
// //     max = charMap[char];
// //       maxChar = char;
// //     }
// //   }
// //   return maxChar;
// // }
// // maxChar("Listen to thistles at night");
// // //fizzbuzz
// // function fizzBuzz(n){
// // for(let i = 1; i <= n; i++){
	
// //   if(i % 15 === 0){
	
// //   console.log("fizzbuzz");
// //   } else if(i % 5 === 0){
	
// //     console.log("buzz");
// //   } else if(i % 3 === 0){
// //    console.log("fizz");
// //   }else{
// //     console.log(i);
// //   }
// // }

// // }

// // //chunking arrays
// // function chunk(array, size) {


// // return array.map( function(e,i){ 
// //      return i%size===0 ? array.slice(i,i+size) : null; 
// // }).filter(function(e){ return e; });
// // }
// //   chunk([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17],5);
// //   //chunk array without ternary
// //   function chunk(array, size){
// //   const chunked = [];
// //   for(let element of array){
// //     const last = chunked[chunked.length -1];
// //     if(!last || last.length === size){
// //     chunked.push([element]);
// //     }else {
// //       last.push(element);
// //     }
// //   }
// //   return chunked;
// // }

// // chunk([1,2,3,4,5,6,7,8,9,0], 3);
// //chunked with slice
// // function chunk(array, size) {
// //   const chunked = [];
// //   let index = 0;
// //   while(index < array.length){
// //     chunked.push(array.slice(index, index + size));
// //     index += size;
// //   }
// //   return chunked;
// // }
// // function myFunction(){
// // document.getElementById("demo").innerHTML = chunk([1,2,3,4,5,6,7,8,7,6,5,4], 3);
// // }
// //anagrams
// // function anagram(stringA, stringB){
// // const R = /[^\w]/g;
// // const str1 = stringA.toLowerCase().replace(R,'').split('').sort().join('').trim();
// // const str2 = stringB.toLowerCase().replace(R,'').split('').sort().join('').trim();

// // if (str1 === str2) {
// //      return true;
// // } else {
// //    return false;
// // }
// // }
// // function myFunction(){
// // document.getElementById("demo").innerHTML = anagram("flowing!", "wolf gin");
// // }
// //anagrams trying to use object mapping
// // function objectify(str){

// //   let object = {};
// //   const restr = str.toLowerCase().replace(/[^\w]/g, "").trim();
// //   for(let el of restr){
// //     if(object[el]){
// //       object[el]++
// //     } else {
// //       object[el] = 1;
// //     }

// //   } 
// // return object;
// // }

// // objectify("This can make up an object with key value pairs.");
// //anagram using helper function
// // function anagrams(stringA, stringB) {
// //   return cleanString(stringA)===cleanString(stringB);
// // }

// // function cleanString(str){
// //   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
// // }
// // anagrams("Nicest", "incest?");
// // if seperate strings are palindrome
// // function isPalindrome(strA, strB){
// // 	return cleanStr(strA) === cleanStr(strB).split("").reverse().join("");
// // }

// // function cleanStr(str){
// // 	const re = /[^\w]/g;
// // 	return str.toLowerCase().replace(re, "");
// // }

// // function myFunction(){
// // 	document.getElementById("demo").innerHTML = isPalindrome("8God flow 4!", "4 wolf-dog? 8");
// // }
// // const str = "this is where the dog sings";
// // const firstLetter = 
// // str.split(" ")[0].split("")[0].toUpperCase().;
// // function myFunction(){
// // document.getElementById("demo").innerHTML = capitalize("the long dog shadow flew");
// // }

// // const str = "this is where the dog sings";
// // const words = str.split(" ");
// // const word = words[0].split("");


// // const capLetter = word[0].toUpperCase();



// // const str = "this is where the dog sings";
// // const bucket = [];
// // const arrayOfWords = str.split(" ");

// // for (let word of arrayOfWords){
// // 	word+=1;
// // }
// // const letters = arrayOfWords[word].split("")[0].toUpperCasse().join("");



// // function capitalize(str){
// // for(let i = 0; i < arrWords.length; i++){
// // 	i += 1;
// // }
// // const arrWords = str.split(" ");
// //   const word = arrWords[i];
// //   const oldLet = word[0];
// //   const cap = word[0].toUpperCase();
// //    return word.replace(oldLet, cap).join();

// // }
// //  capitalize("the sore neck of the library screams");

// // const letter = word[0];
// // const capLetter = word[0].toUpperCase();
// // bucket.push(replace(capLetter, letter));
// // function capitalize(str){
// // 	const words = [];

// // 	for(let word of str.split(" ")){
// // 		words.push(word[0].toUpperCase() + word.slice(1));
// // 	}
// // 	return words.join(" ");
// // }

// // function myFunction(){
// // 	document.getElementById("demo").innerHTML = capitalize("look, the small crab of the Lordly crabtree!");
// // }
// // //maxChar
// // function maxChar(str){
// // const chars = {};
// // const re = /[^\w]/g;
// // for(let char of str.replace(re, "").toLowerCase()){
// //   chars[char] = chars[char] +1 || 1;
// // }

// // return Object.keys(chars).reduce((a, b) => chars[a] > chars[b] ? a : b);
// // }
// // maxChar("Nothing was as wonderful as her...her smile. And email.");
// // //objectify
// // function objectify(str){
// // 	const chars = {};
// // 	for(let char of str){
// // 		if(chars[char]){
// // 			chars[char]++;
// // 		}else{
// // 			chars[char] = 1;
// // 		}

// // 	}
// // 	return chars;
// // }
// // objectify("Any string will do, for now.");
// //mostFrequentWords
// // function mostFrequentWords (string){
	
// // 	const words = {};
// // 	for(let word of string.split(" ")){
// // 		words[word] = words[word] + 1 || 1;
// // 	}
// // 	 return Object.keys(words).reduce((a, b)=> words[a] > words[b] ? a:b);

// // }
// // listing the words and frequency
// // function mostFrequentWords (string){
	
// // 	const words = {};
// // 	for(let word of string.split(" ")){
// // 		words[word] = words[word] + 1 || 1;
// // 	}
// // 	 return Object.keys(words).reduce((a, b)=> words[a] > words[b] ? a:b);
// // }

// //  	mostFrequentWords("For hours and for weeks he watched Tarantino films, making notes on the mechanics of tention, of dialogue and its silences, and, above all, how a moment expertly milked subtext.");

// //translating a string into an array of words

// // function chunk(array, size){
// // 	array = array.split(" ");

// // 	const chunked = [];
// // 	let index = 0;
// // 	while(index < array.length){
// // 		chunked.push(array.slice(index, index + size));
// // 		index += size;
// // 	}
// // 	return chunked;
// // }
// // chunk("For hours and for weeks he watched Tarantino films, making notes on the mechanics", 3);
// //steps
// // function steps(n){
// // 	for(let row = 0; row < n; row++){
// //   	let stair = "";
// //     for(let column = 0; column < n; column++){
// //     	if(column <= row){
// //       	stair += "#";
// //       } else {
// //       	stair += " ";
// //       }
// //     }
// //     console.log(stair);
// //   }
// // }
// // steps(5)

// //recursive steps printout

// // function steps(n, row=0, stair=""){
// // 	if(n === row){
// // 		return;
// // 	}
// // 	if(n === stair.length){
// // 		console.log(stair);
// // 		return steps(n, row + 1);
// // 	}
// // 	if(stair.length <= row){
// // 		stair += "#";
// // 	} else{
// // 		stair += " ";
// // 	}
// // 	steps(n, row, stair);
// // }

//  // steps(5);
// // // frequency
// // function frequency(str){

// //   str = str.toLowerCase();
// //   const words = {};
// //   for(let word of str.split(" ")){
// //   	words[word] = words[word] + 1 || 1;
// //   }
// //   return words;
// // }
// // frequency("This was what we was called for and was");
// // iterative pyramid
// // function pyramid(n) {
// // 	const midpt = Math.floor((2 * n -1)/2);
// //   for(let row = 0; row < n; row++){
// //   	let stair = "";
// //     for(let column = 0; column < 2 * n -1; column++){
// //     	if(midpt - row <= column && midpt + row >= column){
// //       	stair += "#";
// //       } else{
// //       	stair += " ";
// //       }
// //     }
// //     console.log(stair);
// //   }
// // }
// // pyramid(5);

// //palindrome with self fashioned reverse method
// // function palindrome(str){
// // 	const re = /[^\w]/g;
// //   str = str.replace(re, "").toLowerCase();
// //   const revStr = mirror(str);
// //   return str === revStr;
// // }

// // function mirror(item){
// // 	let mirrored = "";
// //   for(let it of item){
// //   	mirrored = it + mirrored;
// //   }
// //   return mirrored;
// // }

// // palindrome("ey eye");

// //vowel count
// // function vowels(str) {
// // 	const vowel = /[aeiou]/gi;
// // 	str = str.replace(vowel, "");
// // 	return str.length;
// // }
// // function vowels(str) {

// // 	let count = 0;
// //  const checker = ["a", "e", "i", "o", "u"];

// //  for(let char of str.toLowerCase()){
// //  	if(checker.includes(char)){
// //   	count++;
// //   }
// //  }
// //   return count;
// // }
// // function vowels(str){
// // 	const matches = str.match(/[aeiou]/gi);
// // 	return matches ? matches.length : 0;
// // }
// // vowels("This was the test you asked for.");
// //spiral matrix


// // function matrix(n) {
// //   const results = [];

// //   for (let i = 0; i < n; i++) {
// //     results.push([]);
// //   }

// //   let counter = 1;
// //   let startColumn = 0;
// //   let endColumn = n - 1;
// //   let startRow = 0;
// //   let endRow = n - 1;
// //   while (startColumn <= endColumn && startRow <= endRow) {
// //     // Top row
// //     for (let i = startColumn; i <= endColumn; i++) {
// //       results[startRow][i] = counter;
// //       counter++;
// //     }
// //     startRow++;

// //     // Right column
// //     for (let i = startRow; i <= endRow; i++) {
// //       results[i][endColumn] = counter;
// //       counter++;
// //     }
// //     endColumn--;

// //     // Bottom row
// //     for (let i = endColumn; i >= startColumn; i--) {
// //       results[endRow][i] = counter;
// //       counter++;
// //     }
// //     endRow--;

// //     // start column
// //     for (let i = endRow; i >= startRow; i--) {
// //       results[i][startColumn] = counter;
// //       counter++;
// //     }
// //     startColumn++;
// //   }

// //   return results;
// // }
// // document.getElementById("demo").innerHTML = matrix(3);
// //hash table fib sequence
// // function fib(n) {
// // 	if(n < 2){
// // 		return n;
// // 	}
// // 	return fib(n-1) + fib(n-2);
// // }
// // function myFunction(){
// // document.getElementById("demo").innerHTML = fib(6);
// // }
// // function fib(n){
// // 	const array = [0, 1];
// // 	for(let i = 2; i <= n; i++){
// // 		const a = array[i -1];
// // 		const b = array[i -2];
// // 		array.push(a + b);
// // 	}
// // 	return array[n];
// // }

// // function memoize(fn){
// // 	const cache = {};
// //   return function(...args){
// //   if(cache[args]){
// //   	return cache[args];
// //   }
// //     const results = fn.apply(this, args);
// //     cache[args] = results;
// //     return results;
// //   };
// // }

// // function slowFib(n){
// // 	if(n < 2){
// //   	return n;
// //   }
// //   return fib(n - 1) + fib(n -2);
// // }
// // const fib = memoize(slowFib);
// // function myFunction(){
// // 	document.getElementById("demo").innerHTML = "Here is the nth number of the fib sequence: " + fib(13);
// // }


// // class Queue {

// // 	constructor() {
// // 		this.data = [];
// // 	}
// // 	add(record) {
// // 		this.data.unshift(record);
// // 	}
// // 	remove() {
// // 		this.data.pop(record);
// // 	}

// // 	peek() {
// // 		return this.data[this.data.length -1];
// // 	}
// // }
// //two stacks to make a queue
// // const Stack = require('./stack');

// // class Queue {
// // 	constructor(){
// // 		this.first = new Stack();
// // 		this.second = new Stack();
// // 	}

// // 	add(record){
// // 		this.first.push(record);
// // 	}

// // 	remove(){
// // 		while(this.first.peek()){
// // 			this.second.push(this.first.pop());
// // 		}

// // 		const record = this.second.pop();

// // 		while(this.second.peek()){
// // 			this.first.push(this.second.pop());
// // 		}
// // 		return record;
// // 	}
// // 	peek(){
// // 		while(this.first.peek()){
// // 			this.second.push(this.first.pop());
// // 		}
// // 		const record = this.second.peek();

// // 		while(this.second.peek()){
// // 			this.first.push(this.second.pop());
// // 		}
// // 		return record;
// // 	}
// // }

// //objects and class
// // const harryUser = {
// // 	stacks: "LAMP, MERN",
// // 	languages: "PHP, JS, mySQL, HTML5, CSS3",
// //   additions: "Laravel, NodeJS, WP, ReactJS, Git",
// //   income: 134000,
// //   age: 52,
// //   education: "MFA, BFA",
// // 	harryMethod: function(){
// //   	return this.languages + " and with degrees of " + this.education + ". His additional relevant skills are " + this.additions;
// //   }
// // }




// // function User(stacks, lang, extra, income, age, ed){
// //   this.stacks = stacks;
// // this.languages = lang;
// //   this.additions = extra;
// //   this.income = income;
// //   this.age = age;
// //   this.education = ed;


// // }

// // User.prototype.userMethod=
// //   	 function(){
// //   return "This " + this.stacks + " engineer has this for education: "+this.education + ", and knows these tech languages: "+ this.languages;
// //   }

// // const harry = new User("LAMP, MERN","PHP, JS, mySQL, HTML5, CSS3","Laravel, NodeJS, WP, ReactJS, Git",134000,
// //            52, "MFA, BFA"); 
// // const horace = new User("MEAN", "French, Python, HTML5", "WP, Git", 44000, 27, "BS");
// // horace.additions

// // const comp = harry.userMethod() +" vs "+horace.userMethod();
// // comp

// // //

// // function saysHello(user){
// // 	return "Hello, "+ user +"!";
// // }

// // function saysBye(user){
// // 	return "Bye, "+ user+"!";
// // }

// // function greet(user, callback){
// // 	return callback(user);
// // }

// // greet("Jimmy", saysBye);//Bye, Jimmy!
// // greet("Sally", saysHello);//Hello, Sally!

// // //equivalent of callback for arrays
// // const cars = ["Lexus","Toyota","Audi"];

// // function yourCar(car){
// // 	 console.log(car + " is presently the best car for you.");
// // }
// // //for(let i = 0; i < cars.length; i++){
// //  // yourCar(cars[i]);

// // //}
// // cars.forEach(yourCar);

// // //map as callback for array, but it creates a new array
// // const cars = ["Lexus","Toyota","Audi"];

// // function yourCar(car){
// // 	return car + " is presently the best car for you.";
// // }
// // //let newArr = [];
// // //for(let i = 0; i < cars.length; i++){
// //   //newArr.push(yourCar(cars[i]));

// // //}

// // const newArr = cars.map(yourCar);
// // console.log(newArr);

// // //sum in function
// // const nums = [1,2,4,5,7,8];
// // function sumFunc(currentSum, number){
// //   return currentSum + number;
// // }
// // 	let sum = 0;
// //   for(let i = 0; i < nums.length; i++){
// //   	sum = sumFunc(sum, nums[i]);
// //   }


// // console.log(sum)

// function Position(name, job, stack, lang){
// 	this.name = name,
// 	this.job = job,
// 	this.stack = stack,
// 	this.codelanguage = lang
// }

// Position.prototype.userMethod = function(name, job, stack, lang){
// 	return "I am " + this.name + " , a "+this.job+
// 	". My stack composition is "+this.stack+
// 	", and my two primary programming languages are "+this.codelanguage+".";
// }
// const fullstack = new Position("Harry", "Full Stack Web Developer", "WAMP and MERN", "PHP and JavaScript");
// const frontend = new Position("Josh", "Front End Web Developer", "MEAN", "JavaScript");

// function coderSpeaks(wage){
// 	if(wage <= 49999){
// 		Position.job = "Front End Web Developer";
// 	} else {
// 		Position.job = "Full Stack Web Developer";
// 	}
// 	if(Position.job === "Full Stack Web Developer"){
// 		return fullstack.userMethod();
// 	}
// 	return frontend.userMethod();
// }

// function myFunction(){
// 	document.getElementById("demo").innerHTML = coderSpeaks(56000);
// }


// //writer class
// function Writer(name, voice, plot, theme){
// 	this.name = name;
// 	this.voice = voice;
// 	this.plot = plot;
// 	this.theme = theme;
// }


// Writer.prototype.report= function(name, voice, plot, theme){
// 	return "I'm "+this.name+", a writer. My plot moves by means of "+this.plot+", while the meaning and feeling is most controlled by the idea of "+this.theme+".";
// }

// const jules = new Writer("Jules Konrad", "singing sadness", "bear at the door", "hiding value kills you");

// jules.report();

// //class Car
// function Car(cost, safety, model){

// 	this.cost = cost;
//   this.safety = safety;
//   this.model = model;
// }

// Car.prototype.carMethod = function(cost){
// 	if(this.cost <= 5000){
//   	return "For " +this.cost+" and a handjob, I'll buy this "+this.model+".";
//   } else if (this.cost <=20000){
//   return "Give me a break! This "+this.model+ " for "+this.cost+" is too much, especially with a mere "+this.safety+". You've got to come down on the price.";
//   }
//   return "For this price of "+this.cost+" I'll buy a house, not a stinking "+this.model+"! I'll change my mind if you can improve on the  " +this.safety+".";
// }


// const audi = new Car(14000, "moderate safety", "A5");

// const camry = new Car(103000, "poor safety", "Camry");
// camry.carMethod();

// //create function and reduce method inside that to add up numbers in array
// function addUp(nums){

// function sumFunc(current, number){
// return current + number;
// }
// const sum = nums.reduce(sumFunc);
//   return sum
// }
// addUp([1,2,3,4,5, 11]);


// //another stringed together pair of algos
// function fib(n){
// const result = [0, 1];
//   for(let i =2; i <n; i++){
//  	const a = result[i-1];
//    const b = result[i-2];
//     result.push(a + b)
//   }
//   return result;
// }


// function sumUp(arr){
// let sum = 0;
//   for(let i =0; i < arr.length; i++){
//   	sum = sum + arr[i];
//   }
//   return sum;
// }

// const arr = fib(7);
// sumUp(arr);
// //sum talk
// function sumUp(arr){
// let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//   	sum = sum + arr[i];
//   }
//   return sum;
// }

// function fib(n){
// const result = [0, 1];
// for(let j = 2; j < n; j++){
//   	const a = result[j - 1];
//   	const b = result[j - 2];
//   	result.push(a + b);
// }
//   return result;
// }
// const arr = fib(7)

// arr+ " sums to "+sumUp(arr);
// //reduce array to sentence
// const words = ['This', 'is', 'a', 'way', 'to', 'build', 'meaning'];

// const sentence = words.reduce(function(accumulator, word){
// return accumulator + ' ' + word;
// });
// sentence
// //callback in sell buy algo
// function buyStock(user){
// 	return user + ", buy this book now!";
// }

// function sellStock(user){
//   return "Okay, "+user+", time to sell this stock!";
// }

// function response(user, cb){
// return cb(user);
// }

// response("Rory", sellStock);
// //car algo using map method
// function myCars(cars){

// function carAssertion(car){
// return car + " is my car.";
// }
//  return cars.map(carAssertion);
 
// }
// myCars(["Camry LE","Audi A5", "Porche 911" ]);
// //use inline map with anonymous function
// function myCar(cars){
// const loftyeyes = cars.map(function(car){return car + " is my car."});
// return loftyeyes
// }
// myCar(["Camry LE","Audi A5", "Porche 911" ]);
// //median
// function median(values) {

//     values.sort( function(a,b) {return a - b;} );

//     const half = Math.floor(values.length/2);

//     if(values.length % 2)
//         return values[half];
//     else
//         return (values[half-1] + values[half]) / 2.0;
// }

// const list1 = [3, 8, 9, 1, 5];
// const list2 = [3, 8, 9, 4, 12, 16, 22];
// median(list1.concat(list2));
// //medians tested and checked
// function median(values){
// 	values.sort(function(a,b){return a - b;});
  
//   const half = Math.floor(values.length/2);
//   if(values.length % 2){
//   	return values[half];
//   } else {
//   	return (values[half-1] + values[half])/2;
//   }
// }
// const list1 = [1,23,33,2,55,34];
// median(list1)
// list1.sort(function(a,b){return a - b;});
// const list2 = [1,88,24];
// list2.sort(function(a,b){return a-b;});
// median(list2)

// //check concat
// const biglist = list1.concat(list2)
// //check order of biglist
// biglist.sort(function(a,b){return a-b;});


// //fib median
// function fib(n){
// 	const result = [0, 1];
//   for(let i = 2; i < n; i++){
//   	let a = result[i-1];
//     let b = result[i -2];
//     result.push(a + b);
//   }
//   return result;
// }


// function median(values){
// 	values.sort(function(a,b){return a - b});
  
//   const half = Math.floor(values.length/2);
//   if(values.length % 2){
//   	return values[half];
//   } else {
//   	return (values[half-1] + values[half])/2;
//   }
// }
// const list1 = fib(7);
// list1;
// median(list1);
// //median using two arguments
// function median(arr1, arr2){
// const values = arr1.concat(arr2);
//  values.sort(function(a,b){return a - b;});
//   const half = Math.floor(values.length/2);
//   if(values.length%2){
//   	return values[half];
//   } else {
//   	return (values[half -1] + values[half])/2;
//   }
 
// }
// median([1,3,5],[8,4,6,12]);
// //median algo that can return two medians
// function median(arr1, ...args){
// const values = arr1.concat(...args);
//  values.sort(function(a,b){return a - b;});
//   const half = Math.floor(values.length/2);
//   if(values.length%2){
//   	return values[half];
//   } else {
//   	const first = values[half -1]; 
//     const second = values[half];
//     return first +", "+ second;
//   }
 
// }
// median([1,3,5],[8, 6,12]);

// //missing numbers from any number of arrays, lists
// function missingNum(arr1, ...args){
//   const bigArray = arr1.concat(...args);
//   bigArray.sort(function(a,b){return a - b;});
// let cache= [];

//     for(let i = 1; i < bigArray.length; i++) 
//     {     
//         if(bigArray[i] - bigArray[i-1] != 1) 
//         {         
//             let x = bigArray[i] - bigArray[i-1];
//             let j = 1;
//             while (j<x)
//             {
//                 cache.push(bigArray[i-1]+j);
//                 j++;
//             }
//         }
//     }
//   return cache;
// }
//  missingNum([1,3,6],[2,4],[7, 9]);//[5,8]
// //comparison for what is missing
// function missingNum(arr1, ...args){
//   const bigArray = arr1.concat(...args);
//   bigArray.sort(function(a,b){return a - b;});
// let bucket= [];

//     for(let i = 1; i < bigArray.length; i++) 
//     {     
//         if(bigArray[i] - bigArray[i-1] != 1) 
//         {         
//             let x = bigArray[i] - bigArray[i-1];
//             let j = 1;
//             while (j<x)
//             {
//                 bucket.push(bigArray[i-1]+j);
//                 j++;
//             }
//         }
//     }
//   return bucket;



// //removing differences
// function getArrayDiff(a, b) {
//     var ret = [];
//     if (!(Array.isArray(a) && Array.isArray(b))) {
//         return ret;
//     }
//     var i;
//     var key;

//     for (i = a.length - 1; i >= 0; i--) {
//       key = a[i];
//       if (-1 === b.indexOf(key)) {
//         ret.push(key);
//       }
//     }

//     return ret;
// }
// function myFunction(){
// 	document.getElementById("demo").innerHTML = missingNum([1,4],[2,7]);
// }



// //combinations algo
// function rps(rounds){
// let results = [];
// const poss = ["r", "p", "s"];
// function play(playedSoFar, rounds){
// 	if(rounds === 0){
//   	results.push(playedSoFar);
//     return;
//   }
//   for(let i =0; i <poss.length; i++){
//   	play(playedSoFar + poss[i], rounds-1)
//   }
// }
//   play('', rounds);
//   return results;
// }
// rps(3)



// //

//dynamic programming knapsack problem
// function knapsack(items, capacity){
//   // This implementation uses dynamic programming.
//   // Variable 'memo' is a grid(2-dimentional array) to store optimal solution for sub-problems,
//   // which will be later used as the code execution goes on.
//   // This is called memoization in programming.
//   // The cell will store best solution objects for different capacities and selectable items.
//   let memo = [];

//   // Filling the sub-problem solutions grid.
//   for (let i = 0; i < items.length; i++) {
//     // Variable 'cap' is the capacity for sub-problems. In this example, 'cap' ranges from 1 to 6.
//     let row = [];
//     for (let cap = 1; cap <= capacity; cap++) {
//       row.push(getAnswer(i,cap));
//     }
//     memo.push(row);
//   }

//   // The right-bottom-corner cell of the grid contains the final solution for the whole problem.
//   return(getPrev());

//   function getPrev(){
//    const prevRow = memo[memo.length - 1];
//     return prevRow[prevRow.length - 1];
//   }

//   function getAnswer(row,cap){
//     const NO_ANSWER = {maxValue:0, subset:[]};
//     // the column number starts from zero.
//     const col = cap - 1;
//     const prevItem = items[row];
//     // The remaining capacity for the sub-problem to solve.
//     const remaining = cap - prevItem.w;

//     // Refer to the last solution for this capacity,
//     // which is in the cell of the previous row with the same column
//     const prevAnswer = row > 0 ? memo[row - 1][col] || NO_ANSWER : NO_ANSWER;
//     // Refer to the last solution for the remaining capacity,
//     // which is in the cell of the previous row with the corresponding column
//     const prevSubAnswer = row > 0 ? memo[row - 1][remaining - 1] || NO_ANSWER : NO_ANSWER;

//     // If any one of the items weights greater than the 'cap', return the last solution
//     if(remaining < 0){
//       return prevAnswer;
//     }

//     // Compare the current best solution for the sub-problem with a specific capacity
//     // to a new solution trial with the lastItem(new item) added
//     const prevValue = prevAnswer.maxValue;
//    const prevSubValue = prevSubAnswer.maxValue;

//     const newValue = prevSubValue + prevItem.v;
//     if(newValue >= prevValue){
//       // copy the subset of the last sub-problem solution
//       const _prevSubSet = prevSubAnswer.subset.slice();
//       _prevSubSet.push(prevItem);
//       return {maxValue: newValue, subset:_prevSubSet};
//     }else{
//       return prevAnswer;
//     }
//   }
// }

// // test
// const items = [
//   {w: 2, v: 5},
//   {w: 3, v: 15},
//   {w: 5, v: 10}
// ];

// const capacity = 9;
// const displayer = knapsack(items, capacity);

// /* result 
// { maxValue: 1458,+
//   subset: 
//    [ { w: 70, v: 135 },
//      { w: 77, v: 149 },
//      { w: 82, v: 156 },
//      { w: 90, v: 173 },
//      { w: 94, v: 184 },
//      { w: 98, v: 192 },
//      { w: 118, v: 229 },
//      { w: 120, v: 240 } ] }
// */
// //  @alexbelyeu
// // alexbelyeu commented Feb 19, 2018 • 
// // Just adding the sub-problem solutions grid (or memo in this example) here for the sake of completion, with the values and capacity from the first example:

// //                Capacity
// // v  / w  -   1  2  3  4  5  6 
// // -------------------------------
// // 3  / 1  -   3  3  3  3  3  3 
// // 6  / 1  -   6  9  9  9  9  9
// // 5  / 2  -   6  9  11 14 14 14
// // 9  / 2  -   6  9  15 18 20 23
// // 10 / 3  -   6  9  15 18 20 25

// function myFunction(){
// // document.getElementById("demo").innerHTML= JSON.stringify("max value: "+displayer.maxValue+"which objects to grab: "+displayer.subset);
// document.getElementById("demo").innerHTML = JSON.stringify("max value: " +displayer.maxValue)+ "</br>"+"  objects to grab:  "+ JSON.stringify(displayer.subset);
// }
//COONCERT int to ROMAN
function convertToRoman(num){

	//make roman object
	const romanToArabic = {
		M: 1000,
		CM: 900,
		D: 500,
		CD:400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	let roman = "";//roman cache
	debugger//check in chrome dev
	for(let key in romanToArabic){
		romanToArabic[key];
		while(num >= romanToArabic[key]){
			roman += key;
			num -= romanToArabic[key];
			
		}
	}
	return roman;
}
const romulan = convertToRoman(12);
function myFunction(){
document.getElementById("demo").innerHTML = romulan;
}		


// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="utf-8">
//     <title>Clicker</title>
//     <meta name="description" content="">
//     <style></style>
// </head>
// <body>
//     <button>Click!</button>

// <script>
//     const counter = {
//         cnt: 0,
//         inc: function() {
//             cnt++;
//             console.log(cnt);
//         }
//     };
//     const button = document.getElementsByTagName('button')[0];
//     button.addEventListener('click', counter.inc(), false);
// </script>
// </body>
// </html>

// function chunk(array, size) {
//    const chunked = [];
//   let index = 0;
//    while(index < array.length){
//     chunked.push(array.slice(index, index + size)+"<br>");
//     index += size;
//    }
//    return chunked;
//  }
// document.getElementById("demo").innerHTML = chunk([1,4,7,9,3,6,8], 3)
// the algo
const chunking = {
chunk: (array, size)=> {
   const chunked = [];
  let index = 0;
   while(index < array.length){
    chunked.push(array.slice(index, index + size));
    index += size;
   }
   return chunked;
 }
}
module.exports = chunking;

//the test
const chunking = require('./chunking');


test('Check if chunking exists', ()=>{
	expect(chunking).toBeDefined();
});

test('Divide array into seperate arrays three sepeate arrays of lengths 3, 3, and 1', ()=> {
	expect(chunking.chunk([1,2,3,4,5,6,7], 3)).toEqual([[1,2,3],[4,5,6],[7]]);
} );