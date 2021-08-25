"use strict";
let pokemon_list = document.getElementById("pokemon_list");

//1. LA FUNCIÓN TIENE UN PARAMETRO QUE SERÁ REEMPLAZADO POR EL OBJETO ***pokemon*** QUE CONTIENE LA INFORMACIÓN INDIVIDUAL DE CADA POKEMON
export const showPokemon = (list) => {
  // 2 SE REALIZA UN RECORRIDO MEADIENTE LA FUNCIÓN ***map*** AL PARAMETRO LIST PARA PINTAR LA DATA EN ELEMENTOS HTML
  //2.1 SE ALMACENA EN LA CONSTANTE pokemon_information EL RECORRIDO
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
    //3. PARA ELIMINAR LAS COMILLAS ARRIBA DEL ANTERIOR METODO .join()
    .join("");
  //4. AGREGAMOS A LA LISTA UL LA INFORMACIÓN DE LA CONSNTE ***pokemon _information***
  pokemon_list.innerHTML = pokemon_information;
};
