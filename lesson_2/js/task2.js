// Задача 2. Дано рік народження (дата: 1 січня) та поточний рік. Знайти кількість років.
// вводимо данні
let StartBorn = parseInt(prompt('введи свою дату народження)', ''))
const NowDate = 2025
// обчислення
let CurrentDate = NowDate - StartBorn
// виводимо дані 
alert(`Зараз тобі ${CurrentDate} років`)