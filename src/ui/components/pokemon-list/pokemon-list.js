import React from "react";
import PokemonCard from "../pokemon-card/pokemon-card";
import "./pokemon-list.css";
import SearchBar from "../search-bar/search-bar";

export default class PokemonList extends React.Component {
  pokemons = [];

  constructor(props) {
    super(props);

    this.state = { pokemons: [], search: "" };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((name) => this.setState({ pokemons: name.results, search: "" }))
      .catch((error) => console.log(error));
  }

  handleChange(search) {
    console.log(this.state);

    this.setState({
      pokemons: this.pokemons.filter((pokemon) => {
        if (pokemon.key) {
          return pokemon.key
            .toLowerCase()
            .includes(search.target.value.toLowerCase());
        }
        return null;
      }),
      search: search.target.value,
    });

    console.log(this.state);
  }

  render() {
    if (!!this.state.pokemons.length) {
      this.pokemons = this.state.pokemons.map((pokemon, i) => (
        <PokemonCard pokemon={pokemon} number={i + 1} key={pokemon.name} />
      ));
    }

    return (
      <div>
        <SearchBar
          placeholder="search pokemon"
          handleChange={this.handleChange}
        />
        <div className="pokemon-list">{this.pokemons}</div>
      </div>
    );
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
