function insertDash(word) {
  // TODO: implement the method and return word with dashes
  const vocales = ['a', 'e', 'i', 'o', 'u', ' '];
  let contador = 0;
  let concat = '';
  word.split('').forEach((valor) => {
    if (vocales.includes(valor.toLowerCase())) {
      concat += valor;
      contador = 0;
    } else {
      contador += 1;
      if (contador === 2) {
        concat += `-${valor}`;
        contador = 1;
      } else {
        concat += valor;
      }
    }
  });
  return concat;
}

module.exports = insertDash;
console.log(insertDash("Internationalization"));
