// Задача 1. Дано масив, який містить оцінки з К предметів. Знайти середній бал і з’ясувати до якої категорії він відноситься (відмінник, двійочник (має хоча би одну двійку), хорошист (оцінки добре і відмінно), трійочник(є хоча би одна трійка)).
// let amountSubjects = parseInt(prompt('введи кількість предметів'))

if (confirm('start')) {
    function getRandomArr(min, max, numberValue) {
    let randomArr = []
    for (let i = 0; i < numberValue; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
            randomArr.push(randomNumber)
        }
        return randomArr
    }
    function getAverageScore(scoreArr) {
        let min = Infinity
        let whoIs
        let result = 0
        for (let score = 0; score < scoreArr.length; score++) {
            result += scoreArr[score]
            if (scoreArr[score] < min) {
                min = scoreArr[score]
            }
            switch (min) {
                case 1:
                case 2:
                    whoIs = 'двієчник'
                    break;
                case 3:
                    whoIs = 'трієчник'
                    break;
                case 4:
                case 5:
                    whoIs = 'хорошист'
                default:
                    break;
                }
            
        }
        result /= scoreArr.length
        return [result, whoIs]
    }
    // як вивести правильно з функції декілька значень? 
    console.log(getRandomArr(1, 5, 5));
    console.log(getAverageScore(getRandomArr(1,5,5)));
    document.write(`<h2> Цей учень має такий середній бал: ${getAverageScore(getRandomArr(1,5,5))}</h2>`);
    
}