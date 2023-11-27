const getPerson = (id) => {
    const url = `https://swapi.dev/api/people/${id}`
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }

    }
   return fetch(url, options)
        .then(response => {
            return response.json()
        })
        .catch(error => {
            console.log(error)
        })
}



// Main
(()=>{
   getPerson(2).then((person) => {
       console.log(person);
       const url = person.films[0]
       const options = {
           method: "GET",
           headers: {
               "Content-Type": "application/json",
           }

       }
       return fetch(url, options)
           .then(response => {
               return response.json()
           })
              .then(film => {
                console.log(film)
              })
           .catch(error => {
               console.log(error)
           })

   })

})();