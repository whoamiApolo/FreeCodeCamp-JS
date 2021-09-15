var sum = 0

function addThree() {
    sum += 3
    /* 
    return sum enviará o valor de sum para fora da função.
    Caso contrário o resultado será = undefined 
     */    
}

function addFive() {
    sum += 5
    /* 
    return sum enviará o valor de sum para fora da função.
    Caso contrário o resultado será = undefined 
    */
}

console.log(addThree()) // undefined
console.log(addFive()) // undefined