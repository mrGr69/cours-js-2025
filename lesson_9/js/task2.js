if (confirm('start')) {
    // 2. Користувач вводить кількість елементів. Створити масив, у якому перша половина заповнена 1-цями, а друга заповнена 7-ками.
    function createUsersArray(size) {
        let array = new Array(size)
        array.fill(0, 0, Math.floor(array.length/2));
        array.fill(7, Math.floor(array.length/2), array.length)
        return array;
    }
    let usersNumber = parseInt(prompt("введи величину массиву"));
    document.writeln(createUsersArray(usersNumber));
    
}