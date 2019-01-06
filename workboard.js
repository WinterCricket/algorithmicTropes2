


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
var collection = [
{"user": "Tinky-Winky", "sex": "male"}, 
{"user": "Dipsy", "sex": "male"}, 
{"user": "Laa-Laa", "sex": "female"}, 
{"user": "Po", "tex": "female"}

]
var filteredCollection = [];
for(var i = 0; i < collection.length; i++){
	if(collection[i].sex){
  	filteredCollection.push(collection[i]);

  }
  return filteredCollection.length === collection.length;
}

document.getElementById("demo").innerHTML = filteredCollection;