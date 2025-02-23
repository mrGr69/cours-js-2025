// 11. Вивести на екран усі двоцифрові числа, у яких перша цифра є більшою або рівною за другу.
if (confirm('start')) {
    let goodNum
    let divisor
    for (let i = 10; i < 100; i++) {
        
        goodNum = Math.trunc( i / 10)
        divisor =  i % 10
        if (goodNum >= divisor) {
            document.write(`<h2>${i}</h2>`)
        }
    }
}
