// Задача 6. Дано послідовність цін товарів та назв (у окремих масивах). Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).
// Приклад збереження даних
// let productsPrices = [1000, 20, 31]
// let productsTitles = [‘cheese’, ‘juice’, ‘bread’]


if (confirm('start')) {
    function getArrProduct() {
        
        let product
        let arrayProduct = []
        do {
            product = prompt('введи назву продукта')
            if (product !== null) {
                arrayProduct.push(product)
            }
        } while (product !== null);
        return arrayProduct
    }
    let arrayProduct = getArrProduct()
    function getRandomPriceArr(min, max, numberValue) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
            randomArr.push(randomNumber)
        }
        return randomArr
    }
    let randomPrice = getRandomPriceArr(20, 100, arrayProduct.length)
    function getWhatUserCanBuy(productArr, priceArr, userhave) {
        let arrUserCanBuy = []
        for (let i = 0; i < productArr.length; i++) {
            if (priceArr[i] <= userhave) {
                arrUserCanBuy.push(productArr[i])
            }
            
        }
        return arrUserCanBuy
    }
    let userMoneyHave = parseFloat(prompt('введіть скільки грошей ви маєте'))
    alert(getWhatUserCanBuy(arrayProduct, randomPrice, userMoneyHave))
}