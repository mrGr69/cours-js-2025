// Задача 3. Створити окремі функції, які для 4 чисел знаходять:
// 1)суму;
// 2)добуток;
// 3)середнє арифметичне;
// 4)мінімальне значення. 

if (confirm('start')) {
    let num1, num2, num3, num4
    function getSummNum(num1, num2, num3, num4) {
        return num1 + num2 + num3 + num4
    }
    function getDobutock(num1, num2, num3, num4) {
        return num1*num2*num3*num4
    }
    function getMiddleValue(num1, num2, num3, num4) {
        return getSummNum / 4 || (num1, num2, num3,num4) / 4
    }
    function getminValue(num1, num2, num3, num4) {
        return Math.min(num1,num2,num3,num4)
    }
    for (let num = 1; num <= 4; num++) {
        let numbers = parseInt(prompt(`введи ${num}-е число`))
        switch (num) {
            case 1: num1 = numbers
                break;
            case 2: num2 = numbers
                break;
            case 3: num3 = numbers
                break;
            case 4: num4 = numbers
                break;
            default:
                break;
        }
    }
    document.write(`<div>
        <h2>сумма = ${getSummNum(num1, num2, num3, num4)}</h2>
        <h2>добуток = ${getDobutock(num1, num2, num3, num4)}</h2>
        <h2>середнє = ${getMiddleValue(num1, num2, num3, num4)}</h2>
        <h2>мінімальне = ${getminValue(num1, num2, num3, num4)}</h2>
        </div>`)
}