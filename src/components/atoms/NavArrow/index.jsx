import { Link } from "react-router-dom";


import arrowAsset from "@assets/arrow.png";
import "./navArrow.scss";

export default function NavArrow({ goingTo }) {
  return (
    <>
      <Link className="navArrow" to={goingTo}>
        <img src={arrowAsset} alt="" />
      </Link>
    </>
  );
}
