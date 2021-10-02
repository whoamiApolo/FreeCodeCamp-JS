/* 
Objetos podem ser pensados como armazenamento de chave/valor, como um dicionário. Se você tem um dado tabular, você pode usar um objeto para pesquisar valores ao invés de uma instrução switch ou uma cadeia de if/else. Isso é mais útil quando você sabe que o seu dado de entrada é limitado para um certo intervalo.
*/

function phoneticLookup(val) {
  var result = ""

  var lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result = lookup[val]

  return result
}

console.log(phoneticLookup("charlie"))
