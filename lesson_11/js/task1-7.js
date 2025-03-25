// 7) У парних рядках – непарні стовпці, у непарних – парні.
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
    function getSumAnotherElement(randomArr) {
        let sum = 0
        for (const row of randomArr) {
            for (let index = 0; index < row.length; index++) {
                if (row.length%2===0&&index%2===1) {
                    sum+= row[index]
                }
                else if (row.length%2===1&&index%2===0) {
                    sum+= row[index]
                    
                }
                
            }
        }
        return sum
    }
    console.log(getSumAnotherElement(getFewRowsArray()));
    
}