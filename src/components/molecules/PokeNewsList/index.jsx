import { PokeNewsItem } from "@atoms";
import { useEffect } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";

import "./pokeNewsList.scss";

export default function PokeNewsList() {
  const pokeNews = useSelector((state) => state.pokeNews.allNews);
  console.log(pokeNews);

  return (
    <div className="pokeNews__list">
      <PokeNewsItem />
      <PokeNewsItem />
      <PokeNewsItem />
    </div>
  );
}
