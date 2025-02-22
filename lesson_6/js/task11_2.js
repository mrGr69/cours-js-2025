// 11. Написати програму, що виводить на екран таблицю множення на k (k вводиться з клавіатури).
if (confirm("start")) {
    let k = parseInt(prompt("введи к"));
    for (let n = 1; n <= 10; n++) {
        document.write(`<h2>${n} * ${k} = ${n*k}</h2>`)
    }
}
