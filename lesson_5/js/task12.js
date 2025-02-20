// Задача 12. Ігровий автомат. Випадково вибираємо зображення у 3 позиціях. Вибір у кожній позиції вибирається як одне з чотирьох зображень. Вивести ці зображення і повідомити виграш користувача (три перших зображення 100 грн, три других – 200, три третіх – 500, три четвертих зображення – 1000грн). Використати цикли і switch (для вибору зображення за номером).

if (confirm('start?')) {
    let firstImage = "img/slot1.jpg"
    let secondImage = "img/slot2.jpg"
    let thirdImage = "img/slot3.jpg"
    let image4Th = "img/slot4.jpg"
    document.write('<ul class="list-task12">')
    let slot1
    let slot2
    let slot3
    for (let i = 1; i <= 3; i++) {
        let randomImage = Math.floor(Math.random() * (4)) + 1
        switch (randomImage) {
            case 1: document.write(`<li class="list-task12__item"><img src="${firstImage}" alt="картинка"></li>`)
                break;
            case 2: document.write(`<li class="list-task12__item"><img src="${secondImage}" alt="картинка"></li>`)
                break;
            case 3: document.write(`<li class="list-task12__item"><img src="${thirdImage}" alt="картинка"></li>`)
                break;
            case 4: document.write(`<li class="list-task12__item"><img src="${image4Th}" alt="картинка"></li>`)
                break
            default:
                break;
        }
        if (i === 1) {
            slot1 = randomImage
        }
        else if (i === 2)
            slot2 = randomImage
        else if (i === 3)
            slot3 = randomImage
        
    }
    document.write('</ul>')
    if (slot1 === slot2 && slot2 === slot3) 
        {
            switch (slot1) {
                case 1: document.write('<h2 class="prize">Ваш виграш склав 100грн</h2>')
                    break;
                case 2: document.write('<h2 class="prize">Ваш виграш склав 200грн </h2>')
                    break;
                case 3: document.write('<h2 class="prize">Ваш виграш склав 500грн </h2>')
                    break;
                case 4: document.write('<h2 class="prize">Ваш виграш склав 1000грн </h2>')
                
            }
        }
    else
        document.write('<h2 class="prize">Ви нічого не виграли, крутіть далі</h2>')
}