/* 
Às vezes, é útil verificar se a propriedade de um determinado objeto existe ou não.
*/

function checkObj(obj, checkProp) {

    if (obj.hasOwnProperty(checkProp)) {
        return obj[checkProp]
    } else {
        return "Not Found"
    }
}

