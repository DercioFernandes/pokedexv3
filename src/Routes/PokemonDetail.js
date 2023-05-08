import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./PokeDetail.css"

function PokemonDetail() {
  const { pokemonId } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      const data = await response.json();
      setPokemon(data);
    }

    fetchPokemon();
  }, [pokemonId]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <div className='pokemon-detail'>
      <h2>{pokemon.name}</h2>
      <p>Pokedex ID: {pokemon.id}</p>
      <img alt={pokemon.name} src={pokemon.sprites.front_default}></img>
      {/* Additional details */}
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default PokemonDetail;
