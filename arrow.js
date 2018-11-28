const sayhello=(name)=>`Hello ${name}`  //better to always use paranthesis for parameter
//OR
const sayhello2=name=>`Hello ${name}`  //if one parameter only

console.log(sayhello("rohan"))



function saycustomhello(fn)
{
	name="akshay"
	fn();
}

saycustomhello(()=>console.log(`hello ${name}`))