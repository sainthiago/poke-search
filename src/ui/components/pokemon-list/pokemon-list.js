import React, { useEffect, useState } from "react";
import PokemonCard from "../pokemon-card/pokemon-card";
import SearchBar from "../search-bar/search-bar";
import "./pokemon-list.css";

function PokemonList() {
  const [pokemons, setPokemons] = useState(null);
  const [filteredPokemons, setFilteredPokemons] = useState(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchParams, setSearchParams] = useState("");
  const [showNoResults, setShowNoResults] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (!pokemons) {
      fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
        .then((response) => response.json())
        .then((name) => {
          setPokemons(name.results);
          setFilteredPokemons(name.results);
          setLoading(false);
        })
        .catch((error) => {
          setHasError(true);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [pokemons]);

  const addToSearch = (e) => {
    const searchParam = e.target.value;
    setSearchParams(searchParam);
    if (searchParam === "") {
      setFilteredPokemons(pokemons);
      setShowNoResults(false);
    }
  };

  const filterPokemons = () => {
    const filtered = filteredPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchParams.toLowerCase())
    );

    if (filtered.length > 0) {
      setFilteredPokemons(filtered);
      setShowNoResults(false);
    } else {
      setShowNoResults(true);
    }
  };

  return (
    <>
      <div>
        <SearchBar filterPokemons={filterPokemons} handleChange={addToSearch} />
      </div>
      {loading ? (
        <div>loading...</div>
      ) : filteredPokemons && !hasError && !showNoResults ? (
        <div className="pokemon-list">
          {filteredPokemons.map((pokemon) => (
            <PokemonCard
              pokemon={pokemon}
              pokemonNumber={pokemon.url.match(/pokemon\/([0-9]+)/)[1]}
              key={pokemon.name}
            />
          ))}
        </div>
      ) : showNoResults ? (
        <div>no results, please clear your search.</div>
      ) : (
        <div>an error occured. please try to refresh the page</div>
      )}
    </>
  );
}
export default PokemonList;
