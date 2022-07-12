export function filterPokemon(arrayToFilter, keyWord) {
  return arrayToFilter.name.toLowerCase().indexOf(keyWord.toLowerCase()) === -0;
}