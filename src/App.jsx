import { useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import { pokedexActions } from "./store";
import { getAllPokemons } from "./services/api";
import { HomePage, PokedexPage } from "@pages";
import { Route, Routes } from "react-router-dom";

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
    </Routes>
  );
}

export default App;
