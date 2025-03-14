if (confirm('start')) {
    // 9. Дано масив імен. Сформувати масив з перших літер цих імен.
    function getArrNames(lengthName) {
        let arrayNames = []
        for (let i = 0; i < lengthName; i++) {
            let name = prompt(`введіть ${i+1} ім'я`)
            arrayNames.push(name)
        }
        return arrayNames
    }
    const getFirstLetterName = (arrayNames) => arrayNames.map(x=> x[0])
    let amountNumes = parseInt(prompt('введи кількість імен'))
    console.log(getFirstLetterName(getArrNames(amountNumes)));
    
}