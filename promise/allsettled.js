let promise1 = Promise.resolve(42);
let promise2 = Promise.reject(43);

let promise3 = new Promise((resolve, reject) => {
	setTimeout(() => resolve(44), 100);
});

let promise4 = Promise.allSettled([promise1, promise2, promise3]);

promise4.then(results => {
	console.log(Array.isArray(results));
	console.log(results[0]['status'], results[0]['value']);
	console.log(results[1]['status'], results[1]['reason']);
	console.log(results[2]['status'], results[2]['value']);
});

