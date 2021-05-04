"use strict";
import { getPokemon } from "./getPokemon.js";
// import { cerrarSpinner } from "./cerrarLoader.js";
export let click = 0;

export const nextList = () => {
  click++;
  console.log(click);
  getPokemon();
  // cerrarSpinner();
};
export const beforeList = () => {
  click = click - 1;
  getPokemon();
  // cerrarSpinner();
};
