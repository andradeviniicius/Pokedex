const url = "https://pokeapi.co/api/v2/";

export default async function getAllPokemons() {
  const apiUrl = url + "pokemon";
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Error!");
  }

  const data = await response.json();
  const results = data.results;

  const pokemons = [];

  for (const key in results) {
    pokemons.push({
      id: key,
      name: results[key].name,
      url: results[key].url,
    });
  }

  return pokemons;
}
