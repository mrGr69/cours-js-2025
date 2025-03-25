// 8) відсортувати тижні (рядки) за спаданням максимального елементи у цьому тижні (рядку), тобто при порівнянні рядків потрібно порівнювати максимальні елементи у кожному з цих рядків
if (confirm('start')) {
  function getFewRowsArray(min = 0, max = 100, row = 10, column = 7) {
    let randomArr = [];
    for (let i = 0; i < row; i++) {
      randomArr.push([]);
      for (let index = 0; index < column; index++) {
        let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArr[i].push(randomNumber);
      }
    }
    return randomArr;
  }
  function getSortWeeks(randomArr) {
    randomArr.sort((week1, week2) => {
      if (Math.max(...week1) > Math.max(...week2)) return -1;
      else if (Math.max(...week1) < Math.max(...week2)) return 1;
      else return 0;
    });
    return randomArr
  }
  console.log(getSortWeeks(getFewRowsArray()));
}

