const myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

/* 
   0       1       2        < índice
   1 2     1 2     1 2 
[1,2,3] [4,5,6] [7,8,9]
*/

const myData = myArray[2][1]; 

console.log(myData) // 8