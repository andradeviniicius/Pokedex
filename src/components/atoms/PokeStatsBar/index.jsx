import "./pokeStatsBar.scss";

const PokeStatsBar = ({ number, color }) => {
  const classes =
    "pokeStats__fillBar " + (color ? `pokeStats__fillBar--${color}` : "");

  return (
    <div className="pokeStats__bar">
      <div className={classes} style={{ width: `${number}%` }} />
    </div>
  );
};

export default PokeStatsBar;
