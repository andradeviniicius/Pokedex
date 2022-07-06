import arrowAsset from "@assets/arrow.png";
import './navArrow.scss'

export default function NavArrow() {
  return (
    <>
      <button className="navArrow">
        <img src={arrowAsset} alt="" />
      </button>
    </>
  );
}
