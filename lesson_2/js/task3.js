// Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
// ввідні дані 
let PriceProduct = parseFloat(prompt('ціна товару буде?', ''))
let AmountProduct = parseInt(prompt('кількість товару?', ''))
// обчислення
let SummProduct = PriceProduct * AmountProduct
let Podatok = SummProduct * 0.05
// виводимо 
alert(` Сумма покупки буде ${SummProduct} \n Пдв з цієї покупки в нас буде ${Podatok.toFixed(2)}`)
