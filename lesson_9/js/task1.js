if (confirm('start')) {
    const usersArray = (usersArray) => new Array(usersArray).fill(0)
    let usersNumber = parseInt(prompt('введи величину массиву'))
    document.writeln(usersArray(usersNumber))
}