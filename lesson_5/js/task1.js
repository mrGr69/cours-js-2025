// Задача -1. Вивести на екран номери місяців весни і літа (від 3 до 8)

// охх, скліьки задач, почнемо з простенького, ще трошки й дожену поток
if (confirm('почати тестування?')) {
    // document.write('<div class="container">')
    for (let month = 3; month <= 8; month++) {
        if (month < 6) 
            document.write(`<h2>зараз весна й у нас ${month}-й місяць </h2>`)
        else
        document.write(`<h2>зараз літо й у нас ${month}-й місяць </h2>`)
    }
    // document.write('</div>')
}