import { SubTitle } from "@atoms";
import { PokeStatsItem } from "@molecules";
import "./pokeStats.scss";

const PokeStats = (props) => {
  const labels = [
    { label: "HP", color: "red" },
    { label: "Attack", color: "green" },
    { label: "Defense", color: "red" },
    { label: "Sp. Atk", color: "green" },
    { label: "Sp. Def", color: "green" },
    { label: "Speed", color: "red" },
  ];

  const data = props.data;
  console.log(data);
  return (
    <section className="pokeStats">
      <ul className="pokeStats__list">
        {data.stats.map((item, index) => {
          return (
            <PokeStatsItem
              color={labels[index].color}
              stats={labels[index].label}
              number={item["base_stat"]}
            />
          );
        })}
      </ul>
      <SubTitle
        elem={"about"}
        elemModifier={"mini"}
        textContent={"Type Defenses"}
      />
      <p className="pokeStats__text">
        {"The effectiveness of each type on " + data.name}
      </p>
    </section>
  );
};

export default PokeStats;
