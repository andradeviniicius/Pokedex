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
        <a
          className="detailArticle__link"
          href={originalPost}
          target={"__blank"}
        >
          {" "}
          Read More
        </a>
      </p>

      {/* A temporary error message while desktop version is not ready */}
      <p className="detailArticle__errorMessage">
        Sorry, this page is only available in Mobile devices, but you can check
        the whole article{" "}
        <a target={"__blank"} href={originalPost}>
          here
        </a>{" "}
        we're trying to fix this issue as soon as possible :((
        <br />
      </p>
      {/* A temporary error message while desktop version is not ready */}
    </div>
  );
}
