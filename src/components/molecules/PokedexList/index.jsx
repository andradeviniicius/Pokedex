import { useEffect, useState, useRef } from "react";
import { getPokemonData } from "@/services/api";
import { PokedexItem, LoadingSpinner } from "@atoms";
import { useSelector } from "react-redux";

import "./pokedexList.scss";

export default function PokedexList() {
  const allPokemons = useSelector((state) => state.allPokemons);
  const [pokemonData, setPokemonData] = useState([]);

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);

  const spinnerRef = useRef();

  useEffect(() => {
    const fetch = async () => {
      const slicedPokemons = allPokemons.slice(start, end);
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
  };

  const addObserver = () => {
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((elements) => {
      const spinner = elements[0];

      if (spinner.isIntersecting) {
        setStart(10);
        setEnd(20);
      }
    }, options);

    if (spinnerRef.current) {
      observer.observe(spinnerRef.current);
    }
  };

  const onClickHandler = () => {
    setStart(10);
    setEnd(20);
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

      <LoadingSpinner ref={spinnerRef} />
    </>
  );
}
