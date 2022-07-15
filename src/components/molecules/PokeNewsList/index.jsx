import { PokeNewsItem } from "@atoms";

import { useSelector } from "react-redux/es/hooks/useSelector";
import {LoadingSpinner} from "@atoms";

import "./pokeNewsList.scss";

export default function PokeNewsList() {
  const pokeNews = useSelector((state) => state.pokeNews.allNews);
  return (
    <div className="pokeNews__list">
      {pokeNews.length === 0 ? (
        <LoadingSpinner extraClasses={'normalSpinner'}   />
      ) : (
        pokeNews.map((data, index) => {
          return <PokeNewsItem key={index} apiData={data} dataIndex={index} />;
        })
      )}
    </div>
  );
}
