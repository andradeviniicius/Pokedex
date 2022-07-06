import { PokeNewsHeader, PokeNewsArticle } from "@molecules";

import "./pokeNews.scss";

export default function PokeNews() {
  return (
    <section className="pokeNews">
      <div className="pokeNews__container">
        <PokeNewsHeader />
        <PokeNewsArticle />
      </div>
    </section>
  );
}
