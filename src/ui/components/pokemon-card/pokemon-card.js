import "./pokemon-card.css";

function PokemonCard({ pokemon, number }) {
  return (
    <div className="pokemon-card">
      <img
        className="pokemon-image"
        src={`https://pokeres.bastionbot.org/images/pokemon/${number}.png`}
        alt={pokemon.name}
      />
      <p
        className="pokemon-text
      "
      >
        #{number} {pokemon.name}
      </p>
    </div>
  );
}
export default PokemonCard;
