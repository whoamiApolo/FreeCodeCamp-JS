let myArray, removedFromMyArray

myArray = [["John", 23], ["cat", 2]]

/* 
.pop() é usado para remover um valor do final do array.
*/

removedFromMyArray = myArray.pop()

/* 
["cat", 2]
*/

console.log(removedFromMyArray) 

/* 
["John", 23]
*/

console.log(myArray)
