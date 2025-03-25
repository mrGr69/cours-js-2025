// 2) загальний прибуток усіх магазинів по дням (загальний прибуток усіх магазинів за понеділок, за вівторок, і т.д.);
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
    // console.log(getFewRowsArray());
    
    function getProfitOfDays(randomArr) {
        let profitOfDay = []
        for (let day = 0; day < 7; day++) {
            let sum = 0
            for (let shop = 0; shop < randomArr.length; shop++) {
                sum+=randomArr[shop][day]
            }
            profitOfDay.push(sum)
        }
        return profitOfDay
    }
    function getOutputToScreen(profitday) {
        profitday.forEach((element, index) => {
            document.writeln(`профіт ${index + 1}-го дня усіх магазинів буде: ${element} </br>`)
        });
    }
    getOutputToScreen(getProfitOfDays(getFewRowsArray()))
}