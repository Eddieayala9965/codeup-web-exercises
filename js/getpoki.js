import {getPokemon, getPokemonAll} from "./pokiapi.js"





//Main
( async ()=>{

const list = await getPokemonAll();
console.log(list);
// getPokemon("pikachu").then((pokemon) => {
//     console.log(pokemon)
// })

})();

