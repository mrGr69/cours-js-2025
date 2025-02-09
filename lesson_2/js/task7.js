// Задача 7. Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).
const MonthMin = 1
const MonthMax = 12
const DayMin = 0
const DayMax = 6
let MonthRandom = MonthMin + Math.floor(Math.random()*(MonthMax - MonthMin + 1))
console.log(`${MonthRandom}`)
let DayRandom = DayMin + Math.floor(Math.random()*(DayMax - DayMin + 1))
console.log(`${DayRandom}`)
let SummRandom = MonthRandom + DayRandom
console.log(`${SummRandom}`)
alert(`Наша сумма рандомних числ (${MonthRandom}) i (${DayRandom}) буде ${SummRandom}`)
