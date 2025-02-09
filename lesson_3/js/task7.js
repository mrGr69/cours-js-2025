// З клавіатури вводиться номер місяця. Вивести до якої пори він відноситься
const NumberMonght = parseInt(prompt("Введіть номер місяця"));
let NameMonght;
switch (NumberMonght) {
  case 12:
  case 1:
  case 2:
    NameMonght = "Зима";
    break;

  case 3:
  case 4:
  case 5:
    NameMonght = "весна";
    break;

  case 6:
  case 7:
  case 8:
    NameMonght = "літо";
    break;

  case 9:
  case 10:
  case 11:
    NameMonght = "осінь";
    break;

  default:
    NameMonght = "Такого місяця не існує";
    break;
}
alert(`Ти вибрав пору року: ${NameMonght}`);
