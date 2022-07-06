import "./homeLink.scss";

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
      <a className="homeHeader__link">{text}</a>
      <img
        className="homeHeader__pokeball homeHeader__pokeball--left"
        src="/assets/pokeball-left-icon.svg"
      />
    </li>
  );
};

export default HomeLink;
