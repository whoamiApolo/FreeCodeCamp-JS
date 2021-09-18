/* 
Igualdade           ==
Igualdade estrita   ==
*/

function compareEquality(a, b) {
    if(a === b) {
        return "Equal"
    }
    return "Not Equal"
}

console.log(compareEquality(10, "10"))
console.log(typeof(compareEquality(10, "10")))