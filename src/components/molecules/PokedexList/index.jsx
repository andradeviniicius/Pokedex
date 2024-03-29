import { useEffect, useState, useRef } from "react";
import { getPokemonData } from "@allServices/pokedexApi";
import { PokedexItem, LoadingSpinner } from "@atoms";
import { useSelector } from "react-redux";
import useLazy from "@/hooks/useLazy";

import { filterPokemon } from "@utils";

import { useLocation } from "react-router-dom";

import "./pokedexList.scss";

export default function PokedexList() {
  const loc = useLocation();

  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataHasEnd, setDataHasEnd] = useState(false);

  const [start, end, addObserver] = useLazy(10, isLoading, setIsLoading);

  const spinnerRef = useRef();

  let allPokemons = useSelector((state) => state.pokedex.allPokemons);

  useEffect(() => {
    if (loc.search.includes("?q=")) {
      allPokemons = allPokemons.filter((item) => {
        return filterPokemon(item, loc.search.slice(3));
      });
    } else {
      loc.search = "";
    }
    const fetch = async () => {
      let slicedPokemons;
      if (end >= allPokemons.length) {
        slicedPokemons = allPokemons.slice(start, allPokemons.length);
        setDataHasEnd(true);
      } else {
        slicedPokemons = allPokemons.slice(start, end);
      }
      await loadingPokemon(slicedPokemons);
      addObserver(spinnerRef.current);
    };
    fetch();
  }, [start, end]);

  const loadingPokemon = async (data) => {
    const pokemons = await Promise.all(
      data.map(async (pokemon) => {
        const pokemonRecord = await getPokemonData(pokemon);
        return pokemonRecord;
      })
    );
    setPokemonData((state) => {
      return state.concat(pokemons);
    });
    setIsLoading(false);
  };

  return (
    <>
      <ul className="pokedex__list">
        {pokemonData.map((item, index) => {
          return (
            <PokedexItem
              key={index}
              pokeId={item.id}
              pokeName={item.name}
              pokeImage={
                item.sprites.other["official-artwork"]["front_default"]
              }
              pokeType={item.types}
            />
          );
        })}
      </ul>

      {!dataHasEnd && <LoadingSpinner ref={spinnerRef} />}
    </>
  );
}
