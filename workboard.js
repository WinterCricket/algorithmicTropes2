


function sortArr(arr){
	return takeOut(arr.sort());
}
function takeOut(arr) {
	var min = arr[0];
  var max = arr[1];
  var outOut = min + ", " +max;
  return outOut;
}
sortArr([5, 1]);


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
// function myFunction(){
// document.getElementById("demo").innerHTML= leastCommonMultiple(loHi);
// }
}


function myFunction() {
document.getElementById("demo").innerHTML = loHi;
}

