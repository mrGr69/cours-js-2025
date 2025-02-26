// Задача 2. Створити функцію, яка за номером дня дозволяє з’ясувати чи є цей день робочим.
if (confirm('start')) {
    function getDayWorkOrChill(WorkOrChill) {
        return WorkOrChill < 6
    }
    let numDay = parseInt(prompt('введи цифру дня'))
    alert(`сьогодні у нас ${getDayWorkOrChill(numDay)? "робочий день" : "вихідний" }`)
}