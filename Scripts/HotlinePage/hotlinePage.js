// Note to self: when the search go the db and do the where for the serach .Timeout

// Declaring variables
const table = document.getElementById('table');



// Displays the Hotline Data
(async () => {
    displayHotlines(await getHotlineData());
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

function displayHotlines(data) {
    data?.forEach(({title,types}) => { // { Destructing the Object }
        const tr = document.createElement('tr');
        const th = document.createElement('th');
        th.innerHTML = title;
        th.style = "text-align:center";
        tr.appendChild(th);
        table.appendChild(tr);
        types.forEach(({name}) => {
            const tr = document.createElement('tr');
            const td = document.createElement('td');
            td.innerHTML = name;
            tr.appendChild(td);
            table.appendChild(tr);
        });
    });
}

