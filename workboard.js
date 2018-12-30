


function smallestCommons(arr){
	 arr.sort();
	var array = [];
	for (var i = Math.min(arr[0], arr[1]); i <= Math.max(arr[0], arr[1]); i++)﻿{
		array.push(i);
	}
	return array;
}
function myFunction() {
document.getElementById("demo").innerHTML = smallestCommons([10, 2]);
}