


 function truthCheck(collection, pre){
 	
var keysArray = Object.keys(collection.forEach(object => object));
if(keysArray.every(pre)){
	return true;
}
	return false;
}
 function myFunction(){
	document.getElementById("demo").innerHTML = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}]);
}