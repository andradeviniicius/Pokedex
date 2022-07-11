import { DetailArticleHeader, DetailArticleContent } from "@molecules";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";

import './detailArticle.scss'

export default function DetailArticle() {
  const pokeNews = useSelector((state) => state.pokeNews.allNews);
  const params = useParams();
  const articleIndex = params.articleIndex;

  const javascriptDate = new Date(
    pokeNews[articleIndex].publishedAt
  ).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <div className="detailArticle">
      <DetailArticleHeader />
      <DetailArticleContent
        mainImage={pokeNews[articleIndex].urlToImage}
        date={javascriptDate}
        title={pokeNews[articleIndex].title}
        description={pokeNews[articleIndex].description}
      />
    </div>
  );
}
