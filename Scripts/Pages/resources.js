// Note to self: when the search go the db and do the where for the serach .Timeout


// Displays the Hotline Data
(async () => {
    displayHotlines(await getHotlineData());
})(); // () will invoke (It will call it right away)

// Reading the data from the server
async function getHotlineData() {
    try {
      const response = await fetch("https://raw.githubusercontent.com/BhuwanTiwari2002/CrisisConnector/BhuwanBranch/Data/TestJSON/resources.json");
      return await response.json();
    } catch (error) {
      console.error(error);
    }
}

function displayHotlines(data) {  
       console.log(data);
      data?.forEach(({category, types}) => {
      const hotlineList = document.createElement('div');
      hotlineList.style = "margin-top: 10px";
      hotlineList.className = "searchHotline";
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
      
      types.forEach(({name, link}) => {
        const hotlineLink = document.createElement('a');
        hotlineLink.innerHTML = name;
        hotlineLink.href = link;
        hotlineLink.target = '_blank'; // Set target to _blank to open the link in a new tab
        hotlineName.appendChild(hotlineLink); 
      });
      document.body.appendChild(hotlineList);
    });
  }
  
//   $(document).ready(function() {
//     $("#search").on("keyup", function() {
//       var searchText = $(this).val().toLowerCase();
//       $(".searchHotline").find("h2, p").filter(function() {
//         return $(this).text().toLowerCase().indexOf(searchText) > -1;
//       }).show();
//       $(".searchHotline").find("h2, p").filter(function() {
//         return $(this).text().toLowerCase().indexOf(searchText) === -1;
//       }).hide();
//     });
//   });
  
//Hello this is a test
 