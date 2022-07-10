import "./pokeNewsItem.scss";
import pokeRush from "@assets/article01.png";

export default function PokeNewsItem({ title, date, image }) {
  return (
    <>
      <div className="pokeNewsItem">
        <div className="pokeNewsItem__leftContainer">
          <p className="pokeNewsItem__text">{title}</p>
          <p className="pokeNewsItem__date">{date}</p>
        </div>
        <div className="pokeNewsItem__rightContainer">
          <img className="pokeNewsItem__image" src={image} alt="" />
        </div>
      </div>
      <hr className="pokeNewsItem__cardSeparator" />
    </>
  );
}
