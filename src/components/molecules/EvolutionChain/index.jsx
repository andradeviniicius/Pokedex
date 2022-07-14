import "./evolutionChain.scss";
import { EvolutionChainItem } from "@atoms";

const EvolutionChain = () => {
  return (
    <div className="pokeEvolution__chain">
      <EvolutionChainItem name="Bullbassar" />
      <EvolutionChainItem name="Bullbassar" />
    </div>
  );
};

export default EvolutionChain;
