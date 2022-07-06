import NavArrow from "@atoms/NavArrow";
import PokeBurguer from "@atoms/PokeBurguer";

import "./pokedexHeader.scss";

export default function PokedexHeader() {
  return (
    <>
      <div className="pokedexHeader">
        <NavArrow />
        <PokeBurguer />
      </div>
    </>
  );
}
