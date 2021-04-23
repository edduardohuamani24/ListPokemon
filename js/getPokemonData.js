"use strict";

import { showPokemon } from "./showPokemon.js";
export let pokemon_array = [];
export const getPokemonData = () => {
  Promise.all(pokemon_array).then((results) => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      types: data.types.map((poke_type) => poke_type.type.name).join(", "),
      sprite: data.sprites["front_default"],
    }));
    showPokemon(pokemon);
  });
};
