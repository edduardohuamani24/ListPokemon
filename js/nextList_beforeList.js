"use strict";
import { getPokemon } from "./getPokemon.js";

export let click = 0;

export const nextList = () => {
  click++;
  console.log(click);
  getPokemon();
};
export const beforeList = () => {
  click = click - 1;
  getPokemon();
};
