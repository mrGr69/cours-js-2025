// Знайти суму цифр числа, що знаходяться між першою цифрою 7 і останньою цифрою 7 (у числі є всього дві цифри 7, наприклад: 2679328712)
if (confirm('start')) {
    let summ   =0
    const number = String(2679328712)
    const first7 = number.indexOf('7')
    const last7 = number.lastIndexOf("7")
    for (let index = first7 + 1; index < last7; index++) {
        // console.log(number[index])
        summ += parseInt(number[index])
        console.log(summ);
        
    }    
}


