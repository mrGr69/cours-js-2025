// 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.
if (confirm('start')) {
    function getRandomArr(min=1, max=10000, numberValue = 20) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    function getElementIndexOfMore1000(arrayMaps) {
        // console.log(arrayMaps);
        // let indexOfElementMore1000 = arrayMaps.filter(x => x > 1000).map(index => index)
        let indexOfElementMore1000 = arrayMaps
        .map((el, index) => index) //це у нас видає індекси 0 1 2 3 ..
        .filter((el,index) => arrayMaps[index]>1000) //це у нас фільтрує уже самі індекси на основі основного масиву
    // хух
        return indexOfElementMore1000
    }
    console.log(getElementIndexOfMore1000(getRandomArr()));
}

