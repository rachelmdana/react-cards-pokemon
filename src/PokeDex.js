import React from "react";
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import useAxios from "./hooks/useAxios";
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemonData, addPokemonData] = useAxios("https://pokeapi.co/api/v2/pokemon/");

  const addPokemon = async (name) => {
    // Provide the dynamic part of the URL when adding Pokemon data
    addPokemonData(`/${name}`);
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        {/* Pass addPokemon function to PokemonSelect */}
        <PokemonSelect add={addPokemon} />
      </div>
      <div className="PokeDex-card-area">
        {pokemonData.map((cardData) => (
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites?.front_default || 'fallbackImageURL'}
            back={cardData.sprites?.back_default || 'fallbackImageURL'}
            name={cardData.name}
            stats={cardData.stats ? cardData.stats.map((stat) => ({
              value: stat.base_stat,
              name: stat.stat.name,
            })) : []}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;

