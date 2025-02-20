// Задача 10. Знайти суму всіх непарних чисел, що знаходяться між заданими користувачем числами. 
if (confirm('start?')) {
    let minNumber = parseInt(prompt('Введи нижню грань проміжку'))
    let maxNumber = parseInt(prompt('Введи верхню грань проміжку'))
    let summ = 0
    if (minNumber % 2 === 0) {
        minNumber++
    }
    for ( let i = minNumber;  i <= maxNumber; i += 2) {
        summ +=i
    }
    alert(`сумма непарних буде ${summ}`)
}