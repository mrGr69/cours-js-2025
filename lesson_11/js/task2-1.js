// Задача 2. Дано інформацію про прибуток К магазинів протягом тижня. Знайти :
// 1) загальний прибуток кожного масиву за тиждень;
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
    function getPtofitWeek(arrayWeeks) {
        let result = []
        for (const week of arrayWeeks) {
            let profitWeek = week.reduce((accum, el) => accum+el)
            result.push(profitWeek)
            
        }
        return result
    
    }
    function getOutputToScreen(profitWeek) {
        profitWeek.forEach((element, index) => {
            document.writeln(`профіт ${index + 1}-го магазину за тиждень буде: ${element} </br>`)
        });
    }
    getOutputToScreen(getPtofitWeek(getFewRowsArray()))
}
