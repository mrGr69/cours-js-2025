// Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити вартість кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.
// вхідні дані
let PriceFirstProduct = parseFloat(prompt("Ціна першого товару", "3.25"));
let AmountFirstProduct = parseInt(prompt("Кількість першого товару", "3"));
let PriceSecondProduct = parseFloat(prompt("Ціна другого товару", "4.5"));
let AmountSecondProduct = parseInt(prompt("Кількість другого товару", "4"));
let PriceThirdProduct = parseFloat(prompt("Ціна третього товару", "5.75"));
let AmountThirdProduct = parseInt(prompt("Кількість третьго товару", "5"));
// обчислення
let SummFirstProduct = PriceFirstProduct * AmountFirstProduct
let SummSecondProduct = PriceSecondProduct * AmountSecondProduct
let SummThirdProduct = PriceThirdProduct * AmountThirdProduct
let FullSummProduct = SummFirstProduct + SummSecondProduct + SummThirdProduct
document.write
(`
    <div class="container">
                <h1 class="container__lable">Це фіскальний чек</h1>
                <ul class="container__summ">
                    <li class="container__s-first first">
                        <h2 class="first__product-amount">Канапки: ${PriceFirstProduct} Х ${AmountFirstProduct}шт</h2>
                        <h3 class="first__total">${SummFirstProduct.toFixed(2)}грн</h3>
                    </li>
                    <li class="container__s-second second">
                        <h2 class="second__product-amount">Помідори: ${PriceSecondProduct} X ${AmountSecondProduct}шт</h2>
                        <h3 class="second__total">${SummSecondProduct.toFixed(2)}грн</h3>
                    </li>
                    <li class="container__s-third third">
                        <h2 class="third__product-amount">Редиска: ${PriceThirdProduct} X ${AmountThirdProduct}шт</h2>
                        <h3 class="third__total">${SummThirdProduct.toFixed(2)}грн</h3>
                    </li>
                </ul>
                <h4 class="container__total">Сумма до сплати ${FullSummProduct.toFixed(2)}</h4>
    </div>
    `)
