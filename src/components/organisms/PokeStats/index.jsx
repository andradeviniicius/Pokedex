import { SubTitle } from "@atoms";
import { PokeStatsItem } from "@molecules";
import "./pokeStats.scss";

const PokeStats = () => {
  return (
    <section className="pokeStats">
      <ul className="pokeStats__list">
        <PokeStatsItem stats="HP" number={45} color={"red"} />
        <PokeStatsItem stats="Attack" number={60} color={"green"} />
        <PokeStatsItem stats="Defense" number={48} color={"red"} />
        <PokeStatsItem stats="Sp. Atk" number={65} color={"green"} />
        <PokeStatsItem stats="Sp. Def" number={65} color={"green"} />
        <PokeStatsItem stats="Speed" number={45} color={"red"} />
        <PokeStatsItem stats="Total" number={70} color={"green"} />
      </ul>
      <SubTitle
        elem={"about"}
        elemModifier={"mini"}
        textContent={"Type Defenses"}
      />
      <p className="pokeStats__text">
        The effectiveness of each type on Charmander.
      </p>
    </section>
  );
};

export default PokeStats;
