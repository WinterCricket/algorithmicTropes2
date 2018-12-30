


function smallestCommons(arr){
	 arr.sort();
	var array = [];
	for(var i = arr[0]; i <= arr[arr.length -1]; i++){
		array.push(i);
	}
	return array;
}
function myFunction() {
document.getElementById("demo").innerHTML = smallestCommons([8, 3]);
}