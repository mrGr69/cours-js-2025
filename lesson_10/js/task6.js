// 6)Визначити, чи є ціна, що менше 1000
if (confirm('start')) {
    function getRandomArr(min=1, max=10000, numberValue = 20) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    function isPriceLessThan1000(arrayPrices) {
        // console.log(arrayPrices);    
        let value = 1000
        let priceLess1000 = arrayPrices.find(el => el<value)
        // return priceLess1000
        let result
        if (priceLess1000){result = `так, така ціна є, це ${priceLess1000}`} else result =  'такої ціни немає'
        return result
    }
    
    console.log(isPriceLessThan1000(getRandomArr()));
}

