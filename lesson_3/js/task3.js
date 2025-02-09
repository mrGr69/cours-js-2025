// Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.
const MaxNumber = 5
const MinNumber = 1
let randomNumber = Math.floor(Math.random() * (MaxNumber - MinNumber + 1)) + MinNumber
console.log(`${randomNumber}`)

let TryBingo = parseInt(prompt('вгадай число від 1 до 5'))
if (randomNumber === TryBingo)
    alert('Молодчина, вгадав з першого разу')
else 
{
let TryBingo2 = parseInt(prompt('Спробуй ще раз'))
if (randomNumber === TryBingo2) {
    alert('Молодчина, вгадав з другого разу!')
} else {
    alert(`На жаль ти не вгадав. Рандомне число було: ${randomNumber}`)
}
}

