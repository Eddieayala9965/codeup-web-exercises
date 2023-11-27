 export const getPokemon = (id) =>{
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }
    return fetch(url, options)
        .then(response => response.json())
        .then(data => data)
        .catch(err => console.log(err))
}

  export const getPokemonAll = async (offset = 0, limit = 10) => {
     const url = `https://pokeapi.co/api/v2/pokemon?${limit}=10&${offset}=0`
     const options = {
         method: "GET",
         headers: {
             "Content-Type": "application/json"
         }
     }
     try {
         const response = await fetch(url, options);
         const list = await response.json();
         const pokemon = await Promise.all(list.results.map((item) => getPokemon(item.name)));
         {
             list.results = pokemon;
             return list;
         }
     } catch (error) {
         return (error)
     }
 }