// 7)Визначати, чи усі ціни більше за 1000
if (confirm('start')) {
    function getRandomArr(min=1, max=10000, numberValue = 20) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    function isOllPricesMore1000(arrayPrices) {
        let value = 1000
        let checkPricesMore1000 = arrayPrices.every(el => el>1000)
        let result
        checkPricesMore1000 ? result = 'усі більше' : result = 'якесь менше'
        return result
    }
    console.log(isOllPricesMore1000(getRandomArr()));
    
}