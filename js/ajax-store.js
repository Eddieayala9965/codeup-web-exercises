
const getTools = () => {
      const url = "../../data/inventory.json";
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        };
      return fetch(url, options)
            .then(response => response.json())
            .catch(error => {
                console.log(error);
                return error;
            });


  }
const createToolElement = (tool) => {
    // this will create and return a tool element
      const toolElement = document.createElement('div');
      const money = tool.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
      toolElement.classList.add('col');
      toolElement.innerHTML = `
              <div class="card">
              <img src="$" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">${tool.title}</h5>
                <p class="card-text">${tool.categories}</p>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item margin-bottom">Price: ${money}</li>
              </ul>
              </div>
        `;
      return toolElement;
}
const updateToolElements = (tools) => {
    // this will create an element for each tool and append it to the dom
    const toolsContainer = document.querySelector("#tools-list");
    toolsContainer.innerHTML = "";
    // check any user input for how to filter the tools list
    const searchInput = document.querySelector("#search");
    const searchValue = searchInput.value;
    const categoryInput = document.querySelector("#category");
    const categoryValue = categoryInput.value;
    // filter filteredTools by any user input
    let filterTools = tools
    filterTools = filterTools.filter((tool)=>{
        if (!categoryValue) {
            return true;
        }
        if (!tool.categories) {
            return false;
        }
        return tool.categories.toLowerCase().includes(categoryValue.toLowerCase());
    })
    filterTools = filterTools.filter((tool)=>{
        if (!searchValue) {
            return true;
        }
        if (typeof tool.title !== "string") {
            return false;
        }
        return tool.title.toLowerCase().includes(searchValue.toLowerCase());
    });
    const toolsFragment = document.createDocumentFragment();
    for (let tool of filterTools) {
        toolsFragment.appendChild(createToolElement(tool));
    }
    toolsContainer.appendChild(toolsFragment);
}






// main



  (async ()=>{
      const tools = await getTools();

      // Add an event listener for the search input
      const searchInput = document.querySelector("#search");
      searchInput.addEventListener("input", () => {
          updateToolElements(tools);
      });

      // Add an event listener for the category input
      const categoryInput = document.querySelector("#category");
      categoryInput.addEventListener("input", () => {
          updateToolElements(tools);
      });

      updateToolElements(tools);
  })();
