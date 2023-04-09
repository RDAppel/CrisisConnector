// Note to self: when the search go the db and do the where for the serach .Timeout

// Declaring variables
const table = document.getElementById('table');
const hotlineList = document.getElementById('hotlineList');



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
    data?.forEach(({title, types}) => {
      const hotlineList = document.createElement('div');
      const hotlineTitle = document.createElement('div');
      const hotlineH2 = document.createElement('h2');
      const hotlineName = document.createElement('div');
      hotlineList.id = "hotlineList";
      hotlineTitle.id = "hotlineTitle";
      hotlineName.id = "hotlineName";
      hotlineH2.innerHTML = title;
      hotlineList.appendChild(hotlineTitle);
      hotlineTitle.appendChild(hotlineH2);
      hotlineTitle.appendChild(hotlineName);
  
      types.forEach(({name}) => {
        const hotlineParagraph = document.createElement('p');
        hotlineParagraph.innerHTML = name;
        hotlineName.appendChild(hotlineParagraph);
      });
  
      document.body.appendChild(hotlineList);
    });
  }
  
