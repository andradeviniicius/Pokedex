import { HomeSearch, HomeNavigation } from "@/components/molecules";
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
