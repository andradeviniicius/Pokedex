import "./pokeNewsItem.scss";
import pokeRush from "@assets/article01.png";

export default function PokeNewsItem() {
  return (
    <div className="pokeNewsItem">
      <div className="pokeNewsItem__leftContainer">
        <p className="pokeNewsItem__text">Pokémon Rumblee Rush Arrives Soon</p>
        <p className="pokeNewsItem__date">15 May 2019</p>
      </div>
      <div className="pokeNewsItem__rightContainer">
        <img className="pokeNewsItem__image" src={pokeRush} alt="" />
      </div>
    </div>
  );
}
