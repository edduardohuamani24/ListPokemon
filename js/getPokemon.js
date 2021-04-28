"use strict";
import { getPokemonData, pokemon_array } from "./getPokemonData.js";
import { cleanArray } from "./cleanArray.js";
import { showNextButton } from "./showNextButton.js";
import { btn_before, showButtonBefore } from "./showBeforeButton.js";
import { click } from "./nextList_beforeList.js";

let list_subtitle = document.getElementById("list_subtitle");

// export let click = 0;

export const getPokemon = async () => {
  showNextButton();
  cleanArray();
  try {
    for (let i = 1; i <= 151; i++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const data = await res.json();
      if ((i <= 20) & (click === 0)) {
        pokemon_array.push(data);
        btn_before.style.visibility = "hidden";
      } else if ((i > 20) & (i <= 40) & (click === 1)) {
        list_subtitle.innerText = "21-40";
        pokemon_array.push(data);
        showButtonBefore();
      } else if ((i > 40) & (i <= 60) & (click === 2)) {
        list_subtitle.innerText = "41-60";
        pokemon_array.push(data);
        showButtonBefore();
      } else if ((i > 60) & (i <= 80) & (click === 3)) {
        list_subtitle.innerText = "61-80";
        pokemon_array.push(data);
      } else if ((i > 80) & (i <= 100) & (click === 4)) {
        list_subtitle.innerText = "81-100";
        pokemon_array.push(data);
      } else if ((i > 100) & (i <= 120) & (click === 5)) {
        list_subtitle.innerText = "101-120";
        pokemon_array.push(data);
      } else if ((i > 120) & (i <= 140) & (click === 6)) {
        list_subtitle.innerText = "121-140";
        pokemon_array.push(data);
      } else if ((i > 140) & (i <= 151) & (click === 7)) {
        list_subtitle.innerText = "141-151";
        pokemon_array.push(data);
        btn_next.removeAttribute("button");
        btn_next.style.visibility = "hidden";
      }
      getPokemonData();
    }
  } catch (error) {
    console.log("Error en la función getPokemon");
    console.error(error);
  }
};
