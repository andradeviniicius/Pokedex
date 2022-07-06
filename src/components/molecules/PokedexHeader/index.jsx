import { MainTitle, NavArrow, PokeBurguer } from "@atoms";

import "./pokedexHeader.scss";

export default function PokedexHeader() {
  return (
    <>
      <div className="pokedexHeader">
        <div className="pokedexHeader__mainContainer">
          <NavArrow />
          <PokeBurguer />
        </div>
        <MainTitle textContent={"Pokedex"} />
      </div>
    </>
  );
}
