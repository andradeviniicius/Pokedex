import "./homeLink.scss";
import { Link } from "react-router-dom";

const HomeLink = ({ text, color }) => {
  const itemClasses = `homeHeader__item ${
    color ? "homeHeader__item--" + color : ""
  }`;

  return (
    <li className={itemClasses}>
      <img
        className="homeHeader__pokeball homeHeader__pokeball--right"
        src="/assets/pokeball-right-icon.svg"
      />
      <Link className="homeHeader__link" to={"/pokedex"}>
        {text}
      </Link>
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
  );
};

export default HomeLink;
