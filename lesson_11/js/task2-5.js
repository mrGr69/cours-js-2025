// 5) максимальний прибуток за середу
if (confirm('start')) {
    function getFewRowsArray(min = 0, max = 100, row = 10, column = 7) {
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
    function getMaxProfitWednesday(randomArr) {
        let max = -1
        for (const shop of randomArr) {
            if (shop[2]>max) max=shop[2]
        }
        return max
    }
    console.log(getMaxProfitWednesday(getFewRowsArray()));
}
