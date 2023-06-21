let promise1 = Promise.resolve(42);

let promise2 = new Promise((resolve, reject) => {
	console.log(43);
	resolve(43);
});

let promise3 = new Promise((resolve, reject) => {
	setTimeout(() => {
		console.log(44);
		resolve(44)
	}, 100);
});

let promise4 = Promise.race([promise1, promise2, promise3]);

promise4.then(value => console.log('4=>', value));

let promise5 = Promise.reject(45);
let promise6 = Promise.race([promise5, promise1, promise2]);
promise6.then(value => console.log(value)).catch(value => console.error('error', value));