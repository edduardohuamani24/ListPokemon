"use strict";
import { showElements } from "./showElements.js";

let spinner_container = document.getElementById("spinner_container");

setTimeout(function () {
  spinner_container.classList.add("cerrar-spinner");
  showElements();
}, 3000);
