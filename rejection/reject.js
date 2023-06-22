const promise = Promise.reject(new Error('Error'));

setTimeout(() => {
	promise.catch(reason => console.log(reason)); // not set cacth handler??
}, 1000);

// const promise1 = promise.then(() => console.log(42));
// promise1.then(() => console.log(43)).catch(() => console.error(44));


// const promise1 = promise;
// promise1.then(() => console.log(43)).catch(reason => console.log(reason));


globalThis.onunhandledrejection = event => {
	console.log(event.type);
	console.log(event.reason.message);
	console.log(promise === event.promise);

	// prevent web browser console output!
	event.preventDefault(); 
}

globalThis.onrejectionhandled = event => {
	console.log(event.type);
	console.log(event.reason.message);
	console.log(promise === event.promise);
}