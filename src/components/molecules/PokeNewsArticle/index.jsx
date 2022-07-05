import PokeNewsCard from "@molecules/PokeNewsCard";

import './pokeNewsArticle.scss'

export default function PokeNewsArticle() {
  return (
      <div className="pokeNews__articles">
        <PokeNewsCard />
        <hr />
        <PokeNewsCard />
        <hr />
      </div>
  );
}
