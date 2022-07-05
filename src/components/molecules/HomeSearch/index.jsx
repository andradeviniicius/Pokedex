import { MainTitle, SearchInput } from "@/components/atoms";

const HomeSearch = () => {
  return (
    <form>
      <MainTitle
        textContent="What Pokemon
are you looking for?"
      />
      <SearchInput />
    </form>
  );
};

export default HomeSearch;
