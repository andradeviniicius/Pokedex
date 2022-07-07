import { PokeType } from "@atoms";

import { Link } from "react-router-dom";

import "./pokedexItem.scss";
import "./pokedexItemModifiers.scss";

export default function PokedexItem({ pokeName, pokeImage, pokeType, pokeId }) {
  return (
    <>
      <Link to={'/pokedex'}>
        <li
          className={`pokedex__item ${`pokedex__item--${pokeType[0].toLowerCase()}`}`}
        >
          <p className="pokedex__pokeId">#{pokeId}</p>

          <p className="pokedex__pokeName">{pokeName}</p>
          <div className="pokedex__pokeTypeContainer">
            {pokeType.map((data) => {
              return <PokeType type={data} />;
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
