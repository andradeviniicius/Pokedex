import { PokeInfoItem, SubTitle, PokeGenderItem } from "@atoms";
import "./pokeAboutInfo.scss";

const PokeAboutInfo = () => {
  return (
    <div className="pokeAbout__info">
      <SubTitle elem={"about"} elemModifier={"mini"} textContent={"Breeding"} />
      <PokeGenderItem masc="87.5%" fem="12.5%" />
      <PokeInfoItem label="Egg Groups" info="Monster" />
      <PokeInfoItem label="Egg Cycle" info="Grass" />
    </div>
  );
};

export default PokeAboutInfo;
