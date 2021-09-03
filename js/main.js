"use strict";
import "../css/header/header.css";
import "../css/main/main.css";
import "../css/footer/footer.css";
/* Dirección relativa -> ./ */
import { getPokemon } from "./getPokemon.js";
import { btn_next } from "./showNextButton.js";
import { btn_before } from "./showBeforeButton.js";
import { nextList, beforeList } from "./nextList_beforeList.js";
import { removeSpinner } from "./removeSpinner.js";
getPokemon();
removeSpinner();
btn_next.addEventListener("click", nextList);

btn_before.addEventListener("click", beforeList);
