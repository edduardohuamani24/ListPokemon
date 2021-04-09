import { displayNextButton } from "./button.js";
let pokemon_list = document.getElementById("pokemon_list");

export let poke_array = [];
//1. FUNCIÓN ASYNC PARA ESPERAR LAS PROMESAS Y NO AVANZAR HASTA OBTENER RESPUESTA
export const getPokemon = async () => {
  displayNextButton();
  //2.SE USÓ TRY-CATCH PARA LA EJECUCIÓN CORRECTA DEL CÓDIGO Y CAPTURAR ALGÚN ERROR
  try {
    //3. SE RECORRE CON UN VALOR INICIAL DE 1 AUMENTANDO 1 HASTA LLEGAR AL POKE NMR20
    for (let i = 1; i <= 20; i++) {
      // EL ÚLTIMO ELEMENTO DE LA URL DE LA API SERÁ REEMPLAZADO POR EL RECORRIDO
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      //4. SE CREAN CONSTANTES POR BUENAS PRACTICAS PARA ALMACENAR EL RESULTADO DE LA PROMESAS
      // SE USÓ LA EXPRESIÓN "await" PARA QUE LA FUNCIÓN ESPERE LAS RESPUESTAS DE LAS PROMESAS.
      //5. USO DEL MÉTODO fetch() PARA CONSUMIR LA API
      const res = await fetch(url);
      //6. USO DEL MÉTODO json() PARA TRANSFORMAR LA API Y SEA ENTENDIDO POR JS PARA UTILIZAR SU INFORMACIÓN
      const data = await res.json();
      //7. DENTRO DEL ARRAY VACÍO ALMACENAMOS  LA INFORMACIÓN PARSEADA A json
      poke_array.push(data);
      // console.log(poke_array);
      getPokemondata();
    }
  } catch (error) {
    console.log("No se pudo obtener los pokemon.");
  }
};

export const getPokemondata = () => {
  //8. EL METODO ***Promise.all()*** SE USÓ PARA QUE TODAS LAS LLAMADAS ASÍNCRONAS INDIVIDUALES SEAN RESPONDIDAS EN PARALELO Y NO UNO POR UNO.
  //El método .then para GUARDAR LAS REPUESTA DENTRO DEL OBJETO results
  Promise.all(poke_array).then((results) => {
    //9. EL OBJETO ***results*** será recorrido mediante unA FUNCIÓN map PARA CREAR UN NUEVO ARRAY
    //9.1 AL SER UNA FUNCIÓN FLECHA QUE RETORNARÁ UN OBJECT SE ENCIERRA EN PARÉNTESIS. SON LOS CELESTES
    //9.2  data es la refencia de la respuesta de las llamadas
    const pokemon = results.map((data) => ({
      //10. MEdiante el parámetro DATA SE TRANSFORMA EL OBJETO EN INFORMACIÓN QUE NECESITEMOS
      //10.1 AL SER UN ARRAY DE OBJETO USAMOS EL METODO ***map()*** para recorrerlo y obtener los tipos de cada pokemon.
      name: data.name,
      id: data.id,
      types: data.types
        .map(
          (poke_type) =>
            //10.2 USAMOS EL PARAMETRO ***poke_type*** QUE REEMPLAZARÁ LOS DATOS
            //EL ***type** REPRESENTA EL OBJETO
            // EL ***name*** REPRESENTA LA PROPIEDAD PARA OBTENER EL VALOR
            poke_type.type.name
        )
        //10.3 USAMOS EL METODO ***.join()*** para obtener elementos de una matriz y unirlos en una cadena. Los sepramos por comillas en esta oportunidad.
        .join(", "),
      //10.4 INGRESAMOS A LA PROPIEDAD ***front_default*** DEL OBJETO ***sprites***
      sprite: data.sprites["front_default"],
    }));
    //11. FINALMENTE, RETORNA UN ARRAY DE TODOS LOS OBJETOS CON LA INFORMACIÓN INDIVIDUAL DE CADA POKEM
    showPokemon(pokemon);
  });
};

//12. LA FUNCIÓN TIENE UN PARAMETRO QUE SERÁ REEMPLAZADO POR EL OBJETO ***pokemon*** QUE CONTIENE LA INFORMACIÓN INDIVIDUAL DE CADA POKEMON
const showPokemon = (list) => {
  //SE REALIZA UN RECORRIDO MEADIENTE LA FUNCIÓN ***map*** AL PARAMETRO LIST PARA PINTA LA DATA EN ELEMENTOS HTML
  // SE ALMACENA EN UNA CONSTANTE EL RECORRIDO
  const poke_information = list
    .map(
      (poke_data) =>
        `<li class="pokemon-card">
    <h3 class="pokemon-card-title" >${poke_data.id + ". " + poke_data.name}</h3>
    <img class="pokemon-card-img" src="${poke_data.sprite}">
    <p class="pokemon-card-subtitle">Tipos: ${poke_data.types}</p>
    </li>`
    )
    // PARA ELIMINAR LAS COMILLAS ARRIBA DEL ANTERIOR METODO .join()
    .join("");
  // AGREGAMOS A LA LISTA UL LA INFORMACIÓN DE LA CONSNTE ***pokemon _information***
  pokemon_list.innerHTML = poke_information;
};
