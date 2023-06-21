const promise = Promise.resolve(43);

promise.finally(() => {
	return 44;
}).then(value => console.log(value)); // still 42


promise.finally(value => {
	return Promise.resolve(45); // no effective
}).then(value => console.log('finnaly', value)); // 43


promise.finally(value => {
	return Promise.reject(44); // effected
}).catch(value => console.error('catch', value)); // 44