import "./pokeGenderItem.scss";
const PokeGenderItem = ({ masc, fem }) => {
  return (
    <div className="pokeAbout__item">
      <label className="pokeAbout__label">Gender</label>
      <div className="pokeAbout__genderControl">
        <img
          className="pokeAbout__genderIcon"
          src="/assets/masc.svg"
          alt="Gender Icon"
        />
        <p className="pokeAbout__porcent">{masc}</p>
      </div>
      <div className="pokeAbout__genderControl">
        <img
          className="pokeAbout__genderIcon"
          src="/assets/female.svg"
          alt="Gender Icon"
        />
        <p className="pokeAbout__porcent">{fem}</p>
      </div>
    </div>
  );
};

export default PokeGenderItem;
