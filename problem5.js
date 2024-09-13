function  waitingTime(waitingTimes,serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber!=='number'){
        return 'Invalid Input'
    }
    let vivaDone=waitingTimes.length
    let vivaLeft=(serialNumber-1)-vivaDone
    let totalTime=0

    for(const time of waitingTimes){
        totalTime+=time
    }
    let avgTime=Math.round(totalTime/vivaDone)

    return (avgTime*vivaLeft)
}

console.log(waitingTime(12,'kjh'));


