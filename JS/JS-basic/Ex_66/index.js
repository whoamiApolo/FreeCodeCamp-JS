/*
4   <= 5    true
'7' <= 7    true
5   <= 5    true
3   <= 2    false
'8' <= 4    false
*/

function testLessOrEqual(val) {
    if(val <= 12) {
        return "Smaller Than or Equal to 12"
    }
    if(val <= 24) {
        return "Smaller Than or Equal to 24"
    }

    return "More Than 24"
}

console.log(testLessOrEqual(0))     //Smaller Than or Equal to 12
console.log(testLessOrEqual(11))    //Smaller Than or Equal to 12
console.log(testLessOrEqual(12))    //Smaller Than or Equal to 24
console.log(testLessOrEqual(23))    //Smaller Than or Equal to 24
console.log(testLessOrEqual(24))    //Smaller Than or Equal to 24
console.log(testLessOrEqual(25))    //More Than 24
console.log(testLessOrEqual(55))    //More Than 24