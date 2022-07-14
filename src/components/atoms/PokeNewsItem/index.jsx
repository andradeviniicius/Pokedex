import "./pokeNewsItem.scss";

import { Link } from "react-router-dom";

import {standardizedDate} from "@utils";

export default function PokeNewsItem({ apiData, dataIndex }) {

  const transformedDate = standardizedDate(apiData.publishedAt);

  return (
    <>
      <Link className="pokeNewsItem" to={`/detailArticle/${dataIndex}`}>
        <div className="pokeNewsItem__leftContainer">
          <p className="pokeNewsItem__text">{apiData.title}</p>
          <p className="pokeNewsItem__date">{transformedDate}</p>
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
