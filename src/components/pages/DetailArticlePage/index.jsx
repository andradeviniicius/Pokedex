import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";

import {DetailArticleHeader} from '@molecules'

import './detailArticlePage.scss'

export default function DetailArticlePage() {
  console.log('in detail article');
  const pokeNews = useSelector((state) => state.pokeNews.allNews);
  const params = useParams();
  const articleIndex = params.articleIndex;

  return (
    <div className="detailArticlePage">
      <DetailArticleHeader/>
      <p>{articleIndex}</p>
    </div>
  );
}
