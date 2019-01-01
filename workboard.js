


// function smallestCommons(arr){
// 	return takeOut(arr.sort());
// }
// function takeOut(arr) {
// 	  var max = Math.max(arr[0],arr[1]);
//   var min = Math.min(arr[0],arr[1]);
  
//   return leastCommonMultiple(min, max);
// }



// function leastCommonMultiple(min, max) {
	
//     function range(min, max) {
//         var array = [];
//         for (var i = min; i <= max; i++) {
//             array.push(i);
//         }
//         return array;
//     }

//     function gcd(a, b) {
//         return !b ? a : gcd(b, a % b);
//     }

//     function lcm(a, b) {
//         return (a * b) / gcd(a, b);   
//     }

//     var multiple = min;
//     range(min, max).forEach(function(n) {
//         multiple = lcm(multiple, n);
//     });

//     return multiple;
// }

// function dropElements(arr, func){
	
	
//  arr.forEach(n => {
//   return n; });

// }
// function myFunction() {

// document.getElementById("demo").innerHTML = dropElements([1, 2, 3, 4], function(n) {return n < 3; });
// }
function stay(arr){
	var sum = 0;
for(var i = 0; i < arr.length; i++){
	sum += arr[i];
}
return sum;
}
function myFunction() {
	document.getElementById("demo").innerHTML = stay([1, 2, 3]);
}