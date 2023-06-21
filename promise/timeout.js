function timeout(milliseconds) {
	return new Promise((resolve, reject) => {
		setTimeout(() => reject(new Error("Request time out.")), milliseconds);
	});
}

function fetchWithTimeout(...args) {
	return Promise.race([fetch(args), timeout(5000)]);
}

const API_URL = "https://jsonplaceholder.typicode.com/users";

fetchWithTimeout(API_URL)
	.then(response => response.json())
	.then(users => console.log(users))
	.catch(reason => console.error(reason.message));