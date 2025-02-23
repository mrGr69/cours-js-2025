// У бригаді, що працює на сінокосі, є N сінокосарок. Перша сінокосарка працювала m годин, а кожна наступна на 10 хв більше, ніж попередня. Скільки годин працювала вся бригада?
if (confirm('start')) {
    let numberSinokosarok = parseInt(prompt('скільки сінокосарок?'))
    let timeWorkSinokosarok = parseInt(prompt('скільки перша працює?'))
    let counter = 0
    for (let i = 1; i <= numberSinokosarok; i++) {
        counter+=10
    }
    counter /=60
    timeWorkSinokosarok +=counter
    console.log(timeWorkSinokosarok)
}