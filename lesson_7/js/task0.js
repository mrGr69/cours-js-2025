// Задача 0. Створити функцію, яка за номером місяця повертає пору року, до якої відноситься цей місяць.
if (confirm('start')) {
    function getMonth(month) {
        let result
        switch (month) {
            case 12: 
            case 1:   
            case 2: result = 'зима'
                break
            case 3: 
            case 4:
            case 5: result = 'весна'   
                break;
            case 6:
            case 7:
            case 8: result = 'літо'
                break
            case 9:
            case 10:
            case 11: result = 'осінь'
                break
            default: result = 'такого не існує'
                break;
        }
        return result
    }
    let numberMonth = parseInt(prompt('введи номер місяця'))
    alert(`зараз у нас ${getMonth(numberMonth)}`)
}