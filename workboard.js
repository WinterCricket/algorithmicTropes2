// function sumOddFib(num) {

// 	var list = fibsUpToSum(num);
	
// 	return list.filter(function(number){return number % 2 === 1;}).reduce(function(a, b){return a +b; });
// };


// function fibsUpToSum(num) {

// 	if(num === 1) return [1,1];
// 	var list = [1,1];
// 	while(true) {
// 		var next = list[list.length -1] + list[list.length -2];
// 		if(next <= num  ) {

// 			list.push(next);
// 		} else {
// 			return list;
// 		}





// 	}
// }
// document.getElementById("demo").innerHTML=sumOddFib(365);

// var list = [1,2,3,4];

// function sumArr(arr) {
// 	return arr.reduce(function(a, b){
// 		return a + b;
// 	});
// }
// document.getElementById("demo").innerHTML = sumArr(list);

// var numbers = [65, 44, 12, 4];

// var numbers = [1,2,3,5,7,11,13,17,23,29,31,37,41,43,47, 51, 53, 57];


// function getSum(num) {
	
//   return numbers.reduce(function(t, n) {return t + n;});
// }
// function myFunction(it) {
//   document.getElementById("demo").innerHTML = getSum();
// }

// var prices = [1, 2, 125, 2, 19, 14];

// 	prices.sort(function(a, b){
// 	return a - b;
// });

// function myFunction() {
//   document.getElementById("demo").innerHTML = prices;
// }


function fizzBuzz(num){
var text = "";

for (var i = 1; i < num; i++) {
if(i % 2 === 0){ 
	text+= "Fizz"+ "<br>";
    }
if(i % 2 === 1){
  text += "Buzz "+ "<br>";
}
}
return text;
}

function myFunction() {
	document.getElementById("demo").innerHTML = fizzBuzz(12);
}
