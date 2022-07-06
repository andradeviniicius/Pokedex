import { HomeSearch, HomeNavigation } from "@molecules";
import "./homeHeader.scss";
const HomeHeader = () => {
  return (
    <header className="homeHeader">
      <div className="homeHeader__container">
        <HomeSearch />
        <HomeNavigation />
      </div>
    </header>
  );
};

export default HomeHeader;
