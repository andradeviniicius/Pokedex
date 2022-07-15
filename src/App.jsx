import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux/es/exports";
import { pokedexActions } from "@reduxStore/pokedex.js";
import { pokeNewsActions } from "@reduxStore/pokeNews";
import { getAllPokemons } from "@allServices/pokedexApi";
import { fetchPokeNews } from "@allServices/newsApi";

import {
  HomePage,
  PokedexPage,
  DetailArticlePage,
  DetailPokemonPage,
} from "@pages";

import {
  PokeAbout,
  PokeStats,
  PokeEvolution,
  PokeMoves,
  NotFoundPage,
} from "@organisms";

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
  
  useEffect(() => {
    const getPokeNews = async () => {
      const data = await fetchPokeNews();
      dispatch(pokeNewsActions.fillNews({ news: data.articles }));
    };
    getPokeNews();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokedex" element={<PokedexPage />} />
      <Route path="/pokedex/:pokemonId/*" element={<DetailPokemonPage />}/>
      <Route
        path="/detailArticle/:articleIndex"
        element={<DetailArticlePage />}
        />
      <Route path="*" element={<NotFoundPage />}></Route>
    </Routes>
  );
}

export default App;
