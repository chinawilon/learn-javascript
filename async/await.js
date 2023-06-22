function retrieveJsonData(url) {
	return fetch(url)
			.then(response => {
				if ( response.ok) {
					return response.json(); 
				} else {
					throw new Error(`Unexpected status code: ${response.status}
				 ${resonse.statusText}`);
				}
			}).catch(reason => console.error('reason =>', reason.message));
}

async function retrieveJsonData2(url) {
	try {
		const response = await fetch(url);
		if ( response.ok ) {
			// directly return promise , but not catch error
			return await response.json();
		} else {
			throw new Error(`Unexpected status code: ${response.status}
				 ${resonse.statusText}`);
		}
	} catch (error) {
		console.error('error =>', error.message);
	}
}

console.log(retrieveJsonData('https://www.baidu.com'));
console.log(retrieveJsonData2('https://www.baidu.com'));


async function getMeaningOfLife() {
	return await 10;
}

console.log(getMeaningOfLife().then(value => console.log(value)));


const promise1 = Promise.resolve(42);
const promise2 = Promise.resolve(43);
const promise3 = Promise.resolve(44);

async function doingSomething() {
	try {
		return await Promise.all([promise1, promise2, promise3]);
	} catch(error) {
		console.log(error.message);
	}
}

const result = doingSomething();
result.then(value => console.log(value));