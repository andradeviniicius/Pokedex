import { MainTitle, SearchInput } from "@/components/atoms";
import "./HomeSearch.scss";

const HomeSearch = () => {
  return (
    <form className="homeHeader__form">
      <MainTitle
        textContent="What Pokemon
are you looking for?"
      />
      <SearchInput />
    </form>
  );
};

export default HomeSearch;
