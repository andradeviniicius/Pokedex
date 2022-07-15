import "./pokeSize.scss";

const PokeSize = (props) => {
  return (
    <div className="pokeAbout__box">
      <div className="pokeAbout__control">
        <label className="pokeAbout__label">Height</label>
        <p className="pokeAbout__size">1' 04" (0.70 cm)</p>
      </div>
      <div className="pokeAbout__control">
        <label className="pokeAbout__label">Height</label>
        <p className="pokeAbout__size">13.2 lbs (6.9 kg)</p>
      </div>
    </div>
  );
};

export default PokeSize;
