setTimeout(() => {
	console.log('Timer');
	queueMicrotask(() => {
		console.log('Microtask in timer')
	});
}, 0);

queueMicrotask(() => {
	console.log('Microtask');
})