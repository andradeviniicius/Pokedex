import { Link, useNavigate } from "react-router-dom";

import arrowAsset from "@assets/arrow.svg";
import "./navArrow.scss";

export default function NavArrow({ goingTo }) {
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate(-1);
  };

  return (
    <>
      <button className="navArrow" onClick={goBackHandler}>
        <img src={arrowAsset} alt="" />
      </button>
    </>
  );
}
