let name = 'Alex'
let money = 10000
let account = 7777
let userName = prompt('What is your name?')
if (userName == 'Alex') {
    let userAccount = +prompt('number of account')
    if (userAccount == 7777) {
        let moneyCount = prompt('How much money you want to cash out?')
        if (moneyCount < 10000) {
            money - moneyCount
            alert('Operation was completed successful')
        }
        else {
            alert('You do not have so much money')
        }
    }
    else {
        alert('user not found')
    }
}
else {
    alert('user not found')
}