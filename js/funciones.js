let url = "https://pokeapi.co/api/v2/pokemon/";
const pokemon_list = document.getElementById("pokemon_list");
const pokemon_array = [];
const btn_container = document.getElementById("btn_container");
const btn_next = `<button type="button" onClick="listaSiguiente()" id="btn_next">Next</button>`;
const btn_previus = `<button type="button" onClick="listaPrevia()" id="btn_previus">Previus</button>`;

//1. FUNCIÓN ASYNC PARA LAS PROMESAS
const obtenerPokemon = async () => {
  btn_container.innerHTML = btn_next;
  pokemon_array.length = 0;
  //2.SE USÓ TRY PARA LA EJECUCIÓN CORRECTA DE DEL CÓDIGO Y EL CATCH PARA CAPTURAR ALGÚN ERROR
  try {
    //3. SE CREAN CONSTANTES PARA ALMACENAR EL RESULTADO DE LA PROMESAS
    // SE USÓ LA EXPRESIÓN "await" PARA QUE LA FUNCIÓN ESPERE LAS RESPUESTAS DE LAS PROMESAS.
    //4. USO DEL MÉTODO fetch() PARA UTILIZAR LA API
    const res = await fetch(url);
    //5. USO DEL MÉTODO json() PARA TRANSFORMA LA API Y PODER UTILIZAR SU INFORMACIÓN
    const data = await res.json();
    //6. SE REALIZA UN RECORRIDO MEDIANTE EL MÉTODO MAP PARA OBTENER DATOS DEL API
    //**results** es una propiedad dentro de la API
    // EL PARÁMETRO ***poke** representa el objeto que vamos acceder
    data.results.map((poke) => {
      // LOS VALORES DE LA PROPIEDAD **name** SE ALMACENA DENTRO DE UN LET
      let array_nombres = poke.name;
      // SE USA UN ARRAY VACIO PARA ALMACENAR LOS VALORES DE LA PROPIEDAD ***name***
      pokemon_array.push(array_nombres);
      //DEVOLVEMOS EL ARRAY CON LOS VALORES
      return pokemon_array;
    });
    //VERIFICAMOS EN CONSOLA LOS VALORES DEL ARRAY
    // console.log(pokemon_array);
    //7. USAMOS LA FUNCIÓN ***mostrarPokemon()** PARA PINTAR LOS VALORES EN LA LISTA
    //TIENE COMO PARÁMETRO EL ARRAY CON LOS VALORES DE LA PROPIEDAD ***name***
    mostrarPokemon(pokemon_array);
  } catch (error) {
    console.log("error");
  }
};

//LA FUNCIÓN TIENE UN PARAMETRO QUE SERÁ REEMPLZADO POR EL ARRAY ***pokemon_array***
const mostrarPokemon = (list) => {
  pokemon_list.innerHTML = "";
  //SE CREA UN LET VACÍO
  let temp = "";
  //SE REALIZA UN RECORRIDO MEDIANTE for of
  //SE CREA UN ARRAY CON LOS VALORES ***index e item*** para utilizar el meteodo ***entries()*** y obtener indices y valores.
  //EN FUTURAS ACTUALIZACIONES SE USARÁ LOS INDICES
  for ([index, item] of list.entries()) {
    //EL LET TEMP SERÁ REEMPLAZADO POR POR SU VALOR SUMANDOLE  UN ELEMENTO DE LISTA QUE TENDRÁ EL NOMBRE DE CADA POKEMON
    //HACEMOS ESTO PARA PINTAR LOS 20 PRIMEROS POKEMON
    temp = temp + `<li>${item}</li>`;
  }
  // SE UTILIZA LA PROPIEDAD innerHTML AL CONTENEDOR DE LISTA PARA AGREGAR LA INFORMACIÓN HTML ALMACENADA EN EL LET ***temp***
  pokemon_list.innerHTML = temp;
};

const listaSiguiente = async () => {
  btn_container.innerHTML = btn_next + btn_previus;
  pokemon_array.length = 0;
  try {
    let res = await fetch(url);
    let data = await res.json();
    url = data.next;
    let res2 = await fetch(url);
    let data2 = await res2.json();
    data2.results.map((poke) => {
      let array_nombres = poke.name;
      pokemon_array.push(array_nombres);
      return pokemon_array;
    });
    mostrarPokemon(pokemon_array);
  } catch (error) {
    console.log("error de la prueba");
  }
};
// btn_next.onclick = listaSiguiente();

const listaPrevia = async () => {
  btn_container.innerHTML = btn_next + btn_previus;
  pokemon_array.length = 0;
  try {
    let res = await fetch(url);
    let data = await res.json();
    url = data.previous;
    if (url == null) {
      borrarBtnPrevio();
    } else {
      let res2 = await fetch(url);
      let data2 = await res2.json();
      data2.results.map((poke) => {
        let array_nombres = poke.name;
        pokemon_array.push(array_nombres);
        return pokemon_array;
      });
      mostrarPokemon(pokemon_array);
    }
  } catch (error) {
    console.log("error de la prueba");
  }
};

const borrarBtnPrevio = () => {
  btn_container.innerHTML = btn_next;
  url = "https://pokeapi.co/api/v2/pokemon/";
};
