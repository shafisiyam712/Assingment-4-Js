function sendNotification(email) {
    if(email.includes('@')===false){
        return 'Invalid Email'
    }
    const mail=email.split('@')
    const notification=mail[0]+' sent you an email from '+mail[1]
    return notification
}
console.log(sendNotification('nadim.naem5outlook.com'));
