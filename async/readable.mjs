import fs from "node:fs"

async function readCompleteTextStream(readable) {
	try {
		readable.setEncoding("utf8");
		let data = "";
		for await(const chunk of readable) {
			data += chunk;
		}
		return data;
	} catch(error) {
		console.log(error.message);
	}
}


for await(const i of [1, 2, 3]) {
	console.log(i);
}

// read a big file with stream !!
const stream = fs.createReadStream('./async.js');
readCompleteTextStream(stream)
	.then(value => console.log(value));