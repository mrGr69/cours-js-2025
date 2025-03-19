// 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального
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
    let max = (randomPrices) => randomPrices.reduce((prevEl, el) => prevEl>el?prevEl: el)
    function getPercentageOfPrice(maxPrice, randomPrices) {
        let percentageOfPrice = randomPrices.map(el => (el / maxPrice) * 100)
        return percentageOfPrice
    }
    console.log(randomPrices);
    console.log(max(randomPrices));
    console.log(getPercentageOfPrice(max(randomPrices), randomPrices));
    
}

