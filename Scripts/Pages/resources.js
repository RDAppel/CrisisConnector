// Note to self: when the search go the db and do the where for the serach .Timeout
const container = document.getElementById("ResourcesMainContainer");

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
    const resourceGrid = document.createElement('div');
    resourceGrid.className = "resource-grid";
    const categoryHeading = document.createElement('h2');
    categoryHeading.innerHTML = category;
    categoryHeading.className = "category-title";
    container.appendChild(categoryHeading);
    container.appendChild(resourceGrid);
    types.forEach(({title, description, details, link}) => {
      const resourceItem = document.createElement('div');
      resourceItem.className = "resource-item";
      const resourceImage = document.createElement('img');
      resourceImage.src = "../Assets/Images/Depression.png";
      const resourceInfo = document.createElement('div');
      resourceInfo.className = "resource-info";
      resourceGrid.appendChild(resourceItem);
      resourceItem.appendChild(resourceImage);
      resourceItem.appendChild(resourceInfo);
      const resourceHeading = document.createElement('h2');
      resourceHeading.className = "resource-title";
      const resourceParagraph = document.createElement('p');
      resourceParagraph.className = "resource-desc"
      const resourceAncor = document.createElement('a');
      resourceAncor.className = "resource-link";
      resourceHeading.innerHTML = title;
      resourceParagraph.innerHTML = details;
      resourceAncor.innerHTML = "Learn More";
      resourceAncor.href = link;
      resourceAncor.target = '_blank'; // Set target to _blank to open the link in a new tab
      resourceInfo.appendChild(resourceHeading);
      resourceInfo.appendChild(resourceParagraph);
      resourceInfo.appendChild(resourceAncor);
    });
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
 