// Created to be used in an array method such as .filter() .map() etc
export function filterPokemon(itemOfArray, keyWord) {
  return itemOfArray.name.toLowerCase().indexOf(keyWord.toLowerCase()) === -0;
}

export function addExtraZero(num, totalLenght) {
  return String(num).padStart(totalLenght, "0");
}

export function capitalFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function standardizedDate(receivedDate) {
  return new Date(receivedDate).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });
}
