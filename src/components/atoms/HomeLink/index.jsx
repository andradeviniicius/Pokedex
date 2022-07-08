import "./homeLink.scss";
import { Link } from "react-router-dom";

const HomeLink = ({ text, color }) => {
  const itemClasses = `homeHeader__item ${
    color ? "homeHeader__item--" + color : ""
  }`;

  return (
    <Link className={itemClasses} to={"/pokedex"}>
      <li>
        <img
          className="homeHeader__pokeball homeHeader__pokeball--right"
          src="/assets/pokeball-right-icon.svg"
        />
        <p className="homeHeader__label">{text}</p>
        <picture>
          <source
            srcSet="/assets/pokeball-right-icon.svg"
            media="(min-width: 1024px)"
          />
          <img
            className="homeHeader__pokeball homeHeader__pokeball--left"
            src="/assets/pokeball-left-icon.svg"
          />
        </picture>
      </li>
    </Link>
  );
};

export default HomeLink;
