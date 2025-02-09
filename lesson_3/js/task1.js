// З клавіатури вводяться імена двох дітей та кількість у них цукерок. Вивести не екран ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.
// вводимо дані
let NameFirstChild = prompt('імя першої дитини')
let AmountCandy1 = parseInt(prompt('кількість цукерок'))
let NameSecondChild = prompt('імя другої дитини')
let AmountCandy2 = parseInt(prompt('кількість цукерок'))

// обчислення
if (AmountCandy1 > AmountCandy2) 
    alert(`У ${NameFirstChild} більше цукерок`)
else if (AmountCandy1 < AmountCandy2)
    alert(`У ${NameSecondChild} більше цукерок`)
else 
    alert('кількість цукерок однакова')
