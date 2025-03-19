// 8)Підрахувати кількість цін, що більше за 1000
if (confirm('atrt')) {
    function getRandomArr(min=1, max=10000, numberValue = 20) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    function getAmountPricesMore1000(arrayPrices) {
        console.log(arrayPrices);
        
        let value = 1000
        let count = 0 
        arrayPrices.forEach(element => { if(element>value)count++
        });
        return count
    }
    console.log(getAmountPricesMore1000(getRandomArr()));
    
}