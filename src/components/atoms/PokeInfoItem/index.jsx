import "./pokeInfoItem.scss";

const PokeInfoItem = ({ label, info }) => {
  return (
    <div className="pokeAbout__item">
      <label className="pokeAbout__label">{label}</label>
      <p className="pokeAbout__information">{info}</p>
    </div>
  );
};

export default PokeInfoItem;
