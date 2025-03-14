if (confirm('start')) {
    // 7.Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.
    function getRandomArr(min, max, numberValue) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    let array = getRandomArr(500,2000,5)
    function saleArr30interest(array) {    
        array.forEach((element, index, array )=> {
            if (element>1000) {
                element *=0.7
                array[index] = Math.floor(element)
            }
        });
        return array
    }
    console.log(saleArr30interest(array));
    
}