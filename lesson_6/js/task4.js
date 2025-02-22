// 4. Знайти суму всіх непарних чисел з діапазону, який вводить користувач з клавіатури.
if (confirm('start')) {
    let summ = 0
    let number
    do {
        number = parseInt(prompt('введи будь-яке число'))
        if (number % 2 === 1) 
            summ +=number

    } while (!isNaN(number));
    console.log(summ);
}