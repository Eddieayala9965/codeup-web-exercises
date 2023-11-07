(()=>{
    // built to go grab a node, its a newer syntex. this will select elemets from the dom known as Nodes, using css selectors to find the element known as nodes
    const pageHeader = document.querySelector('.col-12 h1');
    pageHeader.style.color ="red"

// query selector all will always return an array of nodes
   const h3Arr = document.querySelectorAll('h2')
    for (let h3 of h3Arr) {
        h3.style.color = "purple"
    }

const skills = document.querySelector('#skills');

    const body = pageHeader.querySelectorAll('h1');
    for (let bod of body) {
        bod.style.backgroundColor = "blue"
    }


})();