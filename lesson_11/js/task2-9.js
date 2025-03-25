// 9) упорядкувати тижні (рядки) за спаданням суми елементів у рядку (тобто при порівнянні двох рядків треба знайти суму кожного з рядків і порівнювати ці суми, на основі цих сум буде зрозуміло, який з елементів повинен іти раніше).
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
      randomArr.sort((week1,week2) => {
          let sumWeek1 = week1.reduce((accum, el)=> accum+el)
          let sumWeek2 = week2.reduce((accum, el)=> accum+el)
          if (sumWeek1 > sumWeek2) return -1
          else if(sumWeek1 < sumWeek2) return 1
          else return 0
      }
  )
  return randomArr
  
  }
  console.log(getSortWeeks(getFewRowsArray()));
}
