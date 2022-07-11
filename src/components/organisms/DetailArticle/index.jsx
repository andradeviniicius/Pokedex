import { DetailArticleHeader, DetailArticleContent } from "@molecules";
import { useParams } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";

export default function DetailArticle() {
  const pokeNews = useSelector((state) => state.pokeNews.allNews);
  const params = useParams();
  const articleIndex = params.articleIndex;

  return (
    <>
      <DetailArticleHeader />
      <DetailArticleContent />
    </>
  );
}
