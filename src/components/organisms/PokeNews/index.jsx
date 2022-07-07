import { PokeNewsHeader, PokeNewsList } from "@molecules";

import "./pokeNews.scss";

export default function PokeNews() {
  return (
    <section className="pokeNews">
      <div className="pokeNews__container">
        <PokeNewsHeader />
        <PokeNewsList />
      </div>
    </section>
  );
}
