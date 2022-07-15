import { createSlice } from "@reduxjs/toolkit";

const pokedexSlice = createSlice({
  name: "pokedex",
  initialState: {
    allPokemons: [],
    singlePokemon: {},
    pokeSearch: [],
  },
  reducers: {
    fillPokemons(state, action) {
      state.allPokemons = action.payload.pokemons;
    },
  },
});

export const pokedexActions = pokedexSlice.actions;
export default pokedexSlice.reducer;
