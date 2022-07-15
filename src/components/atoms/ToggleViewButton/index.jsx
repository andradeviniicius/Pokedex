import "./toggleViewButton.scss";
import tempLogo from "@assets/tempToggleViewButton.svg";

export default function ToggleViewButton() {
  return (
    <button className="toggleViewButton">
      <img className="toggleViewButton__tempLogo" src={tempLogo} alt="" />
      {/* <span className="toggleViewButton__line1"></span>
      <span className="toggleViewButton__line2"></span>
      <span className="toggleViewButton__line3"></span> */}
    </button>
  );
}
