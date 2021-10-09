let myArray = []

for (let i = 1; i <= 5; i++)
myArray.push(i)
console.log(myArray) // [1, 2, 3, 4, 5]
/* 
A opção não é útil, pois iniciará com o primeiro indice vázio. Diante disso, utilizamos o .push(i)
myArray[i] = i 
console.log(myArray) [ , 1, 2, 3, 4, 5 ]
*/