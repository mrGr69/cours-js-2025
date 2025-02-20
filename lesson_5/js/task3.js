// Задача 3. Вивести таблицю з одним рядком і  7 стовпцями.
if (confirm('start?')) {
    for (let numm = 1; numm <= 7; numm++) {
        document.write(`<li class="list-js3__item">${numm}</li>`)
    }
}