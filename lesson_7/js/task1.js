// Задача 1. Створити функцію, яка за номером місяця повертає його назву.
if (confirm('start')) {
    function getNameMonth(month) {
        let result
        switch (month) {
            case 1: result = 'січень'
                break;
            case 2: result = 'лютий'
                break;
            case 3: result = 'березнь'
                break;
            case 4: result = 'квітень'
                break;
            case 5: result = 'травень'
                break;
            case 6: result = 'червень'
                break;
            case 7: result = 'липень'
                break;
            case 8: result = 'серпень'
                break;
            case 9: result = 'вересень'
                break;
            case 10: result = 'жовтень'
                break;
            case 11: result = 'листопад'
                break;
            case 12: result = 'грудень'
                break;
            default: result = 'не вірна цифра'
                break;
        }
        return result
    }
    let howSeasons = parseInt(prompt('який місяць цікавить?'))
    alert(`тебе зацікавив місяць - ${getNameMonth(howSeasons)}`)
}