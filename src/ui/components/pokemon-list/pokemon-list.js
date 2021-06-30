import React from "react";
import PokemonCard from "../pokemon-card/pokemon-card";
import "./pokemon-list.css";

export default class PokemonList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { pokemons: [], search: "" };
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((name) => this.setState({ pokemons: name.results, search: "" }))
      .catch((error) => console.log(error));
  }

  render() {
    console.log(this.state.pokemons);
    let pokemons = [];
    if (!!this.state.pokemons.length) {
      pokemons = this.state.pokemons.map((pokemon, i) => (
        <PokemonCard pokemon={pokemon} number={i + 1} key={pokemon.name} />
      ));
    }

    return <div className="pokemon-list">{pokemons}</div>;
  }
}
