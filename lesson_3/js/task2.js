// З клавіатури вводиться ціна товару і кількість грошей. Якщо грошей не вистачає то відмовляємо у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.
// обчислення
let PriceProduct = parseFloat(prompt('введіть ціну товару', '10'))
let MonayHave =  parseFloat(prompt('введіть кількість грошей', '12'))
// let Ostacha = (MonayHave - 1) % PriceProduct + 1
const Lotoreya = 4
let Remainder = MonayHave - PriceProduct
if (MonayHave < PriceProduct)
    alert('Недостатньо коштів')
else if (Lotoreya <= (MonayHave - PriceProduct))
    {
        alert('вам вистачає ще на лоторею)')
    }
    else
    alert('дякуємо за покупку')