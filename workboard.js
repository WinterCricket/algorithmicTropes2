


// function truthCheck(collection, pre){
// var keysArray = collection.forEach(object => Object.entries(object));
// if(keysArray.every(pre)){
// 	return true;
// }
// 	return false;
// }

//  function myFunction(){
// 	document.getElementById("demo").innerHTML = truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
// }
function checkObj (){
var collection = [
{"user": "Tinky-Winky", "sex": "male"}, 
{"user": "Dipsy", "sex": "male"}, 
{"user": "Laa-Laa", "sex": "female"}, 
{"user": "Po", "sex": "female"}

]
var filteredCollection = [];
for(var i = 0; i < collection.length; i++){
	if(collection[i].sex){
  	filteredCollection.push(collection[i]);

  }
  var filLen = filteredCollection.length;
  var colLen = collection.length;
}
return filLen === colLen;
}
document.getElementById("demo").innerHTML = checkObj();