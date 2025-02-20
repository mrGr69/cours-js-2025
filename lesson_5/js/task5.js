// Задача 5. Вивести таблицю з 3 рядків і 7 стовпців
if (confirm('start?')) {
    counter = 0
    for (let colums = 1; colums <= 3; colums++) {
    //цей цикл генерує три рядки 
        document.write(`<ul class="list-task4">`)
        for (let line = 1; line <= 9; line++) {
            counter++
            document.write(`<li class="list-task4__item">${counter}</li>`)
            if (counter % 3 === 0) {
                document.write(`</ul>`)
                break
            }
        }
    }
}