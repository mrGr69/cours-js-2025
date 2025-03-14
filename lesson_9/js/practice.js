let numbersTemp = [3, 4, 7, -12, 43,-12, 54, -12, 23, 11, -54, -5, 6]

function chekTempList(arr, messageCreattor) {
    const msgList =[]
    for (const tpr of arr) {
        const message = messageCreattor(tpr)
        msgList.push(message)
    }
    return  
}
const res = chekTempList(numbersTemp, (t) => t < 17 ? 'холодно': 'жарко')

document.writeln(res) 