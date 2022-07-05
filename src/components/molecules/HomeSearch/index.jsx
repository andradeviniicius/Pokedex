import { MainTitle, SearchInput } from "@/components/atoms";
import "./homeSearch.scss";

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
