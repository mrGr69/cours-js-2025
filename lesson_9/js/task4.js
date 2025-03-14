if (confirm('start')) {
    // 4.Дано масив елементів. Вивести на екран елементи, що більші за 100
    function getRandomArr(min=50, max=200, numberValue) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
        const newArr = []
        for (const element of randomArr) {
            if (element>=100) newArr.push(element)
        }
            return newArr
        }
        const amountNumbers = parseInt(prompt('введіть кількість числ'))
        console.log(getRandomArr(50, 200, amountNumbers));
        
}