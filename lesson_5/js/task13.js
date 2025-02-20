// Морський бій. Комп’ютер випадково розташовує одиночний корабель на полі розміром N*M. Маючи К снарядів користувач намагається потопити корабель. 
if (confirm('start')) {
    

let x = parseInt(prompt('введи довжину поля'))
let y = parseInt(prompt('введи висоту поля'))
let boatXPosition = Math.floor(Math.random() * (x)) + 1
let boatYPosition = Math.floor(Math.random() * (y)) + 1
let amountBullet = parseInt(prompt('введи кількість снарядів'))
let counter = 0
let point 

console.log(x,y,boatXPosition,boatYPosition,)

alert('починаємо гру')
do {
    point = parseFloat(prompt('введи через ТОЧКУ по довжині а потім висоті куди бажаєш бахнути'))
    counter++
    let difference = amountBullet - counter
    if (boatXPosition === Math.trunc(point) && boatYPosition === (point * 10) % 10) {
        alert('молодець, виграв, потопив.')
        break
    }
    else if (difference < 1)
        break
    else
        alert(`пробуй далі, в тебе ще є ${difference}  снарядів`)
} while (true);
}
// воно буде працювати, але тільки якщо поле в межах 10\10
// якщо більше, то потрібно змінювати формулу, або декілька разів вводити значення x y