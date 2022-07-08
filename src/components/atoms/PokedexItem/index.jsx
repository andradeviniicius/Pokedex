import { PokeType } from "@atoms";
import { flushSync } from "react-dom";

import { Link } from "react-router-dom";

import "./pokedexItem.scss";
import "./pokedexItemModifiers.scss";

export default function PokedexItem({ pokeName, pokeImage, pokeType, pokeId }) {
  function addExtraZero(num, totalLenght) {
    return String(num).padStart(totalLenght, "0");
  }

  return (
    <>
      <Link to={"/pokedex"}>
        <li
          className={`pokedex__item ${`pokedex__item--${pokeType[0].type.name.toLowerCase()}`}`}
        >
          <p className="pokedex__pokeId">#{addExtraZero(pokeId, 3)}</p>

          <p className="pokedex__pokeName">
            {pokeName.charAt(0).toUpperCase() + pokeName.slice(1)}
          </p>
          <div className="pokedex__pokeTypeContainer">
            {pokeType.map((data) => {
              return <PokeType type={data.type.name} />;
            })}
          </div>

          <img className="pokedex__pokeImage" src={pokeImage} alt="" />
          <img
            className="pokedex__background"
            src={"./../../../../public/assets/pokedex-item-bg.svg"}
            alt=""
          />
        </li>
      </Link>
    </>
  );
}
