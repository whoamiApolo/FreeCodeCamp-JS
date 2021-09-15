const equipments = "Axe";

/* 
É possível ter as variáveis local e global com o mesmo nome. 
Quando você faz isso, a variável local tem precedência sobre a variável global.
*/

function myOutfit() {
  const equipments = "Sword";
  return equipments // sem essa linha o resultado será = undefined
}

myOutfit();

console.log(myOutfit());
