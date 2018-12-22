


function fibsUpTo(num) {

	if(num === 1) return [1,1];
	var list = [1,1];
	while(true) {
		var next = list[list.length -1] + list[list.length -2];
		if(next <= num) {
			list.push(next);
		} else {
			return list.reduce(function(a, b){return a +b });
		}


		
		

	}
}
document.getElementById("demo").innerHTML=fibsUpTo(8);



// document.getElementById("demo").innerHTML = sumList();