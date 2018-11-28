1) what is difference between es5,es6 and javascript
ecmascript is standard specification
javascript is implementation



2)what is babel?
transpiler to convert es6 code to es5 compatible code

3)array helper methods?

name, what it return, what it does

foreach, null, similar as for loop
map, new, manupulated array, [best usecase data to frontend li]
filter, null, mulate array based on boolean condition,
find, return null or only 1st item , based on booblean condition
every, boolean,  if all item meets a condition
some, boolean, if one of item meet a condition

reduce, update item, takes prev state & update to returns new state as per logic


4)what is const and let?
const is final
let is scoped variable

5)what is template string?

const year=2016
es5
"this is year "+year

es6
`this is year ${year}`
`this is year ${new Date().getYear()}`


6)what is fat arrow function? implicit return?

with implicit return
()=> "will return this string"

without implicit return
()=>{ return "will return this string"}


7) what you mean by this in arrow function is lexically scoped?
this is preserved

8) What is enhances object literal?

in es5

funtion myObj(name){
	return {
		name:name,
		saymyname:funtion(){	
			console.log("my name is "+this.name)
	   }
	}
}


in ES6

funtion myObj(name){
	return {
		name,
		saymyname(){	
			console.log("my name is "+this.name)
	   }
	}
}


9) what is deafult argument?

function saymyname(name="Rohan"){
	console.log(name)
}

saymyname()
saymyname("sumeet")


10) what is Rest and Spead operator

Rest

function mynumbers(...numbers)
{
	console.log(numbers)   //will be array[1,2,3,4]

}

mynumbers(1,2,3,4)

Spread

let car=["dodge","civic"]
let bike=["harley","ducati"]

let vehicle=["boieng",...car,...bike]   //  ["dodge","civic","harley","ducati"]


Rest is to wrap into array, Spread is to unwrap 

11)What is destructuring


var Person={
	name:"rohan"
	phone:1234567890
}

es5

var name=Person.name
var phone=Person.phone


es6(pulling property from obj and assign with same veriable name)

const {name}=Person
const {phone}=Person
OR
const {name,phone}=Person

destructuring arrray(pull out elements from array into variable/list)

colors=['white','black',red','blue','green']


es5
firctcolor=colors[0]
second=colors[1]


const [firctcolor]=colors
const [firctcolor]=colors
const [firctcolor,second, ...remaining]=colors


12) classes for prototypal inheritence

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

13)of keyword

persons=['rohan','sumeet','john','doe']


for (let name of persons){
	console.log(name)

}

14) Generators

To make object iterable

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


_________________________________________________

b.next() // { value: 'bar', done: false }
b.next() // { value: 'foo', done: false }
b.next() // { value: 'bar again', done: false }
b.next() // { value: undefined, done: true }

OR

for (let ret of b())
{
   console.log(ret.value)
}

_____________________________________________________


15) Promises

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




















