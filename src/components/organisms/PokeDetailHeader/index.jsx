import { PokeDetailBasicInfo } from "@molecules";
import "./pokeDetailHeader.scss";

const PokeDetailHeader = (props) => {
  const { types } = props.data;
  const color = types[0]?.type?.name || [];
  const classes =
    "pokemonDetail__header " + (color ? `pokemonDetail__header--${color}` : "");

  return (
    <header className={classes}>
      <PokeDetailBasicInfo data={props.data} />
    </header>
  );
};

export default PokeDetailHeader;
