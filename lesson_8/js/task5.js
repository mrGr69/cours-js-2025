// Задача 5. Дано послідовність оцінок учня. Підрахувати кількість:
// 1)	двійок
// 2)	кількість хороших оцінок (добре, відмінно);
// 3)	кількість оцінок, які нижче середнього.

if (confirm('start')) {
    let getArrRatingStudent = () =>{
        let arrRate = []
        let rating = 0
        while (!isNaN(rating)) {
            arrRate.push(rating)
            rating = parseInt(prompt('введи число'))
        }
        return arrRate
    }
    // getArrRatingStudent()
    // кількість двійок
    function getAmountNumberOfTwos(array){
        let countNumberOfTwo = 0
        for (let index = 0; index < array.length; index++) {
            if (array[index] === 2) {
                countNumberOfTwo++
            }        
        }
        return countNumberOfTwo
    }
    
    // хороші оцінки
    function getAmountGoodRate(array) {
        let countNumbeGoodRate = 0
        for (let index = 0; index < array.length; index++) {
            if (array[index] === 4 || array[index] === 5) {
                countNumbeGoodRate++
            }        
        }
        return countNumbeGoodRate
    }
    // нижче середнього
    function getAmountBadRate(array) {
        let countNumberBadRate = 0
        for (let index = 0; index < array.length; index++) {
            if (array[index] === 3 ) {
                countNumberBadRate++
            }        
        }
        return countNumberBadRate
    }
    let arrRating = getArrRatingStudent()
    document.write(`<h2>Учень має ${getAmountNumberOfTwos(arrRating)} двійок, а також ${getAmountBadRate(arrRating)} середніх оцінок, і ${getAmountGoodRate(arrRating)} хороших оцінок </h2>`)
}