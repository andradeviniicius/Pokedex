import { PokeNewsItem } from "@atoms";
import { useEffect } from "react";
import { fetchPokeNews } from "@/services/newsApi";

import "./pokeNewsList.scss";

export default function PokeNewsList() {
  useEffect(() => {
    const getPokeNews = async () => {
      const pokeNews = await fetchPokeNews();
      console.log(pokeNews);
    };

    getPokeNews()
  }, []);

  return (
    <div className="pokeNews__list">
      <PokeNewsItem />
      <PokeNewsItem />
      <PokeNewsItem />
    </div>
  );
}
