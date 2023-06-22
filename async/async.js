async function getMeaningOfLife() {
	return 42; // is a promise;
}

const result = getMeaningOfLife();

console.log(result instanceof Promise); // true
console.log(typeof result  === 'Number'); // false

result.then(value => console.log(value));  // 42

promise = Promise.resolve(43);

async function newPromise() {
	return promise;
}

promise1 = newPromise();
console.log('promise', promise === promise1);


async function throwError()
{
	throw new Error('error');
}

throwError().catch(reason => console.log(reason.message));