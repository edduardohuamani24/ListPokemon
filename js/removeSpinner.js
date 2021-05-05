"use strict";

export let spinner_container = document.getElementById("spinner_container");

export const removeSpinner = () => {
  spinner_container.style.opacity = 0;
  spinner_container.style.visibility = "hidden";
};
