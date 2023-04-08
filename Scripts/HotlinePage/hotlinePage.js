// Declaring variables
const hotlineList_thead = document.getElementById('hotlineList_thead');


// Creating Elements
const tr = document.createElement('tr');
const th = document.createElement('th');



(async () => {
    console.log(getIssuesFromJson(await getHotlineData()));
})(); // () will invoke (It will call it right away)

// Reading the data from the server
async function getHotlineData() {
    try {
      const response = await fetch("https://raw.githubusercontent.com/BhuwanTiwari2002/CrisisConnector/master/Data/TestJSON/hotline.json");
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
}

function getIssuesFromJson(data) {
    console.log(data);
    return issues = data.health_issues.map(issue => issue.issue); // Lopping and getting the issues from the .json
}

