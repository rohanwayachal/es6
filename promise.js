let promise=new Promise((resolve,reject)=>{
	


	let name="rohan"
	console.log("in promise")
	
	if(name=='rohan')
	{
		resolve(name)
	}
	else
	{
		reject("error")
	}

})



	
	promise.then((value)=>{ console.log(value)}).catch((error)=>{ console.log(error)})  //this is asyncronous code
	
	console.log("end")
	
	
	
	