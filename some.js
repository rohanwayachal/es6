const phones=[

{brand:'apple',phone:'x'},
{brand:'apple',phone:'8'},
{brand:'samsung',phone:'note 8'}]


const newphones=phones.some((phone)=>phone.brand==='apple')


console.log(phones)
console.log(newphones)