// Щоденно спортзал відвідує певна кількість людей. Користувач вводить такі дані: скільки людей відвідало спортзал за день та вік кожного відвідувача. Потрібно вивести вік найстаршого та наймолодшого відвідувачів, а також середній вік всіх відвідувачів спортзалу за день.
if (confirm('start')) {
    let minAge = Infinity
    let maxAge = 0 
    let amountPeopleDay
    let agePeopleDay
    let averageAge = 0
    // let counter
    do {
        amountPeopleDay = parseInt(prompt('введи скільки людей сьогодні було у залі'))
        for (let num = 1; num <= amountPeopleDay; num++) {
            agePeopleDay = parseInt(prompt(`введи скліки років ${num}-ій людині`))        
            // counter++
            averageAge +=agePeopleDay
            if (agePeopleDay > maxAge ) {
                maxAge = agePeopleDay
            }
            if (agePeopleDay < minAge) {
                minAge = agePeopleDay
            }
        }    
        averageAge /= amountPeopleDay
            alert(`середній вік за сьогоднішній день у нас ${averageAge}`)
    } while (!isNaN(amountPeopleDay));
    alert(`наймолодшому було ${minAge} років, найстаршому ${maxAge} років`)
}
