import { PokeDetailBasicInfo } from "@molecules";
import "./pokeDetailHeader.scss";

const PokeDetailHeader = () => {
  return (
    <header className="pokemonDetail__header">
      <PokeDetailBasicInfo />
    </header>
  );
};

export default PokeDetailHeader;
