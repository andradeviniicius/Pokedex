import SubTitle from "@atoms/SubTitle";
import "./pokeNewsHeader.scss";

export default function PokeNewsHeader() {
  return (
    <div className="pokeNews__header">
      <SubTitle textContent={"Pokemon News"} />
      <button className="pokeNews__btn">View All</button>
    </div>
  );
}
