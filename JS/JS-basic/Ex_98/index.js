const myArr = [2, 3, 4, 5, 6]
let total = 0
for (let i = 0; i < myArr.length; i++) {
    total += myArr[i]
}

/* 
Aparentemente, o código abaixo não é necessário.
*/
total + myArr[0]
total + myArr[1]
total + myArr[2]
total + myArr[3]
total + myArr[4]

console.log(myArr) // [2, 3, 4, 5, 6]
console.log(total) // 20
