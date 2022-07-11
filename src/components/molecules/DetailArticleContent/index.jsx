import { MainTitle } from "@atoms";
import "./detailArticleContent.scss";

export default function DetailArticleContent({
  mainImage,
  date,
  title,
  description,
  originalPost,
}) {
  return (
    <div className="detailArticle__content">
      <img className="detailArticle__image" src={mainImage} alt="" />
      <MainTitle textContent={title} />
      <p className="detailArticle__date">{date}</p>
      <p className="detailArticle__description">
        {description}
      <a className="detailArticle__link" href={originalPost} target={"__blank"}> Read More</a>
      </p>
    </div>
  );
}
