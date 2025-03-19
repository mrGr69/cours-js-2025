// 5)Підрахувати кількість змін цін
if (confirm('start')) {
  function getRandomArr(min = 1, max = 10000, numberValue = 20) {
    let randomArr = [];
    for (let i = 0; i < numberValue; i++) {
      let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArr.push(randomNumber);
    }
    return randomArr;
  }
  function getChangePriceOfPeriod(randomArr) {
    let amountChange = randomArr.reduce((prevChange, el, index, array) => {
      if (index>0  &&el !== array[index - 1]) {
        return ++prevChange;
      } else return prevChange;
    }, 0);
    return amountChange;
  }
  console.log(getChangePriceOfPeriod(getRandomArr()));
  
}