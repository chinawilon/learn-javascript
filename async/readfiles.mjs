import { readFile } from "node:fs/promises";

async function readFiles(filesname) {
	return await Promise.all(filesname.map((filename) => {
		return readFile(filename, "utf8");
	}))
}

readFiles(['async.js', 'await.js'])
	.then(results => console.log(results))
	.catch(reason => console.error(reason.message));

	