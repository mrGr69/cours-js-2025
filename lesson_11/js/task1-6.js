// 6) Суму непарних стовпців
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
    function getSumOdColumn(randomArr) {
        
        let sum = 0
        for (const row of randomArr) {
            for (let element = 1; element < row.length; element+=2) {
                sum+=row[element]
                
            }
        }
        return sum
    }
    
    console.log(getSumOdColumn(getFewRowsArray()));
    
}