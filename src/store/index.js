import { configureStore, createSlice } from "@reduxjs/toolkit";

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState: {
    allPokemons: [],
    singlePokemon: {},
  },
  reducers: {
    fillPokemons(state, action) {
      console.log("redux funciona");
    },
  },
});

const store = configureStore({
  reducer: pokedexSlice.reducer,
});

export const pokedexActions = pokedexSlice.actions;
export default store;
