function randomWholeNum() {

/* 
Podemos resolver com apenas uma linha, por exemplo:
return Math.floor(Math.random() * 10)
*/

let x = 0
x += Math.random() * 10
    return Math.floor(x) 
  }

  console.log(randomWholeNum())