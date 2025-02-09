// Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці
//вводимо дані
let FirstNumber = parseFloat(prompt('Введи перше число', ''))
let SecondNumber = parseFloat(prompt('Введи друге число', ''))
//обчислюємо
let summ = FirstNumber + SecondNumber
let dobutok = FirstNumber * SecondNumber
let chastka = FirstNumber / SecondNumber

//виводимо данні
alert(` Сумма = ${summ.toFixed(1)} \n Добуток = ${dobutok.toFixed(1)} \n Частка = ${chastka.toFixed(1)}`)
