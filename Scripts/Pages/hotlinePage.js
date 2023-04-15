
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

