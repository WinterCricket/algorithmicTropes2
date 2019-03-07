
class Stack {
	constructor(){
		this.data = [];
	}

	add(record){
		this.data.push(record);
	}

	remove(){
		this.data.pop();
	}

	peek(){
		this.data[this.data.length -1];
	}
}