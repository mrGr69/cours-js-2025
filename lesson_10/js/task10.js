// 10)Знайти першу ціну, що більше за 1000
if (confirm('start')) {
    function getRandomArr(min=1, max=10000, numberValue = 20) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
        let firstPriceMore1000 = (arrayPrices) => arrayPrices.find(el => el<1000)
    console.log(firstPriceMore1000(getRandomArr()));
    
    
}