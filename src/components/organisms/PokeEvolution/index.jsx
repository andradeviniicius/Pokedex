import { SubTitle } from "@atoms";
import { EvolutionChain } from "@molecules";

const PokeEvolution = () => {
  return (
    <section className="pokeEvolution">
      <SubTitle
        elem={"about"}
        elemModifier={"mini"}
        textContent={"Evolution Chain"}
      />
      <EvolutionChain />
      <EvolutionChain />
    </section>
  );
};

export default PokeEvolution;
