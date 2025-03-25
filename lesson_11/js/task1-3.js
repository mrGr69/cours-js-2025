// 3)номери рядків (від половини до кінця, стовпці від 0 до половини
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
    function getThirdQuarter(randomArr) {
        let sum = 0
        for (let row = randomArr.length/2; row < randomArr.length; row++) {
            for (let column = 0; column < randomArr[row].length/2; column++) {
                sum += randomArr[row][column]
            }
        }
        return sum
    }
    console.log(getThirdQuarter(getFewRowsArray()));
    
}