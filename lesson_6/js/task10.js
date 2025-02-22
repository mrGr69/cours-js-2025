// 10. Дано натуральні числа від 1 до 50. Знайти суму тих, які діляться на 5 чи 7.
if (confirm('start')) {
    let counter = 0
    for (let num = 1; num <= 50; num++) {
        if (num / 5 || num / 7) {
            counter +=num
        }
    }
    document.write(`сумма буде ${counter}`)
}