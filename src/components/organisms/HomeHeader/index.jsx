import { HomeSearch, HomeNavigation } from "@molecules";
import "./homeHeader.scss";
const HomeHeader = () => {
  return (
    <header className="homeHeader">
      <HomeSearch />
      <HomeNavigation />
    </header>
  );
};

export default HomeHeader;
