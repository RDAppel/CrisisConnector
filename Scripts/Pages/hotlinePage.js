
const getHotlineData = async () => {
	try {
		const url = 'https://raw.githubusercontent.com/BhuwanTiwari2002/CrisisConnector/master/Data/TestJSON/hotline.json';
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

