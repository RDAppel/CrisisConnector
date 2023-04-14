
(async () => displayHotlines(await getHotlineData()))();

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
		createElementAndAppend(document.body, 'div', 'hotlineList', null, [ 'searchHotline' ]);
		createElementAndAppend(hotlineList, 'div', 'hotlineTitle')
		createElementAndAppend(hotlineTitle, 'h2', null, title)
		createElementAndAppend(hotlineTitle, 'div', 'hotlineName')
		types.forEach(({ name, link }) => {
			createElementAndAppend(hotlineName, 'a', null, name).href = link;
		});
	});
}

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
