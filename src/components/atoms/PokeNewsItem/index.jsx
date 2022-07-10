import "./pokeNewsItem.scss";

export default function PokeNewsItem({ title, date, image }) {
  const javascriptDate = new Date(date).toLocaleDateString('en-gb', { year: 'numeric', month: 'long', day: '2-digit' })

  return (
    <>
      <div className="pokeNewsItem">
        <div className="pokeNewsItem__leftContainer">
          <p className="pokeNewsItem__text">{title}</p>
          <p className="pokeNewsItem__date">{javascriptDate}</p>
        </div>
        <div className="pokeNewsItem__rightContainer">
          <img className="pokeNewsItem__image" src={image} alt="" />
        </div>
      </div>
      <hr className="pokeNewsItem__cardSeparator" />
    </>
  );
}
