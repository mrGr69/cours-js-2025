// номери рядків від 0 до половини, стовпці від половини до кінця
if (confirm('start')) {
    function getFewRowsArray(min = 0, max = 100, row = 6, column = 6) {
        let randomArr = []
        for (let i = 0; i < row; i++) {
            randomArr.push([])
            for (let index = 0; index < column; index++) {
                let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min            
                randomArr[i].push(randomNumber)
            }
        }
        return randomArr
    }
    function getSecondQuarter(randomArr) {
        let sum = 0
        for (let row = 0; row < randomArr.length/2; row++) {
            for (let column = randomArr[row].length/2; column < randomArr[row].length; column++) {
                sum += randomArr[row][column]
            }
        }
        return sum
    }
    console.log(getSecondQuarter(getFewRowsArray()));
    
}
// console.log(getFewRowsArray());
