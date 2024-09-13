function calculateFinalScore(obj) {
    if(typeof obj!== 'object'){
        return 'Invalid Input'
    }
    const test=obj.testScore
    const grade=obj.schoolGrade
    let final=test+grade
    let result=false
    if(obj.isFFamily){
        final+=20
    }
    if(final>=80)
        result=true

    return result
}








console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));


