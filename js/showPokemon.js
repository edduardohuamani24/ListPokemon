"use strict";
let pokemon_list = document.getElementById("pokemon_list");

export const showPokemon = (list) => {
  const pokemon_information = list
    .map(
      (pokemon_data) =>
        `<li class="pokemon-card">
    <h3 class="pokemon-card-title" >${
      pokemon_data.id + ". " + pokemon_data.name
    }</h3>
    <img class="pokemon-card-img" src="${pokemon_data.sprite}">
    <p class="pokemon-card-subtitle">Tipos: ${pokemon_data.types}</p>
    </li>`
    )
    .join("");
  pokemon_list.innerHTML = pokemon_information;
};
