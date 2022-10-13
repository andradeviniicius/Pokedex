import { HomeHeader } from "@organisms";
import { PokeNews } from "@organisms";

const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <main>
        {/* NewsAPI doesnt allow requests on production */}
        {/* <PokeNews /> */}
      </main>
    </>
  );
};

export default HomePage;
