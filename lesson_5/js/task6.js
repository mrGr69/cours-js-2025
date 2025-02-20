// Задача 6.Вивести 3 таблиці (по 3 рядки і 3 стовпці у кожній) за зразком
if (confirm('start?')) {
    counter = 0

    for (let i = 1; i <= 3; i++) {
        document.write(`<ul class="list-task5"><li class="list-task4__item">`)
        for (let colums = 1; colums <= 3; colums++) {
            //цей цикл генерує три рядки 
                document.write(`<ul class="list-task5__sublist">`)
                for (let line = 1; line <= 27; line++) {
                    counter++
                    document.write(`<li class="list-task5__subitem">${counter}</li>`)
                    if (counter % 3 === 0) {
                        document.write(`</ul>`)
                        break
                    }
                }
            }
        document.write(`</li></ul>`)
    }
}