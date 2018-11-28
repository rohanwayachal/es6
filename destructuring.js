var Person={
	name:"rohan",
	phone:1234567890
}

//es5

var name=Person.name
var phone=Person.phone


//es6(pulling property from obj and assign with same veriable name)

var {name}=Person
var {phone}=Person
//OR
var {name,phone}=Person


console.log(name+" "+phone)

//destructuring arrray(pull out elements from array into variable/list)

var colors=['white','black','red','blue','green']


//es5
var firstcolor=colors[0]
var secondcolor=colors[1]

//es6
var [firstcolor]=colors
var [firstcolor,secondcolor]=colors
var [firctcolor,second, ...remaining]=colors


console.log(firstcolor+" "+secondcolor+' '+remaining)


