
(async () => displayHotlines(await getHotlineData()))();

// Reading the data from the server
const getHotlineData = async () => {
	try {
		const url = 'https://raw.githubusercontent.com/BhuwanTiwari2002/CrisisConnector/master/Data/TestJSON/hotline.json'
		const response = await fetch(url);
		return await response.json();
	} catch (error) {
		console.error(error);
	}
}

const displayHotlines = data => {
	if (!data) return;

	const createElementAndAppend = (parent, tag, id, text, classes = []) => {
		const element = document.createElement(tag);
		parent.appendChild(element);
		if (id) element.id = id;
		if (text) element.innerText = text;
		classes.forEach(className => element.classList.add(className));
		return element;
	}

	data.forEach(({ title, types }) => {
		// const hotlineList = document.createElement('div');
		// document.body.appendChild(hotlineList);
		// hotlineList.classList.add('searchHotline');
		// hotlineList.id = "hotlineList";
		// //hotlineList.className = "searchHotline";
		// // hotlineList.style = "margin-top: 10px"; // todo: move to css
		createElementAndAppend(document.body, 'div', 'hotlineList', null, [ 'searchHotline' ]);

		// const hotlineTitle = document.createElement('div');
		// hotlineList.appendChild(hotlineTitle);
		// hotlineTitle.id = "hotlineTitle";
		createElementAndAppend(hotlineList, 'div', 'hotlineTitle')

		// const hotlineH2 = document.createElement('h2');
		// hotlineTitle.appendChild(hotlineH2);
		// hotlineH2.innerText = title; // use innerText instead of innerHTML
		createElementAndAppend(hotlineTitle, 'h2', null, title)

		// const hotlineName = document.createElement('div');
		// hotlineTitle.appendChild(hotlineName);
		// hotlineName.id = "hotlineName";
		createElementAndAppend(hotlineTitle, 'div', 'hotlineName')

		//types.forEach(({ name, link }) => {
			// const hotlineLink = document.createElement('a');
			// hotlineName.appendChild(hotlineLink);
			// hotlineLink.innerText = name;
			// hotlineLink.href = link;
			// //hotlineLink.target = '_blank'; // avoid using target="_blank" for pages on the same domain
		//});

		types.forEach(({ name, link }) => {
			createElementAndAppend(hotlineName, 'a', null, name).href = link;
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


// refactored to not use jQuery, and to use a timeout
// to prevent the search from running on every keypress
let searchTimeout = null;
const searchInput = document.querySelector('#search');

searchInput.addEventListener('keyup', ({ target }) => {

	// This function will run after 500ms of no keypress
	const runSearch = () => {
		const searchText = target.value.toLowerCase();
		const searchElements = '.searchHotline h2, .searchHotline p';
		const elements = document.querySelectorAll(searchElements);
		elements.forEach(element => {
			const text = element.innerText.toLowerCase();
			const found = text.indexOf(searchText) > -1;
			const display = found ? 'block' : 'none';
			element.parentElement.style.display = display;
		});
	}

	if (searchTimeout) clearTimeout(searchTimeout);
	searchTimeout = setTimeout(runSearch, 500);
});
