import { HomeLink } from "@/components/atoms";
import "./homeNavigation.scss";

const HomeNavigation = () => {
  return (
    <nav className="homeHeader__nav">
      <ul className="homeHeader__list">
        <HomeLink />
      </ul>
    </nav>
  );
};

export default HomeNavigation;
