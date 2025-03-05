// Задача 8. Дано одновимірний масив, у якому зберігається певна виграшна сума (елементи заповнюються випадковим чином значеннями від -500 до 500). Надаючи користувачу можливість вибирати номери елементів  (поки він не відмовиться). Знаходити сумарний виграш.
if (confirm('start')) {
    function getRandomArr(min, max, numberValue) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
            randomArr.push(randomNumber)
        }
        return randomArr
    }
    let randomTicket = getRandomArr(-500, 500, 20)
    function getTakeTicket(randomTicket) {
        let takeWinTicket
        let summWinTicket = 0
        do {
            takeWinTicket = parseInt(prompt(`введи номер білету`))
            if (!isNaN(takeWinTicket) || takeWinTicket <=20 || takeWinTicket >= 0){ 
                summWinTicket+=randomTicket[takeWinTicket]
            }
        } while (!isNaN(takeWinTicket));
        return summWinTicket
    }
    alert(`ваш виграв склав: ${getTakeTicket(randomTicket)}`)
    
}