let myArray = [
  ["John", 23],
  ["dog", 3],
];

/* 
["dog", 3]
*/

myArray.shift();
console.log(myArray);

/* 
.unshift() funciona exatamente como .push(), mas, ao invés de adicionar o elemento ao final do array, unshift() adiciona o elemento no início do array.
*/

myArray.unshift(["Paul", 35]);
console.log(myArray);