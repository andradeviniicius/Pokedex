import { useEffect, useState } from "react";
import { getPokemonData } from "@/services/api";
import { PokedexItem } from "@atoms";
import { useSelector } from "react-redux";

import "./pokedexList.scss";

export default function PokedexList() {
  const allPokemons = useSelector((state) => state.allPokemons);
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
    <div className="pokedexList">
      {pokemonData.map((item) => {
        return (
          <PokedexItem
            key={item.id}
            pokeId={item.id}
            pokeName={item.name}
            pokeImage={item.sprites["front_default"]}
            pokeType={item.types}
          />
        );
      })}
    </div>
  );
}
