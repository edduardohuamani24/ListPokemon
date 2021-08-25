"use strict";

import { showPokemon } from "./showPokemon.js";
//1. Creamos un array vacío
export let pokemon_array = [];
//2. EL METODO ***Promise.all()*** SE USÓ PARA QUE TODAS LAS LLAMADAS ASÍNCRONAS INDIVIDUALES SEAN RESPONDIDAS EN PARALELO Y NO UNO POR UNO.
//2.1 El método .then para GUARDAR LAS REPUESTA DENTRO DEL OBJETO results
export const getPokemonData = () => {
  Promise.all(pokemon_array).then((results) => {
    //3. EL OBJETO ***results*** será recorrido mediante unA FUNCIÓN map PARA CREAR UN NUEVO ARRAY
    //3.1 AL SER UNA FUNCIÓN FLECHA QUE RETORNARÁ UN OBJECT SE ENCIERRA EN PARÉNTESIS. SON LOS AMARILLOS
    //3.2  data es la refencia de la respuesta de las llamadas
    const pokemon = results.map((data) => ({
      //4. MEdiante el parámetro DATA SE TRANSFORMA EL OBJETO EN INFORMACIÓN QUE NECESITEMOS
      name: data.name,
      id: data.id,
      //4.1 AL SER UN ARRAY DE OBJETO USAMOS EL METODO ***map()*** para recorrerlo y obtener los tipos de cada pokemon.
      //4.2 USAMOS EL PARAMETRO ***poke_type*** QUE REEMPLAZARÁ LOS DATOS
      //EL ***type** REPRESENTA EL OBJETO
      // EL ***name*** REPRESENTA LA PROPIEDAD PARA OBTENER EL VALOR
      //4.3 USAMOS EL METODO ***.join()*** para unir los elementos en una cadena. Los separamos por comillas en esta oportunidad.
      types: data.types.map((poke_type) => poke_type.type.name).join(", "),
      //4.4 INGRESAMOS A LA PROPIEDAD ***front_default*** DEL OBJETO ***sprites***
      sprite: data.sprites["front_default"],
    }));
    //5. FINALMENTE, RETORNA UN ARRAY DE TODOS LOS OBJETOS CON LA INFORMACIÓN INDIVIDUAL DE CADA POKEM
    showPokemon(pokemon);
  });
};
