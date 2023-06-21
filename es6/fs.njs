let fs = require("fs");

function run(taskDef)  {

	let task = taskDef();

	let result = task.next();

	(function step() {
		if (! result.done) {
			let promise = Promise.resolve(result.value);
			promise.then(function(value) {
				console.log('ok');
				result = task.next(value);
				step();
			}).catch(function(error) {
				console.log('err');
				result = task.throw(error);
				step();
			});
		}
	})();
}


function readFile(filename) {
	return new Promise(function(resolve, reject) {
		fs.readFile(filename, function(err, contents) {
			if (err) {
				reject(err);
			} else {
				resolve(contents);
			}
		});
		console.log('fkkk');
	});
}

run(function *() {
	let contents = yield readFile("let.js");
	console.log(contents);

});