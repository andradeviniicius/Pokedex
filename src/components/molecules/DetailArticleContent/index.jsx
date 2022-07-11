import { MainTitle } from "@atoms";
import "./detailArticleContent.scss";
import { Link } from "react-router-dom";

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
        <a
          className="detailArticle__link"
          href={originalPost}
          target={"__blank"}
        >
          {" "}
          Read More
        </a>
      </p>

      <p className="detailArticle__errorMessage">
        Sorry, we're having trouble with this page in Desktop devices :((
        <br />
        <Link to={"/"}>Click here to go back</Link>
      </p>
    </div>
  );
}
