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

console.log(b.next())
console.log(b.next())
console.log(b.next())
console.log(b.next())



for  (let it of bar(myob))
{
	console.log(it)
	
}




