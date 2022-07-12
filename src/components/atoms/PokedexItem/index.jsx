import { PokeType } from "@atoms";
import { flushSync } from "react-dom";

import { useNavigate } from "react-router-dom";

import "./pokedexItem.scss";
import "./pokedexItemModifiers.scss";

export default function PokedexItem({ pokeName, pokeImage, pokeType, pokeId }) {
  const navigate = useNavigate();
  function addExtraZero(num, totalLenght) {
    return String(num).padStart(totalLenght, "0");
  }

  function capitalFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function changePages() {
    navigate(`/pokedex/aboutPokemon/${pokeId}`);
  }

  return (
    <>
      <li
        className={`pokedex__item ${`pokedex__item--${pokeType[0].type.name.toLowerCase()}`}`}
      >
        <div onClick={changePages}>
          <p className="pokedex__pokeId">#{addExtraZero(pokeId, 3)}</p>

          <p className="pokedex__pokeName">{capitalFirstLetter(pokeName)}</p>
          <div className="pokedex__pokeTypeContainer">
            {pokeType.map((data) => {
              return <PokeType key={data.type.name} type={data.type.name} />;
            })}
          </div>

          <img className="pokedex__pokeImage" src={pokeImage} alt="" />
          <img
            className="pokedex__background"
            src={"./../../../../public/assets/pokedex-item-bg.svg"}
            alt=""
          />
        </div>
      </li>
    </>
  );
}
