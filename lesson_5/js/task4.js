// Задача 4. Вивести таблицю з 3 рядків і 7 стовпців
if (confirm('start?')) {
    for (let colums = 1; colums <= 3; colums++) {
    //цей цикл генерує три рядки 
        document.write(`<ul class="list-task4">`)
        for (let line = 1; line <= 7; line++) {
            
            document.write(`<li class="list-task4__item">${line}</li>`)
        
        }
        document.write(`</ul>`)
    }
}