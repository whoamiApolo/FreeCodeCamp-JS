var x, y, par, impar;
x = 5;
y = 2;
console.log(Math.floor(x / y));

par = prompt("Informe um número");

 if (par % 2 == 0) {
  console.log("par");
} else if(par % 2 == 1) { 
console.log("impar");
} else {
    console.log("Valor inválido. Favor digitar números inteiros"); //flot caí aqui também :(
} 
