function abTest(a, b) {
    
let answer
if(a < 0 || b < 0){
    console.log(answer) // || return undefined
}

return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2))
}

console.log(abTest(2, 2))
console.log(abTest(2, 2))
console.log(abTest(-2, 2))
console.log(abTest(2, -2))
console.log(abTest(2, 8))
console.log(abTest(3, 3))
console.log(abTest(0, 0))
