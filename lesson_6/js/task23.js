// Розпочавши тренування, спортсмен першого дня пробіг 10 км. Щодня він збільшував денну норму на 10% від норми попереднього дня. Який сумарний шлях пробіжить спортсмен за 7 днів? Якого дня вперше спортсмен пробіжить понад 20 км? Якого дня вперше сумарний шлях перевищить 60 км?
if (confirm('start')) {
    let distans = 10
    let counter = 0
    for (let days = 1; days <= 7; days++) {
        distans *=1.1
        counter += distans
        if (distans > 20) {
            alert(`ти подолав 20 км на ${days}-й день`)
            // так і не подолав
        }
        if (counter >= 60) {
            alert(`о боже, ти подолав вже 60 км на ${days}-й день`)
            break
        }
    }
}