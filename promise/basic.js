// const promise = fetch('https://www.baidu.com');

// promise.then(
// 	response => console.log(response.status), 
// 	reason => console.error(reason.message)
// );

const promise = fetch('https://www.baidu.com');

const promise2 = promise.then(response => {
	if ( response.ok ) {
		console.log('Request successed');
	} else {
		console.error('Request failed');
	}
});

// 
console.log(promise === promise2);

// catch
promise.catch(reason => console.error(reason.message));

// is the same as ..

// rejection
promise.then(null, reason => console.error(reason.message));


// fulfillment
promise.then(response => console.log(response.statusText));


// finally
promise.finally(() => console.log('finally'));


// error
const err = new Promise((resolve, reject) => {
	throw new Error('error'); // must be catch, or stop execution
});

err.catch(reason => console.log(reason.message));


const fulfillment = Promise.resolve(42); // promise
const rejection = Promise.reject(43); // promise
rejection.catch(reason => console.log(reason)); // Must catch??




