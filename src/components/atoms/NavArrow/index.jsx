import { Link, useNavigate } from "react-router-dom";

import arrowAsset from "@assets/arrow.svg";
import whiteArrowAsset from "@assets/white-arrow.svg";
import "./navArrow.scss";

export default function NavArrow({ isWhite }) {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="navArrow" onClick={goBackHandler}>
        {!isWhite && (
          <img className="navArrow__image" src={arrowAsset} alt="" />
        )}
        {isWhite && (
          <img className="navArrow__image" src={whiteArrowAsset} alt="" />
        )}
      </button>
    </>
  );
}
