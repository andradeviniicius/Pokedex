import { MainTitle } from "@atoms";
import './detailArticleContent.scss'

export default function DetailArticleContent({}) {
  return (
    <div className="detailArticle__content">
      <img src={""} alt="" />
      <p>Date</p>
      <MainTitle textContent={"teste"} />
      <p>{''}</p>
    </div>
  );
}
