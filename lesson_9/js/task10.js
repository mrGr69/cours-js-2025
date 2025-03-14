if (confirm('start')) {
    // Дано масив цін у грн. Податок складає 20%. Сформувати масив, який буде містити величину сплаченого податку у грн.
    function getRandomArr(min = 200, max = 1000, numberValue) {
        let randomArr = []
        for (let i = 0; i < numberValue; i++) {
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
            randomArr.push(randomNumber)
        }
        return randomArr
    }
    const getTaxArray = (prices) => prices.map( x => (x * 0.2).toFixed(1))
    console.log(getTaxArray(getRandomArr(200,1000,20)));
    
}