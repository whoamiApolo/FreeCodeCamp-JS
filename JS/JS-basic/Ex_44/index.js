let myArray, removedFromMyArray;
myArray = [["John", 23], ["dog", 3]]

/* 
shift() remove o primeiro elemento ao invés do último.
*/

removedFromMyArray = myArray.shift()

/* 
["John", 23]
*/

console.log(removedFromMyArray)

/* 
["dog", 3]
*/

console.log(myArray)