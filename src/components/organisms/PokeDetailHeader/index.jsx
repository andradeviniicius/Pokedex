import { PokeDetailBasicInfo } from "@molecules";
import "./pokeDetailHeader.scss";

const PokeDetailHeader = (props) => {
  return (
    <header className="pokemonDetail__header">
      <PokeDetailBasicInfo data={props.data} />
    </header>
  );
};

export default PokeDetailHeader;
