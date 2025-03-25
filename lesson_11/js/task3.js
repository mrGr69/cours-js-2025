// Задача 3. Морський бій. Випадковим чином на двовимірному полі розміром 6*6 розташовується 5 кораблів. Користувач стріляє вказуючи координати. Гра продовжується поки не потоплено усі кораблі або у користувача не закінчаться снаряди.

// 1) зробимо масив 6*6
// 2) заповнимо його нулями

// 3)рандомно розташуємо 5 кораблів замінюючи нулі на одиниці
//         - спочатку робимо рандоми по х і у координати,
//         - заповнюємо наш массив згідно нових координат кораблів

// 4) юзер починає вводити по черзі координати х ы у
// 5) перевіряємо куди попав, якщо попав то 1 змінюємо на "щось"якщо ні то 0 на "щось"


// поле 6 на 6
if (confirm('start')) {
  function getArra6Of6() {
    let mapArray = [];
    for (let row = 0; row < 6; row++) {
      mapArray.push([]);
      for (let column = 0; column < 6; column++) {
        mapArray[row].push(0)      
      }
    }
    return mapArray
  }
  let mapboat = getArra6Of6()
  // console.log(getArra6Of6());
  
  let boatX = () => Math.floor(Math.random() * (6))
  let boatY = () => Math.floor(Math.random() * (6))
  //робимо кораблі
  function getBoats(map) {
    for (let boat = 0; boat < 5; boat++) {
      let x =boatX()
      let y = boatY()
      map[x].splice(y,1,1)
      //покращити якщо рандоми спывпадають
    }
    return map
   }
  function getUserPlaing(boatMap, amountTry = 5) {
    // console.log(boatMap);
    
    for (let attempt = 1; attempt <= amountTry; attempt++) {
      alert(`в тебе залишилося ${attempt} спроб`)
      let pointX = parseInt(prompt('введи координати по висоті'))
      let pointY = parseInt(prompt('введи координати по ширині'))
      if (boatMap[pointX][pointY] === 1) {
        alert('ти попав')
        boatMap[pointX].splice(pointY,1,5)
      }
      else{
        alert('ти не попав')
        boatMap[pointX].splice(pointY,1,7)
      }
    }
    return boatMap
  }
  function getOutputMapBoats(endmap) {
    let output = '<table border="1" style="border-collapse: collapse; width: 200px; font-size: 18px;">';
    for (let i = 0; i < endmap.length; i++) {
      output += '<tr>';
      for (let j = 0; j < endmap[i].length; j++) {
        let symbol;
        switch (endmap[i][j]) {
          case 0: symbol = '🌊'; break; 
          case 1: symbol = '🛶'; break; 
          case 5: symbol = '⚓'; break; 
          case 7: symbol = '💣'; break; 
        }
        
        
        output += `<td style="border: 1px solid black; padding: 20px; text-align: center;">${symbol}</td>`; 
      }
      output += '</tr>';
    }
    output += '</table>';
    return output;
  }
  
  // getBoats(mapboat); 
  //  console.log(getBoats(mapboat));
  //  console.log(getUserPlaing(getBoats(mapboat)));
  //  document.writeln((getUserPlaing(getBoats(mapboat))))
  document.writeln(getOutputMapBoats(getUserPlaing(getBoats(mapboat))))
  
}