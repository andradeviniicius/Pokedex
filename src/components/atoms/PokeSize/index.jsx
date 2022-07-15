import "./pokeSize.scss";

const PokeSize = ({weightSize, heightSize}) => {
  return (
    <div className="pokeAbout__box">
      <div className="pokeAbout__control">
        <label className="pokeAbout__label">Height</label>
        <p className="pokeAbout__size">{heightSize}0cm</p>
      </div>
      <div className="pokeAbout__control">
        <label className="pokeAbout__label">Weight</label>
        <p className="pokeAbout__size">{weightSize}kg</p>
      </div>
    </div>
  );
};

export default PokeSize;
