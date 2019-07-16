class Person{
	constructor({name, age} = {'', 0}){
		this.name = name
		this.age = age
	}

	showName(){
		console.log(this.name)
	}
}