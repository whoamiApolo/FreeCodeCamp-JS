function testSize(num) {
    if(num < 5) {
        return "Tiny"
    } else if(num < 10) {
        return "Small"
    } else if(num < 15) {
        return "Medium"
    } else if(num < 20) {
        return "Large" 
    } else {
        return "Huge"
    }

    return "Change me"
}

console.log(testSize(7))
console.log(testSize(0))
console.log(testSize(4))
console.log(testSize(5))
console.log(testSize(8))
console.log(testSize(10))
console.log(testSize(14))
console.log(testSize(15))
console.log(testSize(17))
console.log(testSize(20))
console.log(testSize(25))