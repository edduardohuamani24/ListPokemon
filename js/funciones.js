const pokemon_list = document.getElementById("pokemon_list");
const pokemon_array = [];
const btn_container = document.getElementById("btn_container");
// const btn_next = `<button type="button" onClick="listaSiguiente()" id="btn_next">Next</button>`;
// const btn_previus = `<button type="button" onClick="listaPrevia()" id="btn_previus">Previous</button>`;

//1. FUNCIÓN ASYNC PARA ESPERAR LAS PROMESAS Y NO AVANZAR HASTA OBTENER RESPUESTA
const obtenerPokemon = async () => {
  // btn_container.innerHTML = btn_next;

  //2.SE USÓ TRY-CATCH PARA LA EJECUCIÓN CORRECTA DEL CÓDIGO Y CAPTURAR ALGÚN ERROR
  try {
    //3. SE RECORRE CON UN VALOR INICIAL DE 1 AUMENTANDO 1 HASTA LLEGAR A LOS 151
    for (let i = 1; i <= 151; i++) {
      // EL ÚLTIMO ELEMENTO DE LA URL DE LA API SERÁ REEMPLAZADO POR EL RECORRIDO
      let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      //4. SE CREAN CONSTANTES PARA ALMACENAR EL RESULTADO DE LA PROMESAS
      // SE USÓ LA EXPRESIÓN "await" PARA QUE LA FUNCIÓN ESPERE LAS RESPUESTAS DE LAS PROMESAS.
      //5. USO DEL MÉTODO fetch() PARA UTILIZAR LA API
      const res = await fetch(url);
      //6. USO DEL MÉTODO json() PARA TRANSFORMAR LA API Y PODER UTILIZAR SU INFORMACIÓN
      const data = await res.json();
      //7. DENTRO DEL ARRAY VACÍO ALMACENAMOS  LA INFORMACIÓN PARSEADA A json
      pokemon_array.push(data);
    }
    //8. EL METODO ***Promise.all()*** SE USÓ PARA QUE TODAS LAS LLAMADAS ASÍNCRONAS INDIVIDUALES SEAN RESPONDIDAD EN PARALELO Y NO UNO POR UNO.
    //***.then*** DESPUÉS QUE TERMINEN LAS RESPUESTAS SERÁN CONTENIDAS EN ESTE  ***results*** OBJECT
    Promise.all(pokemon_array).then((results) => {
      //9. EL OBJETO ***results*** será recorrido mediante unA FUNCIÓN map PARA CREAR UN NUEVO ARRAY
      //9.1 AL SER UNA FUNCIÓN FLECHA QUE RETORNARÁ UN OBJECT SE ENCIERRA EN PARÉNTESIS. SON LOS CELESTES
      //9.2  data es la refencia de la respuesta de las llamadas
      const pokemon = results.map((data) => ({
        //10. MEdiante el parámetro DATA SE TRANSFORMA EL OBJETO EN INFORMACIÓN QUE NECESITEMOS
        id: data.id,
        name: data.name,
        //10.1 AL SER UN ARRAY DE OBJETO USAMOS EL METODO ***map()*** para recorrerlo y obtener los tipos de cada pokemon.
        //USAMOS LA
        type: data.types
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
      //11. FINALMENTE, RETORNA UN ARRAY DE TODOS LOS OBJETOS CON LA INFORMACIÓN INDIVIDUAL DE CADA POKEMON
      mostrarPokemon(pokemon);
    });
  } catch (error) {
    console.log("error en la función principal");
  }
};

// LA FUNCIÓN TIENE UN PARAMETRO QUE SERÁ REEMPLAZADO POR EL OBJETO ***pokemon*** QUE CONTIENE LA INFORMACIÓN INDIVIDUAL DE CADA POKEMON
const mostrarPokemon = (list) => {
  console.log(list);
  // pokemon_list.innerHTML = "";
  //SE REALIZA UN RECORRIDO MEADIENTE LA FUNCIÓN ***map*** AL PARAMETRO LIST PARA PINTA LA DATA EN ELEMENTOS HTML
  // SE ALMACENA EN UNA CONSTANTE EL RECORRIDO
  const pokemon_information = list
    .map(
      (poke_data) =>
        `<li>
      <h2>${poke_data.name}</h2>
      <img src="${poke_data.sprite}">
      <h3>Número: ${poke_data.id}</h3>
      <p>Tipo: ${poke_data.type} </p>
    </li>`
    )
    // PARA ELIMINAR LA ***,*** DEL ANTERIOR METODO .join()
    .join("");
  // AGREGAMOS A LA LISTA UL LA INFORMACIÓN DE LA CONSNTE ***pokemon _information***
  pokemon_list.innerHTML = pokemon_information;
};
//SE REALIZA UN RECORRIDO MEDIANTE for of
//SE CREA UN ARRAY CON LOS VALORES ***index e item*** para utilizar el metodo ***entries()*** y obtener indices y valores.
//EN FUTURAS ACTUALIZACIONES SE USARÁ LOS INDICES

//EL LET TEMP SERÁ REEMPLAZADO  POR SU VALOR SUMANDOLE  UN ELEMENTO DE LISTA QUE TENDRÁ EL NOMBRE DE CADA POKEMON
//HACEMOS ESTO PARA PINTAR LOS 20 PRIMEROS POKEMON

// SE UTILIZA LA PROPIEDAD innerHTML AL CONTENEDOR DE LISTA PARA AGREGAR LA INFORMACIÓN HTML ALMACENADA EN EL LET ***temp***

// const listaSiguiente = async () => {
//   let url_mistake_151pokemon =
//     "https://pokeapi.co/api/v2/pokemon/?offset=140&limit=20";
//   let url_limit_151pokemon =
//     "https://pokeapi.co/api/v2/pokemon/?offset=140&limit=11";
//   crearBotones();
//   limpiarArray();
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     url = data.next;

//     switch (url) {
//       case url_mistake_151pokemon:
//         url = url_limit_151pokemon;
//         borrarBtnNext();
//         actualizarUrl();
//         break;

//       default:
//         actualizarUrl();
//         break;
//     }
//   } catch (error) {
//     console.log("error en la función principal");
//   }
// };

// const listaPrevia = async () => {
//   let url_first_20pokemon =
//     "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
//   crearBotones();
//   limpiarArray();
//   try {
//     let res = await fetch(url);
//     let data = await res.json();
//     url = data.previous;
//     fixUrlFinalPreviousClick();

//     switch (url) {
//       case url_first_20pokemon:
//         actualizarUrl();
//         borrarBtnPrevio();
//         break;
//       default:
//         actualizarUrl();
//         break;
//     }
//   } catch (error) {
//     console.log("error de el botón previous");
//   }
// };

// const crearBotones = () => {
//   btn_container.innerHTML = btn_next + btn_previus;
// };

// const limpiarArray = () => {
//   pokemon_array.length = 0;
// };

// const actualizarUrl = async () => {
//   try {
//     let res2 = await fetch(url);
//     let data2 = await res2.json();
//     data2.results.map((poke) => {
//       let array_nombres = poke.name;
//       pokemon_array.push(array_nombres);
//       return pokemon_array;
//     });
//     mostrarPokemon(pokemon_array);
//   } catch (error) {
//     console.log("Error en actualizar URL");
//   }
// };

// const borrarBtnNext = () => {
//   btn_container.innerHTML = btn_previus;
// };

// const borrarBtnPrevio = () => {
//   btn_container.innerHTML = btn_next;
// };

// const fixUrlFinalPreviousClick = () => {
//   let url_fix = "https://pokeapi.co/api/v2/pokemon/?offset=120&limit=20";
//   let url_mistake = "https://pokeapi.co/api/v2/pokemon/?offset=129&limit=11";
//   if (url === url_mistake) {
//     url = url_fix;
//   }
// };
