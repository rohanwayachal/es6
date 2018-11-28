const phones=[

{brand:'apple',phone:'x'},
{brand:'apple',phone:'8'},
{brand:'samsung',phone:'note 8'}]


const newphones=phones.find((phone)=>phone.brand==='apple') //returns only 1st occurance


console.log(phones)
console.log(newphones)