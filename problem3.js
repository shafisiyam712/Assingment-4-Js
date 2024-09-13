function checkDigitsInName(name) {
    if(typeof name!== 'string'){
        return 'Invalid Input'
    }
    
    const arr=name.split('')
    let result=false
    for(let char of arr){
        if(isNaN(char)===false){
            result=true
            break
        }
            
    }
   return result
}
console.log(checkDigitsInName('name'));

