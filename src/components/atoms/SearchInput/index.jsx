import "./searchInput.scss";

const SearchInput = ({ setRef }) => {
  return (
    <div className="homeHeader__search">
      <button className="homeHeader__button">
        <img
          className="homeHeader__image"
          src="/assets/search-icon.svg"
          alt="Search Button"
        />
      </button>
      <input
        ref={setRef}
        className="homeHeader__input"
        placeholder="Search Pokemon, Move, Ability etc"
      ></input>
    </div>
  );
};

export default SearchInput;
