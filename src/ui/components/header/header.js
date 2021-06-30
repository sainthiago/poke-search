import pokeball from "../../../assets/pokeball.svg";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <img src={pokeball} className="logo" alt="logo" />
      <p className="title">welcome to poke-search!</p>
      <p className="subtitle">search for the original pokemons</p>
    </header>
  );
}

export default Header;
