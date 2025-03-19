// let tempList = [12, 32, 43, 345, 54, 76,34,89,12,94,27,63]
// const hulfYear = Math.floor(tempList.length/2)
// tempList = [...tempList.slice(hulfYear), ...tempList.slice(0,hulfYear)]
// console.log(tempList);
// let r = tempList.indexOf(54)
// console.log(r);

let tempList = [12, -5, 43, 345, -3, 76,-2,89,12,94,27,63]
const p = tempList.reduce((prevProd, el) => el<0?prevProd*el:prevProd)
console.log(p);
