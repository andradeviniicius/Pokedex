import { PokeNewsHeader, PokeNewsArticle } from "@molecules";

import "./pokeNews.scss";

export default function PokeNews() {
  return (
    <div className="pokeNews">
      <PokeNewsHeader />
      <PokeNewsArticle />
    </div>
  );
}
