import PokeNewsHeader from "@molecules/PokeNewsHeader";
import PokeNewsArticle from "@molecules/PokeNewsArticle";

import "./pokeNews.scss";

export default function PokeNews() {
  return (
    <div className="pokeNews">
      <PokeNewsHeader />
      <PokeNewsArticle />
    </div>
  );
}
