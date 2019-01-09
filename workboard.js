


function truthCheck(collection, pre){
var keysArray = collection.forEach(object => Object.entries(object));
if(keysArray.every(pre)){
	return true;
}
	return false;
}

 function myFunction(){
	document.getElementById("demo").innerHTML = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
}

function reject(array, iteratorFunction) {

    return array.filter(item => !array.filter(iteratorFunction).includes(item));

}

// function myFunction(){
// document.getElementById("demo").innerHTML = reject([1, 3, 6, 7, 11, 12, 13], function(item){return item % 2});
// }



