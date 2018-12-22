function sumOddFib(num) {

	var list = fibsUpToSum(num);
	
	return list.filter(function(number){return number % 2 === 1;}).reduce(function(a, b){return a +b });
};


function fibsUpToSum(num) {

	if(num === 1) return [1,1];
	var list = [1,1];
	while(true) {
		var next = list[list.length -1] + list[list.length -2];
		if(next <= num  ) {

			list.push(next);
		} else {
			return list;
		}





	}
}
document.getElementById("demo").innerHTML=sumOddFib(8);



// document.getElementById("demo").innerHTML = sumList();