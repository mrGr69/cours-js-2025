// З клавіатури вводиться номер дня тижня. Вивести на екран назву дня.
const NumberDayWeek = parseInt(prompt("введіть номер тижня"));
let NameDayWeek
switch (NumberDayWeek) {
    case 1: NameDayWeek = 'понеділок'
    break;
    
    case 2: NameDayWeek = 'вівторок'
    break;
    
    case 3: NameDayWeek = 'середа'
    break;
    
    case 4: NameDayWeek = 'четверг'
    break;
    
    case 5: NameDayWeek = 'пятниця'
    break;
    
    case 6: NameDayWeek = 'субота'
    break;
    
    case 7: NameDayWeek = 'неділя'
    break;    

    default: NameDayWeek = 'щось не то'
    break;
}
alert(`Ти вибрав таки день: ${NameDayWeek}`)