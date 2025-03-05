// let price = [12,34,43,12,43,12]
// let summ = 0
// for (let i = 0; i <= 5; i++) {
//     summ+=price[i]
    
// }
// console.log(summ)
if (condition) {
    let amountUserAge = parseInt(prompt('кількість юзерів'))
    let userAge = [1,2]
    for (let i = 0; i < amountUserAge; i++) {
        const Age = parseInt(prompt(`введи вік ${i} юзера`))
        userAge.push(Age)
    }
    console.log(userAge[3 ]);
}
