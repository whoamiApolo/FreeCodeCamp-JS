function switchOfStuff(val) {
  let answer = ""
  switch (val) {
    case "a":
      answer = "apple"
      break
    case "b":
        answer = "bird"
        break
    case "c":
        answer = "cat"
        break
    default:
        answer = "stuff"
        break
  }

  return answer
}

console.log(switchOfStuff("a"))
console.log(switchOfStuff("b"))
console.log(switchOfStuff("c"))
console.log(switchOfStuff("d"))
console.log(switchOfStuff(4))