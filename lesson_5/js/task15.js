// Задача 15. Користувача поступово вводить показники температури протягом року. Знайти середню температуру.

// тут ми не знаємо як часто вводить, тому будемо вводить поки не відмінить (cansel)
if (confirm('start')) {
    

let summ = 0
let counter = 0
let temperature
let result
if (confirm('start')) {
    do {
        temperature = parseFloat(prompt('введи температура'))
        if (!isNaN(temperature) && temperature !== null) {
            counter++
            summ +=temperature
        }
    } while (temperature);
}
    result = summ / counter
    console.log(result)
    alert(`середня температура буде ${result}`)
}