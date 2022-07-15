const url = "https://pokeapi.co/api/v2/";

export async function getAllPokemons() {
  const apiUrl = url + "pokemon?limit=151&offset=0";
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

export async function getPokemonData(pokemonData) {
  const response = await fetch(pokemonData.url);

  if (!response.ok) {
    throw new Error("Error!");
  }

  const data = await response.json();
  return data;
}

export async function getSinglePokemon(pokemonUrl) {
  const response = await fetch(pokemonUrl);

  if (!response.ok) {
    throw new Error("Error!");
  }

  const data = await response.json();
  return data;
}
