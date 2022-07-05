import { HomeSearch, HomeNavigation } from "@/components/molecules";

const HomeHeader = () => {
  return (
    <header className="homeHeader">
      <HomeSearch />
      <HomeNavigation />
    </header>
  );
};

export default HomeHeader;
