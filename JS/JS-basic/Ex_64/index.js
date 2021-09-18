/*
6   >=  6       true
7   >= '3'      true
2   >=  3       false
'7' >=  9       false
*/

function testGreaterOrEqual(val) {
    if(val >= 20){
        return "20 or Over"
    }
    if(val >= 10) {
        return "10 or Over"
    }
    return "Less than 10"
}
console.log(testGreaterOrEqual(0))      //Less than 10
console.log(testGreaterOrEqual(9))      //Less than 10
console.log(testGreaterOrEqual(10))     //10 or Over        
console.log(testGreaterOrEqual(11))     //10 or Over
console.log(testGreaterOrEqual(19))     //10 or Over
console.log(testGreaterOrEqual(100))    //20 or Over
console.log(testGreaterOrEqual(21))     //20 or Over

