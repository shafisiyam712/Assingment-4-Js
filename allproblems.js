function calculateTax(income, expenses) {
    if (expenses > income || income < 0 || expenses < 0) {
        return "Invalid Input"
    }
    const profit = income - expenses;
    return (profit * .20)
}

function sendNotification(email) {
    if (email.includes('@') === false) {
        return 'Invalid Email'
    }
    const mail = email.split('@')
    const notification = mail[0] + ' sent you an email from ' + mail[1]
    return notification
}

function checkDigitsInName(name) {
    if (typeof name !== 'string') {
        return 'Invalid Input'
    }

    const arr = name.split('')
    let result = false
    for (let char of arr) {
        if (isNaN(char) === false) {
            result = true
            break
        }

    }
    return result
}

function calculateFinalScore(obj) {
    if (typeof obj !== 'object') {
        return 'Invalid Input'
    }
    const test = obj.testScore
    const grade = obj.schoolGrade
    let final = test + grade
    let result = false
    if (obj.isFFamily) {
        final += 20
    }
    if (final >= 80)
        result = true

    return result
}

function waitingTime(waitingTimes, serialNumber) {
    if (!Array.isArray(waitingTimes) || typeof serialNumber !== 'number') {
        return 'Invalid Input'
    }
    let vivaDone = waitingTimes.length
    let vivaLeft = (serialNumber - 1) - vivaDone
    let totalTime = 0

    for (const time of waitingTimes) {
        totalTime += time
    }
    let avgTime = Math.round(totalTime / vivaDone)

    return (avgTime * vivaLeft)
}