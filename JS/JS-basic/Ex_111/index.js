function rangeOfNumbers(startNum, endNum) {

    if (endNum - startNum === 0) {
        return [startNum]
    } else {
        var numbers = rangeOfNumbers(startNum, endNum - 1)
        numbers.push(endNum)
        return numbers
    }
}

console.log(rangeOfNumbers(1, 5)) // [1, 2, 3, 4, 5]
console.log(rangeOfNumbers(6, 9)) // [6, 7, 8, 9]
console.log(rangeOfNumbers(4, 4)) // [4]

/* 
function rangeOfNumbers(startNum, endNum) {
  return startNum === endNum ? [startNum]  

    // A seguir duas alternativas para obter o mesmo resultado

   : [...rangeOfNumbers(startNum, endNum - 1), endNum ];
   : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}
   */