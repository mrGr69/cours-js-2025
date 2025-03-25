// 5) Суму парних рядків
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
    function getEvenSumm(randomArr) {
        let sum = 0
        for (let rows = 0; rows < randomArr.length; rows += 2) {
            for (const element of randomArr[rows]) {
                sum +=element
            }
            
        }
        return sum
    }
    console.log(getEvenSumm(getFewRowsArray()));
    
}