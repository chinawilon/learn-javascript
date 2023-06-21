let p1 = new Promise(function(resolve, reject) {
	resolve(42);
	console.log('p1');
});


let p2 = new Promise(function(resolve, reject) {
	reject(43);
	console.log('p2');
});


let p3 = new Promise(function(resolve, reject) {
	resolve(44);
	console.log('p3');
});


let p4 = Promise.all([p1, p2, p3]);

p4.catch(function(value) {
	console.log(Array.isArray(value));
	console.log(value);
});

let p5 = Promise.race([p1, p2, p3]);

p5.then(function(value) {
	console.log(value);
}) ;