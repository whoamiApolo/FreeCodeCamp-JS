/* 
Se a propriedade do objeto que você está tentando acessar possui um espaço no seu nome, você precisará usar a notação de colchetes.
*/
const testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
}

const entreeValue  = testObj["an entree"]
const drinkValue = testObj["the drink"]

console.log(drinkValue + "\n" + entreeValue)