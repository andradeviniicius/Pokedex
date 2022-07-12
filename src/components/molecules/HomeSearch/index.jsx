import { MainTitle, SearchInput } from "@atoms";
import "./homeSearch.scss";

import { useNavigate, createSearchParams } from "react-router-dom";

import { useRef } from "react";

const HomeSearch = () => {
  const inputRef = useRef();
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate(
      `/pokedex?${createSearchParams({ q: inputRef.current.value })}`
    );
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
