const API_BASE = "https://jsonplaceholder.typicode.com";

function createError(response) {
	return new Error(`Unexpected status code ${response.status} 
		${response.statusText} for ${response.url}`);
}

function delay(timeout) {
	return new Promise((resolve, reject) => setTimeout(() => resolve(), timeout));
}

function fetchUserData(userId) {
	const urls = [
		`${API_BASE}/users/${userId}/posts`,
		`${API_BASE}/users/${userId}/albums`
	];
	// join a delay microtask
	return Promise.all([...urls.map(url => fetch(url)), delay(100)])
			.then(results => {
				return results.slice(0, results.length - 1)
			});
}

fetchUserData(1).then(responses => {
	return Promise.all(responses.map(response => {
		if ( response.ok ) {
			return response.json();
		} else {
			return Promise.reject(createError(response));
		}
	}));
}).then(([posts, albums]) => {
	console.log('posts', posts);
	console.log('albums', albums);
}).catch(reason => console.error(reason.message));