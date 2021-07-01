import "./pokemon-card.css";

function PokemonCard({ pokemon, pokemonNumber }) {
  return (
    <div className="pokemon-card">
      <img
        className="pokemon-image"
        src={`https://pokeres.bastionbot.org/images/pokemon/${pokemonNumber}.png`}
        alt={pokemon.name}
      />
      <p className="pokemon-number">#{pokemonNumber}</p>
      <p className="pokemon-name">{pokemon.name}</p>
    </div>
  );
}
export default PokemonCard;
