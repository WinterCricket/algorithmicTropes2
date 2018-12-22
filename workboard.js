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

var numbers = [65, 44, 12, 4];

function getSum(total, num) {
  return total + num;
}
function myFunction(item) {
  document.getElementById("demo").innerHTML = numbers.reduce(getSum);
}


