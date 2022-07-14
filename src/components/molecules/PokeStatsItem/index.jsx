import { PokeStatsBar } from "@atoms";
import "./pokeStatsItem.scss";

const PokeStatsItem = ({ stats, number, color }) => {
  return (
    <li className="pokeStats__item">
      <label className="pokeStats__label">{stats}</label>
      <div className="pokeStats__control">
        <p className="pokeStats__value">{number}</p>
        <PokeStatsBar number={number} color={color} />
      </div>
    </li>
  );
};

export default PokeStatsItem;
