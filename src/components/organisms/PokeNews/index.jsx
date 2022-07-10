import { PokeNewsHeader, PokeNewsList } from "@molecules";
import { useEffect } from "react";

import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { pokeNewsActions } from "./../../../store/index";

import { fetchPokeNews } from "./../../../services/newsApi";

import "./pokeNews.scss";

export default function PokeNews() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getPokeNews = async () => {
      const data = await fetchPokeNews();
      dispatch(pokeNewsActions.fillNews({ news: data.articles }));
    };
    getPokeNews();
  }, []);

  return (
    <section className="pokeNews">
      <div className="pokeNews__container">
        <PokeNewsHeader />
        <PokeNewsList />
      </div>
    </section>
  );
}
