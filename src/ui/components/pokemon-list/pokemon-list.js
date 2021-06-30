import React, { useEffect, useState } from "react";
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
    let pokemons = [];
    if (!!this.state.pokemons.length) {
      pokemons = this.state.pokemons.map((pokemon, i) => (
        <PokemonCard pokemon={pokemon} number={i + 1} key={pokemon.name} />
      ));
    }

    return <div className="pokemon-list">{pokemons}</div>;
  }
}

// FUNCTIONAL APPROACH
// function PokemonList() {
//     const [data, setData] = useState({});

//     useEffect(() => {
//       if (Object.keys(data).length === 0) {
//         fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
//           .then((response) => response.json())
//           .then((name) => setData(name.results))
//           .catch((error) => console.log(error));
//       }
//       console.log(data);
//     });

//     if (!(data && data.items)) {
//       return <p>still loading</p>;
//     }
//     return (
//       <div className="pokemon-list">
//         {data.items.map((pokemon, i) => (
//           <PokemonCard pokemon={pokemon} number={i + 1} key={pokemon.name} />
//         ))}
//       </div>
//     );
//   }
// export default PokemonList;
