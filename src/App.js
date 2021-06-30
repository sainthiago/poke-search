import Header from "./ui/components/header/header";
import SearchBar from "./ui/components/search-bar/search-bar";
import "./App.css";
import PokemonList from "./ui/components/pokemon-list/pokemon-list";

function App() {
  const handleChange = () => {
    console.log("rui");
  };

  return (
    <div className="app">
      <Header />
      <SearchBar placeholder="search pokemon" handleChange={handleChange} />
      <PokemonList />
    </div>
  );
}

export default App;
