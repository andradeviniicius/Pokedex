import { PokeNewsItem } from "@atoms";

import "./pokeNewsList.scss";

export default function PokeNewsList() {
  return (
    <div className="pokeNews__list">
      <PokeNewsItem />
      <PokeNewsItem />
      <PokeNewsItem />
    </div>
  );
}
