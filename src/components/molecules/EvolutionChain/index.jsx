import "./evolutionChain.scss";
import { EvolutionChainItem } from "@atoms";

const EvolutionChain = () => {
  return (
    <div className="pokeEvolution__chain">
      <EvolutionChainItem name="Bullbassar" />
      <div className="pokeEvolution__level">
        <img
          className="pokeEvolution__arrow"
          src="/assets/level-arrow.svg"
          alt="Level Arrow"
        />
        <p className="pokeEvolution__levelNumber">Lvl 16</p>
      </div>
      <EvolutionChainItem name="Bullbassar" />
    </div>
  );
};

export default EvolutionChain;
