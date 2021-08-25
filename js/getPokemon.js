"use strict";
import { getPokemonData, pokemon_array } from "./getPokemonData.js";
import { cleanArray } from "./cleanArray.js";
import { showNextButton } from "./showNextButton.js";
import { btn_before, showButtonBefore } from "./showBeforeButton.js";
import { click } from "./nextList_beforeList.js";

let list_subtitle = document.getElementById("list_subtitle");

//1. FUNCIÓN ASYNC PARA ESPERAR LAS PROMESAS Y NO AVANZAR HASTA OBTENER RESPUESTA
export const getPokemon = async () => {
  //9. Mostrar el botón siguiente desde la primera lista y limpiar el array
  showNextButton();
  cleanArray();
  //2.SE USÓ TRY-CATCH PARA LA EJECUCIÓN CORRECTA DEL CÓDIGO Y CAPTURAR ALGÚN ERROR
  try {
    //3. SE RECORRE CON UN VALOR INICIAL DE 1 AUMENTANDO 1 HASTA LLEGAR AL POKE NMR151
    for (let i = 1; i <= 151; i++) {
      //3.1 EL ÚLTIMO ELEMENTO DE LA URL DE LA API SERÁ REEMPLAZADO POR EL RECORRIDO
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      //4. SE CREAN CONSTANTES POR BUENAS PRACTICAS PARA ALMACENAR EL RESULTADO DE LA PROMESAS
      //4.1 SE USÓ LA EXPRESIÓN "await" PARA QUE LA FUNCIÓN ESPERE LAS RESPUESTAS DE LAS PROMESAS.
      //5. USO DEL MÉTODO fetch() PARA CONSUMIR LA API
      const res = await fetch(url);
      //6. USO DEL MÉTODO json() PARA TRANSFORMAR LA API Y SEA ENTENDIDO POR JS PARA UTILIZAR SU INFORMACIÓN
      const data = await res.json();
      if ((i <= 20) & (click === 0)) {
        //6.1 La propiedad innerText nos permite cambiar el contenido del h1
        list_subtitle.innerText = "1-20";
        //7. DENTRO DEL ARRAY VACÍO ALMACENAMOS  LA INFORMACIÓN PARSEADA A json
        pokemon_array.push(data);
        //8.el botón before lo ocultamos
        btn_before.style.visibility = "hidden";
      } else if ((i > 20) & (i <= 40) & (click === 1)) {
        list_subtitle.innerText = "21-40";
        pokemon_array.push(data);
        //8.1 Mostramos el botón before
        showButtonBefore();
      } else if ((i > 40) & (i <= 60) & (click === 2)) {
        list_subtitle.innerText = "41-60";
        pokemon_array.push(data);
        showButtonBefore();
      } else if ((i > 60) & (i <= 80) & (click === 3)) {
        list_subtitle.innerText = "61-80";
        pokemon_array.push(data);
      } else if ((i > 80) & (i <= 100) & (click === 4)) {
        list_subtitle.innerText = "81-100";
        pokemon_array.push(data);
      } else if ((i > 100) & (i <= 120) & (click === 5)) {
        list_subtitle.innerText = "101-120";
        pokemon_array.push(data);
      } else if ((i > 120) & (i <= 140) & (click === 6)) {
        list_subtitle.innerText = "121-140";
        pokemon_array.push(data);
      } else if ((i > 140) & (i <= 151) & (click === 7)) {
        list_subtitle.innerText = "141-151";
        pokemon_array.push(data);
        btn_next.removeAttribute("button");
        //8.2 Ocultamos el botón next
        btn_next.style.visibility = "hidden";
      }
      getPokemonData();
    }
  } catch (error) {
    console.log("Error en la función getPokemon");
    console.error(error);
  }
};
