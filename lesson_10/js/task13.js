// 13)Знайти індекс останньої ціни, що більше за 1000
if (confirm('start')) {
    function getRandomArr(min=1, max=10000, numberValue = 20) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    let randomPrices = getRandomArr()
    let lastIndexMore1000 = (randomPrices) => randomPrices.reverse().findIndex(el => el>1000)
    console.log(lastIndexMore1000(randomPrices));
    
}