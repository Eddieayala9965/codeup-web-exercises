const getPokemon = (id = 1) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }
   return  fetch(url, options)
        .then((response) => {
            console.log(response);
            return response.json();
        })
        .then((pokemon) => {
            console.log(pokemon);
        })


}
(()=>{

getPokemon(5).then((pokemon) => {
    console.log(pokemon);
    alert(pokemon.name);
});


})();