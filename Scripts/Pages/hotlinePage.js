
(async () => {

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
			const hotlineList = createElementAndAppend(document.body, 'div', 'hotlineList', null, [ 'searchHotline' ]);
			const hotlineTitle = createElementAndAppend(hotlineList, 'div', 'hotlineTitle')
			createElementAndAppend(hotlineTitle, 'h2', null, title)
			const hotlineName = createElementAndAppend(hotlineTitle, 'div', 'hotlineName')
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
			const searchText = target.value.toLowerCase().trim();
		
			const hasText = searchText !== ''
			document.querySelectorAll('.searchHotline').forEach(element => {
				element.style.display = hasText ? 'none' : 'block';
			});

			if (!hasText) return;

			const searchElements = '.searchHotline *';
			const elements = document.querySelectorAll(searchElements);
			elements.forEach(element => {
				const text = element.innerText.toLowerCase();
				const found = text.indexOf(searchText) > -1;
				if (!found) return

				const parent = element.closest('.searchHotline')
				parent.style.display = 'block';
			});
		}

		if (searchTimeout) clearTimeout(searchTimeout);
		searchTimeout = setTimeout(runSearch, 200);
	});

	
	
	displayHotlines(await getHotlineData())

})();