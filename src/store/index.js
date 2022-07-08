import { configureStore, createSlice } from "@reduxjs/toolkit";

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState: {
    allPokemons: [],
    displayPokemons: [],
    singlePokemon: {},
  },
  reducers: {
    fillPokemons(state, action) {
      state.allPokemons = action.payload.pokemons;
    },
  },
});

const store = configureStore({
  reducer: pokedexSlice.reducer,
});

export const pokedexActions = pokedexSlice.actions;
export default store;
