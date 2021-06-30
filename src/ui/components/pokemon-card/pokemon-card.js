import { useEffect } from "react";
import "./pokemon-card.css";

function PokemonCard({ pokemon, number }) {
  useEffect(() => {
    console.log(number);
  });

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
        {pokemon.name} #{number}
      </p>
    </div>
  );
}
export default PokemonCard;
