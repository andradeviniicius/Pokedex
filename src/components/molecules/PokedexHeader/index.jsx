import { MainTitle, NavArrow, ToggleViewButton } from "@atoms";

import "./pokedexHeader.scss";

export default function PokedexHeader() {
  return (
    <>
      <div className="pokedex__header">
        <div className="pokedex__headerTopWrapper">
          <NavArrow goingTo={'/'} />
          <ToggleViewButton />
        </div>
        <MainTitle textContent={"Pokedex"} />
      </div>
    </>
  );
}
