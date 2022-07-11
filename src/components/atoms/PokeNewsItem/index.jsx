import "./pokeNewsItem.scss";

import { Link } from "react-router-dom";

export default function PokeNewsItem({ apiData, dataIndex }) {
  const javascriptDate = new Date(apiData.publishedAt).toLocaleDateString(
    "en-gb",
    { year: "numeric", month: "long", day: "2-digit" }
  );

  return (
    <>
      <Link className="pokeNewsItem" to={`/detailArticle/${dataIndex}`}>
        <div className="pokeNewsItem__leftContainer">
          <p className="pokeNewsItem__text">{apiData.title}</p>
          <p className="pokeNewsItem__date">{javascriptDate}</p>
        </div>
        <div className="pokeNewsItem__rightContainer">
          <img
            className="pokeNewsItem__image"
            src={apiData.urlToImage}
            alt=""
          />
        </div>
      </Link>
      <hr className="pokeNewsItem__cardSeparator" />
    </>
  );
}
