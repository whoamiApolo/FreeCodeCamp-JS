function testLogicaAnd(val) {
  if (val >= 25 && val <= 50) {
    return "Yes";
  }
  return "No";
}

/* 
O mesmo efeito pode ser alcançado aninhando uma instrução if dentro de outro if:

if (num > 25) {
      if (num < 50) {
    return "Yes";
  }
}
*/

console.log(testLogicaAnd(0)); //No
console.log(testLogicaAnd(24)); //No
console.log(testLogicaAnd(25)); //Yes
console.log(testLogicaAnd(30)); //Yes
console.log(testLogicaAnd(50)); //Yes
console.log(testLogicaAnd(51)); //No
console.log(testLogicaAnd(75)); //No
console.log(testLogicaAnd(80)); //No
