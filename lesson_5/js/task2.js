// Задача -2. Поступово генерувати 100 випадкових чисел від 1 до 1000. Підрахувати яких чисел більше: парних чи непарних.
if (confirm('почати тестування')) {
let evenNumber = 0
let oddNumber = 0
for (let index = 1; index <= 100; index++) {
    let randomNumber = Math.floor(Math.random() * (1000)) + 1
    // if(randomNumber % 2 === 0)
    //     evenNumberNumber +=1
    // else
    //     oddNumber +=1
    console.log(randomNumber)
    randomNumber % 2 === 0 ? evenNumber +=1 : oddNumber +=1
}
if (evenNumber > oddNumber) {
    document.write(`<h2>парних числ в нас більше, їх ${evenNumber}</h2>`)
}
else
document.write(`<h2>Непарних числ в нас більше, їх ${oddNumber}</h2>`)
}