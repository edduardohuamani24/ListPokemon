import { poke_array, getPokemondata } from "./funciones.js";
let btn_next = document.getElementById("btn_next");
let btn_before = document.getElementById("btn_before");
let list_subtitle = document.getElementById("list_subtitle");

let click = 0;
const cleanArray = () => {
  poke_array.length = 0;
};

export const displayNextButton = () => {
  btn_next.style.visibility = "visible";
};

const displayBeforeButton = () => {
  btn_before.style.visibility = "visible";
};

export const nextList = async () => {
  onClick();
  cleanArray();
  let i;
  try {
    for (i = 21; i <= 151; i++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const data = await res.json();
      if ((i <= 40) & (click === 1)) {
        console.log(click);
        list_subtitle.innerText = "21-40";
        poke_array.push(data);
        getPokemondata();
      } else if ((i > 40) & (i <= 60) & (click === 2)) {
        console.log(click);
        list_subtitle.innerText = "41-60";
        poke_array.push(data);
        getPokemondata();
      } else if ((i > 60) & (i <= 80) & (click === 3)) {
        console.log(click);
        list_subtitle.innerText = "61-80";
        poke_array.push(data);
        getPokemondata();
      } else if ((i > 80) & (i <= 100) & (click === 4)) {
        console.log(click);
        list_subtitle.innerText = "81-100";
        poke_array.push(data);
        getPokemondata();
      } else if ((i > 100) & (i <= 120) & (click === 5)) {
        console.log(click);
        list_subtitle.innerText = "101-120";
        poke_array.push(data);
        getPokemondata();
      } else if ((i > 120) & (i <= 140) & (click === 6)) {
        console.log(click);
        list_subtitle.innerText = "121-140";
        poke_array.push(data);
        getPokemondata();
      } else if ((i > 140) & (i <= 151) & (click === 7)) {
        console.log(click);
        list_subtitle.innerText = "141-151";
        poke_array.push(data);
        btn_next.removeAttribute("button");
        getPokemondata();
        btn_next.style.visibility = "hidden";
      }
    }

    // getPokemonData();
    displayBeforeButton();
  } catch (error) {
    console.log("Error en la función nextList");
  }
};
const beforeList = () => {
  list_subtitle.innerText = "1-20";
  cleanArray();
  getPokemon();
};

btn_next.addEventListener("click", nextList);

btn_before.addEventListener("click", beforeList);

const onClick = () => {
  click++;
};
