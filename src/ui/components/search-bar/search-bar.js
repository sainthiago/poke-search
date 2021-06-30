import "./search-bar.css";

function SearchBar({ placeholder, handleChange }) {
  return (
    <div className="searchbar">
      <input
        className="search"
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
      <button className="searchbtn">search</button>
    </div>
  );
}

export default SearchBar;
