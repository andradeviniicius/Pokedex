import SubTitle from "@atoms/SubTitle";
import './pokeNewsHeader.scss'

export default function PokeNewsHeader() {
  return (
    <div className="pokeNewsHeader">
      <SubTitle textContent={"Pokemon News"} />
      <button className="pokeNewsHeader__btn">View All</button>
    </div>
  );
}
