// 12)Знайти останню ціну, що більше за 1000
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
    let lastPriceMore1000 = (arrayPrice) => arrayPrice.reverse().find(el => el>1000)
    console.log(lastPriceMore1000(randomPrices));
    
    
}