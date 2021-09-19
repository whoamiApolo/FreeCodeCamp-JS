function testLogicaOr(val) {
    if(val > 20 || val < 10) {
        return "Outside"
    }
    return "Inside"
}

/* 
if (val > 20) {
  return "No";
}
if (val < 10) {
  return "No";
}
return "Yes";
*/
  
  console.log(testLogicaOr(0))      //Outside
  console.log(testLogicaOr(9))      //Outside
  console.log(testLogicaOr(10))     //Inside
  console.log(testLogicaOr(15))     //Inside
  console.log(testLogicaOr(19))     //Inside
  console.log(testLogicaOr(20))     //Inside
  console.log(testLogicaOr(21))     //Outside
  console.log(testLogicaOr(25))     //Outside