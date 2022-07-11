import { PokeNewsItem } from "@atoms";
import { useEffect } from "react";

import { useSelector } from "react-redux/es/hooks/useSelector";

import "./pokeNewsList.scss";

export default function PokeNewsList() {
  const pokeNews = useSelector((state) => state.pokeNews.allNews);

  return (
    <div className="pokeNews__list">
      {pokeNews.map((data) => {
        return (
          <PokeNewsItem
            key={data.title}
            title={data.title}
            date={data.publishedAt}
            image={data.urlToImage}
          />
        );
      })}
    </div>
  );
}
