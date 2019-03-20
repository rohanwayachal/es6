## What is difference between es5,es6 and javascript?
- ecmascript is standard specification
- javascript is implementation



## what is babel?
- A transpiler to convert es6 code to es5 compatible code because not all browser will support es6
- This will act like polyfill(add funtionality) to the old browser that doesnt support es6

## What are array helper methods?

| Name of Arrayhelper  | What it return | Description		         	   |
| -------------------- | -------------- | -------------------------------------    |
| foreach	       | null           | similar as for loop                      |
| map                  | new array      |  to manupulated each item in an array    |
| filter               | null           |  mulate array based on boolean condition |
| every                | boolean        |  check if all item meets a condition     |
| find                 | return null or only 1st item      |  based on booblean condition   |
| some                | boolean        |  check if atleast one item meets a condition     |
| reduce                | updated item        |  takes prev state & update to returns new state as per logic     |


## what is const and let?
- const is like final keyword i.e cannot be changed
- let is scoped variable

## what is template string?
- template string format can allow us to interpolate string and variable in easy,powerful and readable format
- use ` instead of "
- use ${variable} to interpolate variable in string

```
const year=2016

- In es5
"this is year "+year

- In es6
`this is year ${year}`
`this is year ${new Date().getYear()}`
```



## What is fat arrow function? implicit return?

- with implicit return
```()=> "will return this string"```

- without implicit return you have to specifically rturn
```()=>{ return "will return this string"}```


## What you mean by **this**  is lexically scoped in arrow function?
- this is preserved

## What is enhances object literal?
-Shortening of key value name if they have same name 
- in es5
```
funtion myObj(name){
	return {
		name:name,
		saymyname:funtion(){	
			console.log("my name is "+this.name)
	   }
	}
}
```

- in ES6
```
funtion myObj(name){
	return {
		name,
		saymyname(){	
			console.log("my name is "+this.name)
	   }
	}
}
```

## What is deafult argument?
- value of argument is defaulted if no value is passed during funtion call
```
function saymyname(name="Rohan"){
	console.log(name)
}

saymyname()
saymyname("sumeet")
```

## what is Rest and Spead operator

- Rest is to wrap into array, Spread is to unwrap 

- Rest
```
function mynumbers(...numbers)
{
	console.log(numbers)   //will be array[1,2,3,4]

}

mynumbers(1,2,3,4)
```
- Spread 
```
let car=["dodge","civic"]
let bike=["harley","ducati"]

let vehicle=["boieng",...car,...bike]   //  ["dodge","civic","harley","ducati"]
```

## What is destructuring

-Object destructuring 
```
var Person={
	name:"rohan"
	phone:1234567890
}
```
- In es5
```
var name=Person.name
var phone=Person.phone
```

- In es6(pulling property from obj and assign with same veriable name)

```
const {name}=Person
let {phone}=Person
OR
let {name,phone}=Person
```
- Destructuring arrray(pull out elements from array into variable/list)


```
colors=['white','black',red','blue','green']
```

- In es5
```
firctcolor=colors[0]
second=colors[1]
```
- In es6
```
const [firctcolor]=colors
const [firctcolor]=colors
const [firctcolor,second, ...remaining]=colors
```

## classes for prototypal inheritence

- Class in es6 

```
class Car{
	constructor(color){
		this.color=color
	}
	
	drive(){
		console.log("it can drive")
	
	}

}
let myredcar=new Car("red")
mycar.drive()
```
- same as below in es5

```
function Car(color)
{
	this.color=color
}

Car.prototype.drive=function(){
	console.log("it can drive")
}

var myredcar=new Car("red")
mycar.drive()
```

-Inheritence in es6 

```
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
```

## of keyword

```
persons=['rohan','sumeet','john','doe']


for (let name of persons){
	console.log(name)

}
```

## What are Generators

- To make object iterable

```
const myob={
	one:'foo',
	two:'bar',
	three:'foo again',

}


function* bar(myob) {
    yield myob.one
    yield myob.two
    yield myob.three
}

const b = bar(myob);

b.next() // { value: 'bar', done: false }
b.next() // { value: 'foo', done: false }
b.next() // { value: 'bar again', done: false }
b.next() // { value: undefined, done: true }

OR

for (let ret of b())
{
   console.log(ret.value)
}

```
_____________________________________________________


## Promises
- To Handle asynchronous tasks

```
let promise=new Promise((resolve,reject)=>{

	//execute some code 
	
	if(some condition true)
	{
		resolve(value)
	}
	else
	{
		reject(err)
	}

})

promise
	.then((value)=>{})
	.catch((err)=>{})

```


















