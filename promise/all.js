const promise1 = Promise.resolve(42);
const promise2 = new Promise((resolve, reject) => resolve(43));
const promise3 = new Promise((resolve, reject) => setTimeout(() => resolve(44), 100));

// no blocking...
let promise4 = Promise.all([promise1, promise2, promise3, 45]);

promise4.then(value => {
	console.log(Array.isArray(value));
	console.log(value[0]);
	console.log(value[1]);
	console.log(value[2]);
	console.log(value[3]);
}).catch(reason => console.log(reason));

console.log('hi');