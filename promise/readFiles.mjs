import { readFile, writeFile } from "node:fs/promises";

function readFiles(files) {
	return Promise.all(
		files.map(file => readFile(file, "utf8"))
	);
}

readFiles(["basic.js", "call.js", "chains.js"]).then(fileContents => {
	const data = fileContents.map(fileContent => fileContent);
	console.log(data);
}).catch(reason => console.error(reason.message));


// allSettled

function transformText(text) {
	return text.split("").reverse().join("");
}

function transformFiles(filesname) {
	return Promise.allSettled(
		filesname.map(filename => {
			readfile(filename, "utf8")
			.then(text => transformText(text))
			.then(text => writeFile(filename, text))
			.catch(reason => {
				reason.file = filename;
				return Promise.reject(reason);
			});
		})
	);
}

transformFiles(["all.js", "basic.js"])
	.then(results => {
		const failedResults = results.filter(result => result.status === 'rejected');
		if (failedResults.length) {
			console.error("Files not transformed:");
			console.error("");
			failedResults.forEach(failedResult => {
				console.error(failedResult.reason.filename);
				console.error(failedResult.reason.message);
				console.error("");
			});
		} else {
			console.log("All files transformed");
		}
	})