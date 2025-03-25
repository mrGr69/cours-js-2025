// 6) сформувати загальний список (одновимірний масив) зі значенням, які що більші за 200
if (confirm('start')) {
    function getFewRowsArray(min = 50, max = 300, row = 10, column = 7) {
        let randomArr = []
        for (let i = 0; i < row; i++) {
            randomArr.push([])
            for (let index = 0; index < column; index++) {
                let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min            
                randomArr[i].push(randomNumber)
            }
        }
        return randomArr
    }
        
        let getArrMore200 = (randomArr) => randomArr.flat().filter(el => el>200)
    console.log(getArrMore200(getFewRowsArray()));
}
