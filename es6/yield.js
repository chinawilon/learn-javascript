function *createIterator() {
	console.log('start');
	yield 1;
	console.log('end');
}


iterator = createIterator();
result = iterator.next();
console.log(result);

while (! result.done) {
	result = iterator.next();
	console.log(result);
}

