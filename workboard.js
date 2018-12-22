
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Second half of the intermediate algorithms</title>
</head>
<body>
<script>

function fibsUpTo(num) {

	if(num === 1) return [1,1];
	var list = [1,1];
	while(true) {
		var next = list[list.length -1] + list[list.length -2];
		if(next <= num) {
			list.push(next);
		} else {
			return list;
		}
	}
}
console.log(fibsUpTo(4));
</script>
</body>
</html>

