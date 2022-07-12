import { MainTitle, SearchInput } from "@atoms";
import {filterPokemon} from "@utils";
import "./homeSearch.scss";

import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokedexActions } from "@reduxStore"

const HomeSearch = () => {
  const allPokemons = useSelector((state) => state.pokedex.allPokemons);
  const inputRef = useRef();
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    const filteredPokemon = allPokemons.filter((e) => {
      return filterPokemon(e, inputRef.current.value);
    });
    console.log(filteredPokemon);
    dispatch(pokedexActions.setPokeNameSearch({ newPokeSearch: filteredPokemon }));
  }
  return (
    <form onSubmit={submitHandler} className="homeHeader__form">
      <MainTitle
        textContent="What Pokemon
are you looking for?"
      />
      <SearchInput setRef={inputRef} />
    </form>
  );
};

export default HomeSearch;
