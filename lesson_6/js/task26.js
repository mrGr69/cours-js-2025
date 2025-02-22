// З клавіатури вводяться числа та послідовно сумуються. Знайти кількість введених користувачем чисел, коли їх сума перевищить 100.
if (confirm(start)) {
    let number 
    let counter = 0
    summ =0
    do {
        number = parseInt(prompt('введи число'))
        counter++
        summ +=number
    } while (summ < 100);
    alert(`summ = ${summ}`)
}
