// Created to be used in an array method such as .filter() .map() etc
export function filterPokemon(itemOfArray, keyWord) {
  return itemOfArray.name.toLowerCase().indexOf(keyWord.toLowerCase()) === -0;
}