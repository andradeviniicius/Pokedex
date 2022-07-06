import "./pokeNewsCard.scss";
import pokeRush from "@assets/article01.png";

export default function PokeNewsCard() {
  return (
    <div className="pokeNewsCard">
      <div className="pokeNewsCard__leftContainer">
        <p className="pokeNewsCard__text">Pokémon Rumblee Rush Arrives Soon</p>
        <p className="pokeNewsCard__date">15 May 2019</p>
      </div>
      <div className="pokeNewsCard__rightContainer">
        <img className="pokeNewsCard__image" src={pokeRush} alt="" />
      </div>
    </div>
  );
}
