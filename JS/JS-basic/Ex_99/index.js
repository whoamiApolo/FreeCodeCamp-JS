function multiplyAll(arr) {
    let product = 1

    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr[i].length; j++){
            console.log(product *= arr[i][j] )
        }
    }

    return product
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]])
/* 
Ele fará a multiplicação de product * o indice de cada array:
product = 1
1 * 1 = 1 
1 * 2 = 2
2 * 3 = 6
6 * 4 = 24
24 * 5 = 120
120 * 6 = 720
720 * 7 = 5040
*/