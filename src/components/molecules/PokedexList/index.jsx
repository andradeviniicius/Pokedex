import { useEffect, useState, useRef } from "react";
import { getPokemonData } from "@/services/api";
import { PokedexItem, LoadingSpinner } from "@atoms";
import { useSelector } from "react-redux";

import "./pokedexList.scss";

export default function PokedexList() {
  const allPokemons = useSelector((state) => state.allPokemons);
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dataHasEnd, setDataHasEnd] = useState(false);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const spinnerRef = useRef();

  useEffect(() => {
    const fetch = async () => {
      let slicedPokemons;
      if (end >= allPokemons.length) {
        slicedPokemons = allPokemons.slice(start, allPokemons.length);
        setDataHasEnd(true);
      } else {
        slicedPokemons = allPokemons.slice(start, end);
      }
      await loadingPokemon(slicedPokemons);
      addObserver();
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
    console.log(pokemons);
    setPokemonData((state) => {
      return state.concat(pokemons);
    });
    setIsLoading(false);
  };

  const addObserver = () => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((elements) => {
      const spinner = elements[0];

      if (spinner.isIntersecting && !isLoading) {
        setStart((state) => {
          return (state = state + 10);
        });
        setEnd((state) => {
          return (state = state + 10);
        });
        setIsLoading(true);
      }
    }, options);

    if (spinnerRef.current) {
      observer.observe(spinnerRef.current);
    }
  };

  return (
    <>
      <ul className="pokedex__list">
        {pokemonData.map((item) => {
          return (
            <PokedexItem
              key={item.id}
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
