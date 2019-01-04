
// function steamrollArray(arr) {
//   // I'm a steamroller, baby



//     var ret = [];
//     for(var i = 0; i < arr.length; i++) {
//         if(Array.isArray(arr[i])) {
//             ret = ret.concat(steamrollArray[i]);
//         } else {
//             ret.push(arr[i]);
//         }
//     }
//     return ret;

// };


// function myFunction() {
// 	document.getElementById("demo").innerHTML = steamrollArray([1, [5], [3, [[4]]]]);
// }

function steamrollArray(arr){
	return arr.reduce(function(acc, next){
		if(Array.isArray(next)){
			return steamrollArray(acc.concat(next));
		}else{
			return acc.concat(next);
		}
	}, []);
}


function myFunction(){
document.getElementById("demo").innerHTML = steamrollArray([[[[1, [2], [3, [[4]]]]]]]);
}