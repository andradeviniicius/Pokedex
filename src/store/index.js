import { configureStore } from "@reduxjs/toolkit";

import pokedexReducer from "./pokedex";
import pokeNewsReducer from "./pokeNews";

const store = configureStore({
  reducer: { pokedex: pokedexReducer, pokeNews: pokeNewsReducer },
});

export default store;
