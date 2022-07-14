import "./pokeLink.scss";
import { NavLink } from "react-router-dom";

const PokeLink = ({ text }) => {
  return (
    <NavLink
      to="/detailPokemon"
      className={(state) => (state.isActive ? "pokeDetail__link--active" : "")}
    >
      <li className="pokeDetail__link">{text}</li>
    </NavLink>
  );
};

export default PokeLink;
