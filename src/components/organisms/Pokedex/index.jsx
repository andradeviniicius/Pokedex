import { MainTitle } from "@atoms";
import { PokedexHeader, PokedexList } from "@molecules";

import './pokedex.scss'

export default function Pokedex() {
  return (
    <div className="pokedexWrapper">
      <PokedexHeader />
      <MainTitle textContent={"Pokedex"} />
      <PokedexList />
    </div>
  );
}
