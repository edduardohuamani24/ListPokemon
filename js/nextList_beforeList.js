"use strict";
import { getPokemon } from "./getPokemon.js";
import { showSpinner } from "./showSpinner.js";
import { removeSpinner } from "./removeSpinner.js";
export let click = 0;

export const nextList = () => {
  click++;
  console.log(click);
  showSpinner();
  getPokemon();
  setTimeout(() => {
    removeSpinner();
  }, 1000);
};
export const beforeList = () => {
  click = click - 1;
  showSpinner();
  getPokemon();
  setTimeout(() => {
    removeSpinner();
  }, 1000);
};
