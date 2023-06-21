const HOSTS = [
	"api1.example.com",
	"api2.example.com"
];

function hedgedFetch(endpoint) {
	return Promise.any(
		HOSTS.map(hostname => fetch(`https://${hostname}/${endpoint}`))
	);
}

hedgedFetch('/transactions')
	.then(transactions => console.log(transactions))
	.catch(reason => console.error(reason.message));