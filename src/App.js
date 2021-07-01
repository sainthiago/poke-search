import "./App.css";
import Header from "./ui/components/header/header";
import PokemonList from "./ui/components/pokemon-list/pokemon-list";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <PokemonList />
      </div>
    </div>
  );
}

export default App;
