import "./homeLink.scss";

const HomeLink = ({ text, color }) => {
  return (
    <li className="homeHeader__item">
      <a className="homeHeader__link">{text}</a>
    </li>
  );
};

export default HomeLink;
