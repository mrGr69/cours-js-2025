// 3)Сформувати список з тих цін, які більші за попереднє значення
if (confirm('start')) {
    function getRandomArr(min=1, max=10000, numberValue = 20) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    function getPriceBiggerPreviousPrice(randomPrices) {
        console.log(randomPrices);
        let priceBiggerPrevious = randomPrices.filter((el, index) => randomPrices[index-1] < el)
        return priceBiggerPrevious 
    }
    console.log(getPriceBiggerPreviousPrice(getRandomArr()));
}
