if (confirm('start')) {
    // 3. Користувач вводить кількість елементів. Створити масив, у якому перші 5 елементів заповнені 1-цями, а інші до кінця масиву заповнені 7-ками.
    function createUsersArray(size) {
        let array = new Array(size)
        array.fill(1, 0, 5);
        array.fill(7, 5, array.length)
        return array;
    }
    let usersNumber = parseInt(prompt("введи величину массиву"));
    document.writeln(createUsersArray(usersNumber));
    
}