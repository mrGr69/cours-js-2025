// Задача 5. Створити окремі функції, які переводять:
// Сантиметри у дюйми;
// Кілограми у фунти;
// Кілометри у милі.

if (confirm('start')) {
    function getKGtoFunt(value) {
        return value * 2.2046
    }
    function getKMtoMile(value) {
        return value * 1.6
    }
    function getSMtoInch(value) {
        return value * 0.3937
    }
    let converto = parseInt(prompt(`вибери цифру, що ти хочеш перетворити: </br> 1) кг в фунти </br>2)КМ у милі </br>3)СМ у дюйми`))
    let value = parseInt(prompt('число:?'))
    let result
    switch (converto) {
        case 1:  result = getKGtoFunt(value)
            break;
        case 2:  result = getKMtoMile(value)
            break
        case 3:  result = getSMtoInch(value)
            break
        case 4: result = `Кг у фунти: ${getKGtoFunt(value)} <br> 
            КМ у милі: ${getKMtoMile(value)} <br> 
            СМ у дюйми: ${getSMtoInch(value)}`
        break 
    }
    document.write(`<h2>результат буде <br> ${result}</h2>`)
}
