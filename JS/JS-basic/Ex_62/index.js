/* 
3 !==  3    false
3 !== '3'   true
4 !==  3    true
*/

function testStrictNotEqual(val) {
    if(val !== 9) {
        return "Not Equal"
    }
    return "Equal"
}

console.log(testStrictNotEqual(9))
console.log(testStrictNotEqual(10))
console.log(testStrictNotEqual("10"))
console.log(testStrictNotEqual(11))
console.log(testStrictNotEqual(10))