import "./SearchInput.scss";

const SearchInput = () => {
  return (
    <div className="homeHeader__search">
      <button className="homeHeader__button">
        <img
          className="homeHeader__image"
          src="/assets/search-icon.png"
          alt="Search Button"
        />
      </button>
      <input className="homeHeader__input"></input>
    </div>
  );
};

export default SearchInput;
