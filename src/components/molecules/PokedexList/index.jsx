import { useEffect, useState } from "react";
import { getPokemonData } from "@allServices/pokedexApi";
import { PokedexItem } from "@atoms";
import { useSelector } from "react-redux";

import "./pokedexList.scss";

export default function PokedexList() {
  const allPokemons = useSelector((state) => state.pokedex.allPokemons);
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      await loadingPokemon(allPokemons);
    };

    fetch();
  }, []);

  const loadingPokemon = async (data) => {
    const pokemon = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemonData(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData(pokemon);
  };

  return (
    <ul className="pokedex__list">
      {pokemonData.map((item) => {
        return (
          <PokedexItem
            key={item.id}
            pokeId={item.id}
            pokeName={item.name}
            pokeImage={item.sprites.other["official-artwork"]["front_default"]}
            pokeType={item.types}
          />
        );
      })}
    </ul>
  );
}
