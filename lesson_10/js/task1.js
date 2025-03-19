// 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.

if (confirm('start')) {
    function getRandomArr(min=1, max=10000, numberValue = 50) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    function arrayMore1000(arrayRand) {    
        let newArrMore1000= arrayRand.filter(x => x > 1000)
        return newArrMore1000
    }
    console.log(arrayMore1000(getRandomArr()));
    
}

