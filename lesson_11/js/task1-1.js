// номери рядків від 0 до половини, стовпці від 0 до половини
if (confirm('start')) {
    let generalArray = [
    [17, 43, 54, 97, 73, 91, 74, 77, 74, 84],
    [60,  3, 62, 42, 96, 96, 16, 85, 56, 25],
    [65, 38, 97, 43,  6, 57, 59, 69, 61, 95],
    [34, 79, 66, 83, 74, 61, 23, 56, 98, 91],
    [ 4, 35, 19, 76, 17,  7, 43, 40, 10, 89],
    [35, 12, 17,  7,  4, 71, 66, 70, 71, 50],
    [79,  1,  7, 78, 78, 56, 23, 38, 96,  7],
    [25, 90,  2,  7, 88, 15, 92, 17, 34, 62],
    [71, 48, 83, 63, 81,  6, 70, 35, 53, 55],
    [39, 81, 11, 55, 57, 10,  5, 99, 35, 91]
    ]
    function getFirstQuarter(randomArr) {
        let sumFirstQuarter = 0
        for (let row = 0; row < randomArr.length/2; row++) {
            for (let column = 0; column < randomArr[column].length/2; column++) {
                sumFirstQuarter += randomArr[row][column] 
            }
        }
        return sumFirstQuarter  
    }
    console.log(getFirstQuarter(generalArray));
}


