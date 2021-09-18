/* 
1 !=  2     true
1 != "1"    false
1 != '1'    false
1 != true   false
0 != false  false
*/

function testNotEqual(val){
    if(val != 99) {
        return "Not Equal"
    }
    return "Equal"
}

console.log(testNotEqual(99))
console.log(testNotEqual("99"))
console.log(testNotEqual(12))
console.log(testNotEqual("12"))
console.log(testNotEqual("bob"))
