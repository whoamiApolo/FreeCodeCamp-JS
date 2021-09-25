function caseInSwitch(val) {
  let answer = ""
  switch(val) {
    case 1: //Valores case são testados com o operador de igualdade estrita (===).
      answer = "Alpha"
      break
    case 2:
      answer = "Beta"
      break
    case 3:
      answer = "Gamma"
      break
    case 4:
      answer = "Delta"
      break
  }

  return answer;
}

console.log(caseInSwitch(1))
console.log(caseInSwitch(2))
console.log(caseInSwitch(3))
console.log(caseInSwitch(4))