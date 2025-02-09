// Задача 0. Обчислити значення виразів
// Водимо дані
let a = parseInt(prompt('введи перше число', '1'))
let b = parseInt(prompt('введи друге число', '17'))
let c = parseInt(prompt('введи третє число', '2'))

// обчислюємо
let S1 = a + 12 + b
let S2 = Math.sqrt((a + b) / 2 * a)
let S3 = Math.cbrt((a + b) * c)
let S4 = Math.sin(a / -b)

// console.log(`${S4}`)
// виводимо
alert(`Ти ввів: ${a}; ${b}; ${c}. \n Отже S1 = ${S1.toFixed(3)}; S2 = ${S2.toFixed(3)}; S3 = ${S3.toFixed(3)}; S4 = ${S4.toFixed(3)}`)