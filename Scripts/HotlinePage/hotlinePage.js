// Note to self: when the search go the db and do the where for the serach .Timeout

// Declaring variables
const hotlineList_thead = document.getElementById('hotlineList_thead');


// Creating Elements
const tr = document.createElement('tr');
const th = document.createElement('th');



(async () => {
    const hotlineData = await getHotlineData()
    console.log({ hotlineData })
    const types = getTypesFromJson(hotlineData);
    console.log({ types })
    types.forEach(types =>  {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.innerHTML = types;
        tr.appendChild(th);
        hotlineList_thead.appendChild(tr);
    });
})(); // () will invoke (It will call it right away)

// Reading the data from the server
async function getHotlineData() {
    try {
      const response = await fetch("https://raw.githubusercontent.com/BhuwanTiwari2002/CrisisConnector/master/Data/TestJSON/hotline.json");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
}

function getTypesFromJson(data) {
    console.log(data);
    return data?.mentalHealth?.map(types => types.types); 
    /* Lopping and getting the types from the .jsonx
    The question mark means that a data can be null, this is so that the program doesn't crash */
}

