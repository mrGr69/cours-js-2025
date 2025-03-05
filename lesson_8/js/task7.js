// Задача 7. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
if (confirm('start')) {
    function getRandomArr(min, max, numberValue) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
            randomArr.push(randomNumber)
        }
        return randomArr
    }
    let paymentArray = getRandomArr(10, 100, 12)
    // за весь рік;
    function getSummYesr(paymentArray) {
        let summ = 0
        for (let index = 0; index < paymentArray.length; index++) {
            summ+=paymentArray[index]        
        }
        return summ
    }
    // у першій половині року;
    function getHulfSum(paymentArray) {
        let summ = 0
        let array = paymentArray.length/2
        for (let index = 0; index < array; index++) {
            summ+=paymentArray[index]        
            
        }
        return summ
    }
    // у другій половині року;
    function getSecondHulf(paymentArray) {
        let summ = 0
        let array = paymentArray.length/2
        for ( let index = paymentArray.length-1; index >= array; index--) {
            summ+=paymentArray[index]
        }
        return summ
    }
    // за літо;
    function getSummersum(paymentArray) {
        let summ = 0
        for (let index = 5; index <= 7; index++) {
            summ+=paymentArray[index]            
        }
        return summ
    }
    // за ІІ квартал;
    function get2Quartal(paymentArray) {
        let summ = 0
        for (let index = 2; index < 5; index++) {
            summ+=paymentArray[index]            
        }
        return summ
    }
    // за парні місяці (з парними номерами);
    function getEvenSum(paymentArray) {
        let summ = 0
        for (let index = 0; index < paymentArray.length - 1; index += 2) {
            summ+=paymentArray[index]            
        }
        return summ
    }
    // за місяці, які є початковими у сезоні (весна, літо, осінь, зима).
    function getNewSeason(paymentArray) {
        let summ = 0
        for (let index = 2; index < paymentArray.length ; index+=3) {
            summ+=paymentArray[index]            
        }
        return summ
    }
    console.log(paymentArray);
    document.write(`
        <div class="lesson-8">
            <h2>За рік сумма буде ${getSummYesr(paymentArray)}</h2>
            <h2>У першій половині року: ${getHulfSum(paymentArray)}</h2>
            <h2>У другій половині року: ${getSecondHulf(paymentArray)}</h2>
            <h2>За літо: ${getSummersum(paymentArray)}</h2>
            <h2>за 2-й квартал: ${get2Quartal(paymentArray)}</h2>
            <h2>За парні місяці: ${getEvenSum(paymentArray)}</h2>
            <h2>За місяці, які є початковим у сезоні: ${getNewSeason(paymentArray)}</h2>
        </div>        
    `);

}