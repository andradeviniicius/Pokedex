import { MainTitle, SearchInput } from "@/components/atoms";
import "./homeSearch.scss";

import { useRef } from "react";

const HomeSearch = () => {
  const inputRef = useRef();

  function submitHandler(e) {
    e.preventDefault();
    // console.log(e.target);
    console.log(inputRef);
  }
  return (
    <form onSubmit={submitHandler} className="homeHeader__form">
      <MainTitle
        textContent="What Pokemon
are you looking for?"
      />
      <SearchInput setRef={inputRef} />
    </form>
  );
};

export default HomeSearch;
