// Задача 3. Дано масив імен учнів. З’ясувати скільки разів зустрічається ім’я «Іван».
if (confirm('start')) {
    let nameStudents = ['jone', 'Lorem', 'ipsum', 'dolor', 'Іван', 'it', 'Іван', 'amet', 'consectetur', 'adipisicing', 'Іван', 'elit', 'Illo', 'cupiditate']
    let counter = 0
    for (let index = 0; index < nameStudents.length; index++) {
        if (nameStudents[index] === 'Іван') {
            counter++
        }
    }
    document.write(`В массиві у нас вийшло ${counter} Іванів`)
}