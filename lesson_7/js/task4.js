// Задача 4. Створити функцію, яка для 3 заданих чисел знаходить одночасно декілька результатів: кількість парних, кількість додатних, кількість більших за 100.

if (confirm('start')) {
    let evenNumber =0
    let oddNumber =0
    let number100 =0
    function getOleg(num1,num2,num3) {
        if (num1 % 2 === 0) evenNumber++
        else oddNumber++
        if (num2 % 2 === 0) 
            evenNumber++
        else oddNumber
        if (num3 % 2 === 0)
            evenNumber++
        else oddNumber
        if (num1 > 100)
            number100++
        if (num2 > 100)
            number100++
        if (num3 > 100) {
            number100++
        }
        return ` парних буде ${evenNumber}, непарних ${oddNumber}, більше 100 ${number100}`
    }
}
document.write(getOleg(10,12,145))