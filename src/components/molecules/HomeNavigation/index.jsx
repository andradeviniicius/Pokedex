import { HomeLink } from "@/components/atoms";
import "./homeNavigation.scss";

const HomeNavigation = () => {
  return (
    <nav className="homeHeader__nav">
      <ul className="homeHeader__list">
        <HomeLink text="Pokedex" color="green" />
        <HomeLink text="Moves" color="red" />
        <HomeLink text="Abilities" color="blue" />
        <HomeLink text="Items" color="yellow" />
        <HomeLink text="Locations" color="purple" />
        <HomeLink text="Type Charts" color="brown" />
      </ul>
    </nav>
  );
};

export default HomeNavigation;
