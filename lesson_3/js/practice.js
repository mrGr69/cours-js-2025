// let AmountChild = parseInt(prompt("введіть кількість дітей"));
// const Bus = 30;
// обчислення
// let AmountBus = Math.ceil(AmountChild / Bus)
// alert(`${AmountBus}`)
// let DivisorChild = ((AmountChild - 1) % Bus) + 1;
// let AmountBus = AmountChild / Bus;????????????????????
// alert(`нам потрібно ${AmountBus} автобусів`);
// let AmountMonayUser = parseFloat(prompt("ввеіди кількітсь грошей"));
// let PriceProduct = parseFloat(prompt("введи ціну товару"));
// if (AmountMonayUser >= PriceProduct)
//     document.write(`тобі достатьно, купляй!`);
// else
//     document.write(`не зкупиш!!!`);
// let Age = parseInt(prompt('введи свій вік'))
// const MinAge = 32
// const MaxAge = 45
// if(MinAge <=Age && Age<=MaxAge)
//     alert(`ласкаво просимо`)
// else
//     alert(`не підходите`)
// const score = parseInt(prompt("оцінка від 1 до 5"));
// if (score === 5) document.write("відмінно");
// else if (score === 4) document.write("добре");
// else if (score === 3)  document.write("задовільно");
// else document.write("погано");
// switch (score)
// {
//     case 5: document.write('відмінно')
//     break;
//     case 4: document.write('good')
//     break;
//     case 3: document.write('задовільно')
//     break;
//     case 2:document.write('bad')
//     break;
//     default: document.write('введи коректні дані')
// }
// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }
// const TomatoColor = prompt('введи колір')
// let AllowedColor
// switch (TomatoColor) {
//     case "red": AllowedColor = "дозрів"

//         break;
//     case "yellow": AllowedColor = "дозріває"

//         break;
//     case "green": AllowedColor = "росте"

//         break;

//     default: AllowedColor = "помідор мутант"
//         break;
// }
// document.write(`${AllowedColor}`)
// знайти найбільше число серед тих, які менші за середнє арифметичне
// let a = parseInt(prompt("first"));
// let b = parseInt(prompt("second"));
// let c = parseInt(prompt("third"));
// let d = parseInt(prompt("4-th"));

// const avg = (a + b + c + d) / 4;
// const max = -Infinity;

// let result = Math.max(
//   a < avg ? a : max,
//   b < avg ? b : max,
//   c < avg ? c : max,
//     d < avg ? d : max
// );
// if (result !== max) 
//     alert(`це буде ${result}`);
// else 
//     alert("додатніх немає");


// const maxNumber = 0
// if (a > b && a > c)

//     a = maxNumber
// else if(b > c)
//     b = maxNumber
// else
//     c = maxNumber
// alert(`ти ввів ${a}, ${b}, ${c}`)

// Комп’ютер випадковим чином вибирає початок і кінець проміжку (проміжок повинен знаходитися в межах від 1 до 100). Користувач вводить число і виграє, якщо число знаходиться у цьому проміжку, або розташоване від нього (від лівого або правого краю) не більше ніж на 10.

// for (let num = 1; num < 20; num++) {
//     document.write('<h1>Ілля хуй</h1>')
//     console.log(`${num}`)
// }
// console.log(`${num}`)
// let dobutok 
// for (let num = 0; num < 5; num++) {
//     let firstNumber = parseInt(prompt('введи перше ціле число'))
//     let secondNumber = parseInt(prompt('введи друге число'))
//     if (firstNumber === secondNumber) {
//         dobutok = firstNumber + secondNumber
//     }
//     else
//     dobutok = firstNumber * secondNumber
// }
// document.write(`<h1> результат у нас буде ${dobutok}</h1> <br>`)
// for (let i = 1; i <=3 ; i++) {
//     for (let num2 = 1; num2 <= 3; num2++) 
//     {
//         let userAns = parseInt(prompt(`${i} + ${num2} = `))        
    
//     if (userAns === i + num2) 
//     {
//         alert('okay')
//     } 
//     else 
//     {
//         alert('error')
//     }
// }
  
// let goodAnsver = 0
// for (let num = 1; num <= 4; num++) {
//     let randomFirstNumber = Math.floor(Math.random() * (9)) + 1
//     let randomSecondNumber = Math.floor(Math.random() * (9)) + 1
    
//     let ansverUser = parseInt(prompt(`введи скільки буде ${randomFirstNumber} * ${randomSecondNumber}`))
//     if (randomFirstNumber * randomSecondNumber === ansverUser) 
//         {
//         goodAnsver += 1
//         alert('молодецт')
//     } 
//     else
//         {
//         alert('ти лох')
//     }
// }
// alert(`ти правильно відповів ${goodAnsver} раз`)
// let a = 1, b = 7
// while (a < b) {
//     document.write(`<h1> ${a} --- ${b} </h1>`)
//     a++
//     b--
// }
// поступово вітаємо 20 користувачів поки не прийде іван
// for (let i = 0; i < 20; i++) {
//     let userName = prompt('hello bro')
//     if (userName === 'іван') {
//         break
//     }    
// }
function getotalMonth(price, month){
    return price * month
}

function  getRandomNumber() {
    return Math.floor(Math.random()*6)
}

