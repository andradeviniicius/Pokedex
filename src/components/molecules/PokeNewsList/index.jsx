import PokeNewsCard from "@molecules/PokeNewsCard";

import './pokeNewsList.scss'

export default function PokeNewsList() {
  return (
      <div className="pokeNews__list">
        <PokeNewsCard />
        <hr />
        <PokeNewsCard />
        <hr />
      </div>
  );
}
