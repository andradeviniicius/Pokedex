import "./pokeStatsBar.scss";

const PokeStatsBar = ({ stats, number }) => {
  <li className="pokeStats__item">
    <label className="pokeStats__label">{stats}</label>
    <div className="pokeStats__control">
      <p className="pokeStats__value">{number}</p>
      <div className="pokeStats__bar">
        <span className="pokeStats__fillBar" />
      </div>
    </div>
  </li>;
};

export default PokeStatsBar;
