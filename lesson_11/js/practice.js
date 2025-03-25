function getRandomArr(min=-500, max=500, numberValue = 20) {
    let randomArr = []
    for (let i = 0; i < numberValue; i++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
            randomArr.push(randomNumber)
        }
        return randomArr
}
// спочатку мінусові, потім додатні
function getsort(array) {
    console.log(array);
    
    array.sort((a,b) => {
        let result
        if (a<0 && b<0) result = -1
        else if(a>0 &&b<0) result = 1
        else result = 0
    return result
    })
    return array
}
console.log(getsort(getRandomArr()));