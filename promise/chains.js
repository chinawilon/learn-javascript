const promise = Promise.resolve(42); // fulfilled

promise.then(value => {
	console.log(value);
	return 43;
}).then(value => console.log(value))


const promise2 = Promise.reject(43);
console.log(promise2); // rejected

const promise3 = promise2.catch(reason => {
	console.log(reason);
	return reason + 1;
});

console.log(promise3); // pending ??
promise3.then(value => console.log(value));


const promise1 = Promise.resolve(43); // fulfilled
promise.then(value => {
	console.log(value); // 42
	return promise1; // 43
}).then(value => console.log(value));


const promise4 = Promise.reject(44);
promise.then(value => {
	console.log(value);
	return promise4;
}).then(value => console.log('then', value))
.catch(value => console.error('err', value));

