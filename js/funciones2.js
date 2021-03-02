let poke_array = [];
let pokemon_list = document.getElementById("pokemon_list");
let btn_next = document.getElementById("btn_next");
let btn_previous = document.getElementById("btn_previous");
let poke_subtitle = document.getElementById("poke_subtitle");

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
  poke_subtitle.innerText = "21-40";
  cleanArray();

  try {
    for (let i = 21; i <= 40; i++) {
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const res = await fetch(url);
      const data = await res.json();
      poke_array.push(data);
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

window.nextList = nextList;
btn_next.addEventListener("click", nextList);

window.previousList = previousList;
btn_previous.addEventListener("click", previousList);
