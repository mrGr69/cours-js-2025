// Задача 6. Створити функцію, яка створює таблицю з вказаною кількістю рядків і стовпців (таблиця заповнюється заданим фіксованим повідомленням).
if (confirm('start')) {
    function getTable(line, column) {
        for (let index = 1; index <= column; index++) {
            document.write('<ul class="listls7">')
            for (let index = 1; index <= line; index++) {
                document.write('<li class="listls7__item"></li>')
            }
            document.write('</ul>')
        }
        return
    }
    let line = parseInt(prompt('кількість колонок'))
    let column = parseInt(prompt('кількість рядків'))
    getTable(column, line)
}