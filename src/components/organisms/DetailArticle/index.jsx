import { DetailArticleHeader, DetailArticleContent } from "@molecules";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";

import { standardizedDate } from "@utils";

import { LoadingSpinner } from "@atoms";

import "./detailArticle.scss";

export default function DetailArticle() {
  const pokeNews = useSelector((state) => state.pokeNews.allNews);
  const params = useParams();
  const articleIndex = params.articleIndex;
  console.log(pokeNews.length === 0);
  console.log(pokeNews.length > 0);

  return (
    <div className="detailArticle">
      <DetailArticleHeader />
      {pokeNews.length === 0 ? (
        <LoadingSpinner extraClasses={"normalSpinner"} />
      ) : (
        <DetailArticleContent
          mainImage={pokeNews[articleIndex]?.urlToImage}
          date={standardizedDate(pokeNews[articleIndex]?.publishedAt)}
          title={pokeNews[articleIndex]?.title}
          description={pokeNews[articleIndex]?.description}
          originalPost={pokeNews[articleIndex]?.url}
        />
      )}
    </div>
  );
}
