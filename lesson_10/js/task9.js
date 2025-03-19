// 9)Підрахувати суму цін, що більше за 1000
if (confirm('start')) {
    function getRandomArr(min=1, max=10000, numberValue = 20) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    function getSummMore1000(arrayPrices) {
        let value = 1000
        let summMore1000 = arrayPrices.filter(el => el>value).
        reduce((prevEl, el) => prevEl+el)
        return summMore1000
    }
    console.log(getSummMore1000(getRandomArr()));
    
}