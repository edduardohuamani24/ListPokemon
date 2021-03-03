let poke_array = [];
let pokemon_list = document.getElementById("pokemon_list");
let btn_next = document.getElementById("btn_next");
let btn_previous = document.getElementById("btn_previous");
let poke_subtitle = document.getElementById("poke_subtitle");
let click = 0;
export const getPokemon = async () => {
  displayNextButton();
  try {
    for (let i = 1; i <= 20; i++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const data = await res.json();
      poke_array.push(data);
    }
    getPokemonData();
  } catch (error) {
    console.log("Error en la función principal");
  }
};

const getPokemonData = () => {
  Promise.all(poke_array).then((results) => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      types: data.types.map((poke_type) => poke_type.type.name).join(", "),
      sprite: data.sprites["front_default"],
    }));
    showPokemon(pokemon);
  });
};

const showPokemon = (list) => {
  const poke_information = list
    .map(
      (poke_data) =>
        `<li class="pokemon-card">
    <h3 class="pokemon-card-title" >${poke_data.id + ". " + poke_data.name}</h3>
    <img class="pokemon-card-img" src="${poke_data.sprite}">
    <p class="pokemon-card-subtitle">Tipos: ${poke_data.types}</p>
    </li>`
    )
    .join("");
  pokemon_list.innerHTML = poke_information;
};
const cleanArray = () => {
  poke_array.length = 0;
};

const displayNextButton = () => {
  btn_next.style.visibility = "visible";
};

const displayPreviousButton = () => {
  btn_previous.style.visibility = "visible";
};

const nextList = async () => {
  onClick();
  cleanArray();
  let i;
  try {
    for (i = 21; i <= 151; i++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const data = await res.json();
      if ((i > 21) & (i <= 40) & (click === 1)) {
        i;
        console.log(click);
        poke_subtitle.innerText = "21-40";
        poke_array.push(data);
      } else if ((i > 40) & (i <= 60) & (click === 2)) {
        i;
        console.log(click);
        poke_subtitle.innerText = "41-60";
        poke_array.push(data);
      } else if ((i > 60) & (i <= 80) & (click === 3)) {
        i;
        console.log(click);
        poke_subtitle.innerText = "61-80";
        poke_array.push(data);
      } else if ((i > 80) & (i <= 100) & (click === 4)) {
        i;
        console.log(click);
        poke_subtitle.innerText = "81-100";
        poke_array.push(data);
      } else if ((i > 100) & (i <= 120) & (click === 5)) {
        i;
        console.log(click);
        poke_subtitle.innerText = "101-120";
        poke_array.push(data);
      } else if ((i > 120) & (i <= 140) & (click === 6)) {
        i;
        console.log(click);
        poke_subtitle.innerText = "121-140";
        poke_array.push(data);
      } else if ((i > 140) & (i <= 151) & (click === 7)) {
        i;
        console.log(click);
        poke_subtitle.innerText = "141-151";
        poke_array.push(data);
        btn_next.style.visibility = "visible";
      }
    }

    getPokemonData();
    displayPreviousButton();
  } catch (error) {
    console.log("Error en la función nextList");
  }
};
const previousList = () => {
  poke_subtitle.innerText = "1-20";
  cleanArray();
  getPokemon();
};

btn_next.addEventListener("click", nextList);

btn_previous.addEventListener("click", previousList);

const onClick = () => {
  click++;
};
