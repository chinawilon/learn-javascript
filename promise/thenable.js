const thanable = {
	then(resolve, reject) {
		// resolve(42);
		reject(43);
	}
}

const promise = Promise.resolve(thanable);
promise.then(value => console.log('fulfillment', value))
		.catch(value => console.error('rejection', value));

console.log('hi');