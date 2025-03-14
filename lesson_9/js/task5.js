if (confirm('start')) {
    // 5.Дано масив елементів. Знайти добуток додатних елементів
    function getRandomArr(min= -10, max = 10, numberValue = 10) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    function getDobutockTrueNumbers(randomArr) {
        console.log(randomArr);
        let dobutockArray = 1
        for (const element of randomArr) {
            if (element > 0) dobutockArray *= element
        }
        return dobutockArray
    }
    console.log(getDobutockTrueNumbers(getRandomArr()));
    
    
    
}