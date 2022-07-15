import { MainTitle, NavArrow, ToggleViewButton } from "@atoms";

import "./pokedexHeader.scss";

export default function PokedexHeader() {
  return (
    <>
      <header className="pokedex__header">
        <div className="pokedex__headerTopWrapper">
          <NavArrow goingTo={"/"} />
          <ToggleViewButton />
        </div>
        <MainTitle textContent={"Pokedex"} />
      </header>
    </>
  );
}
