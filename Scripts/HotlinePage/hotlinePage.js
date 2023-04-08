// Note to self: when the search go the db and do the where for the serach .Timeout

// Declaring variables
const hotlineList_thead = document.getElementById('hotlineList_thead');
const hotlineList_tbody = document.getElementById('hotlineList_tbody');


// Listing the different types for a Hotline Category
(async () => {
    const hotlineData = await getHotlineData()
    const types = getTypesFromJson(hotlineData);
    types.forEach(types =>  {
        const tr = document.createElement('tr');
        const td = document.createElement('td');
        td.innerHTML = types;
        tr.appendChild(td);
        hotlineList_tbody.appendChild(tr);
    });
})(); // () will invoke (It will call it right away)

/*
(async () => {
    const hotlineData = await getHotlineData()
    console.log(hotlineData.data.mentalHealth);
    hotlineData.data.forEach(hotlineName => {
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.innerHTML = types;
        th.style = "text-align:center";
        tr.appendChild(th);
        hotlineList_thead.appendChild(tr);
    });
})(); // () will invoke (It will call it right away)
*/

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

