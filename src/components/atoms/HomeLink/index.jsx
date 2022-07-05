import "./homeLink.scss";

const HomeLink = ({ text, color }) => {
  return (
    <li className="homeHeader__item">
      <img
        className="homeHeader__pokeball homeHeader__pokeball--right"
        src="/assets/pokeball-right-icon.svg"
      />
      <a className="homeHeader__link">{text}</a>
    </li>
  );
};

export default HomeLink;
