// 4) загальний прибуток за вихідні дні
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
    function getProfitOfHolidayDays(randomArr) {
        let sum = 0
        for (const shop of randomArr) {
            for (let days = 5; days < 7; days++) {
                sum += shop[days]
                
                
            }
        }
        return sum
    }
    console.log(getProfitOfHolidayDays(getFewRowsArray()));
}