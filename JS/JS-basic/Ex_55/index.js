function nextInLine(arr, item){
    arr.push(item)
    return arr.shift()
}

const testArr = [1, 2, 3, 4, 5]

/* 
 - Imprimi o array e nada acontece, pois não houve nenhuma alteração.
*/
console.log("Before: " + JSON.stringify(testArr)) // Before: [1,2,3,4,5]

console.log("Shift: " + nextInLine(testArr, 6)) // push add 6

/* 
 - Imprimi  array novamente. No entanto, dessa vez, removeu o primeiro elemento do array e, depois disso, adicionou um elemento ao final da lista
*/
console.log("After: " + JSON.stringify(testArr)) // After: [2,3,4,5,6]