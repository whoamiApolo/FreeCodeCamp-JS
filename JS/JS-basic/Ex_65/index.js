/* 
2   < 5     true
'3' < 7     true
5   < 5     false
3   < 2     false
'8' < 4     false
*/

function testLessThan(val) {
    if(val < 25) {
        return "Under 25"
    }
    if(val < 55) {
        return "Under 55"
    }
    return "55 or Over"
}

console.log(testLessThan(0))
console.log(testLessThan(24))
console.log(testLessThan(25))
console.log(testLessThan(54))
console.log(testLessThan(55))
console.log(testLessThan(99))