// 11)Знайти індекс першої ціни, що більше за 1000
if (confirm('start')) {
    function getRandomArr(min=1, max=10000, numberValue = 20) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
                randomArr.push(randomNumber)
            }
            return randomArr
        }
    let firstIndexMore1000 = (arrayPrice) => arrayPrice.findIndex(el => el>1000)
    console.log(firstIndexMore1000(getRandomArr()));
    
}