// 7) відсортувати кожен тиждень за зростанням
if (confirm('start')) {
    function getFewRowsArray(min = 0, max = 100, row = 3, column = 7) {
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
    function getSortWeeks(randomArr) {
        randomArr.forEach((element, index) => {
        element.sort((day1, day2) => {
            if(day1>day2) return 1
            else if(day1 < day2) return -1
            else return 0
        })
        });
        return randomArr
    } 
    console.log(getSortWeeks(getFewRowsArray()));
    
}