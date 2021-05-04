let header = document.getElementById("header");
let main = document.getElementById("main");
let footer = document.getElementById("footer");

export const showElements = () => {
  header.classList.remove("ocultar");
  main.classList.remove("ocultar");
  footer.classList.remove("ocultar");
};
