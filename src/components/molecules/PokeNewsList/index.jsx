import PokeNewsItem from "@molecules/PokeNewsItem";

import './pokeNewsList.scss'

export default function PokeNewsList() {
  return (
      <div className="pokeNews__list">
        <PokeNewsItem />
        <hr />
        <PokeNewsItem />
        <hr />
      </div>
  );
}
