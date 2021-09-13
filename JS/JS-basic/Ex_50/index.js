function myLocalScope() {

/* 
Variáveis que são declaradas dentro de uma função, 
assim como parâmetros das funções, possuem escopo local. 
Isso significa que elas são visíveis apenas dentro da função.
*/

    var myVar
    console.log("inside myLocalScope", myVar)
}
myLocalScope()

/* 
myVar não está definida fora do myLocalScope
*/

console.log("outside myLocalScope", myVar)

/* 
Obs.: o console exibirá ReferenceError: myVar is not defined, 
*/