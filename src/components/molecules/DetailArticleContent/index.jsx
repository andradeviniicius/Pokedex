import { MainTitle } from "@atoms";
import "./detailArticleContent.scss";

export default function DetailArticleContent({
  mainImage,
  date,
  title,
  description,
}) {
  return (
    <div className="detailArticle__content">
      <img className="detailArticle__image" src={mainImage} alt="" />
      <p className="detailArticle__date">{date}</p>
      <MainTitle textContent={title} />
      <p className="detailArticle__description">{description}</p>
    </div>
  );
}
