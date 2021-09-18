/* 
3 ===  3    true
3 === '3'   false
*/

function testStrict(val) {
    if (val === 7) {
        return "Equal"
    }
        return "Not Equal"
}

console.log(testStrict(10)) // return "Not Equal"