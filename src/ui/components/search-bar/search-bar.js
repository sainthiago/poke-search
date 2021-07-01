import "./search-bar.css";

function SearchBar({ handleChange, filterPokemons }) {
  return (
    <div className="searchbar">
      <input
        className="search"
        type="search"
        placeholder="search pokemon"
        onChange={handleChange}
      />
      <button className="searchbtn" onClick={filterPokemons}>
        search
      </button>
    </div>
  );
}

export default SearchBar;
