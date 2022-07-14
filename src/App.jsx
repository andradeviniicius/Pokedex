import { useEffect } from "react";

import { Route, Routes } from "react-router-dom";

import { useDispatch } from "react-redux/es/exports";

import { pokedexActions } from "@reduxStore/pokedex.js";
import { getAllPokemons } from "@allServices/pokedexApi";

import {
  HomePage,
  PokedexPage,
  DetailArticlePage,
  DetailPokemonPage,
} from "@pages";
import { NotFoundPage } from "./components/organisms";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetch = async () => {
      const pokemons = await getAllPokemons();
      if (pokemons) {
        dispatchHandler(pokemons);
      }
    };

    fetch();
  }, []);

  const dispatchHandler = (pokemons) => {
    dispatch(pokedexActions.fillPokemons({ pokemons: pokemons }));
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokedex" element={<PokedexPage />} />
      <Route path="/detailPokemon" element={<DetailPokemonPage />} />
      <Route
        path="/detailArticle/:articleIndex"
        element={<DetailArticlePage />}
      />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
