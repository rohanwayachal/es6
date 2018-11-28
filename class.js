class Car{
	constructor(color){
		this.color=color
	}
	
	drive(){
		console.log("it can drive")
	
	}

}


class Honda extends Car{

	constructor(name,color){
	 super(color)
	 this.name=name
	}
	
	horn(){
		console.log("it can beep")
	
	}
} 

const mycar=new Honda('civic','grey')

mycar.drive()
mycar.horn()