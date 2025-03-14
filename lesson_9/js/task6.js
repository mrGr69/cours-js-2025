if (confirm('start')) {
    // 6.Дано масив елементів. Усі елементи, які більші за перший елемент помножити на 2
    function getElementArray() {
        let elemntArray = []
        let element = 0
    while (true){
        element = parseInt(prompt('введіть число для масиву'))
        if (isNaN(element)) break
        elemntArray.push(element)
    }    
        return elemntArray
    }
    let array = getElementArray()
    function getMoreOneElement(elemntArray) {
            elemntArray.forEach((element, index, baseArray ) => {
                if (baseArray[0] < element) {
                    baseArray[index] *=2               
                }
            });     
            return elemntArray
        };
    console.log(getMoreOneElement(array));
    
    
}