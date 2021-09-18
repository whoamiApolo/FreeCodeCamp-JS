/*
5   >  3    true
7   > '3'   true
2   >  3    false
'1' >  9    false
*/

function testGreaterThan(val){
    if(val > 100) {
        return "Over 100"
    }
    if(val > 10) {
        return "Over 10"
    }
    return "10 or Under"
}

console.log(testGreaterThan(0))     //10 or Under
console.log(testGreaterThan(10))    //10 or Under
console.log(testGreaterThan(11))    //Over 10
console.log(testGreaterThan(99))    //Over 10
console.log(testGreaterThan(100))   //Over 10
console.log(testGreaterThan(101))   //Over 100
console.log(testGreaterThan(150))   //Over 100