// Declaring variables
const hotlineList_thead = document.getElementById('hotlineList_thead');


// Creating Elements
const tr = document.createElement('tr');
const th = document.createElement('th');

// Appending to the document


getFileButton.onchange = function() 
{
    try
    {
        let JSONfile = this.files[0];
        // Instance of the FileReader Class
        const fr = new FileReader();
        // Reading the json file
        fr.readAsText(JSONfile);
        // Onces the file has finished loading, parse the JSON file
        fr.onload = function() 
        {
            let hangmanWords = JSON.parse(fr.result);
        }
    } catch(ex)
    {
        console.log(ex);
    }

}
