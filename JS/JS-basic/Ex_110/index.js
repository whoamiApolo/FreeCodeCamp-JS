function countdown(n) {

    if (n < 1) {
        return []
    } else {
        const countArray = countdown(n - 1)
        countArray.unshift(n) // [5, 4, 3, 2, 1] || countArray.push(n)  [1, 2, 3, 4, 5]
        return countArray
    }
}

console.log(countdown(5))

/* 
Outras formas de resoler o exercício:
Opção 1:
   return n < 1 ? [] : [n, ...countdown(n - 1)];
Opção 2:
   return n < 1 ? [] : [n].concat(countdown(n - 1));
*/