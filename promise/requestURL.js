function requestURL(url) {
	return new Promise((resovle, reject) => {

		const xhr = new XMLHttpRequest();

		xhr.addEventListener("load", () => {
			resovle({
				status: xhr.status,
				text: xhr.responseText
			});
		});

		xhr.addEventListener("error", error => reject(error));

		xhr.open("get", url);

		xhr.send();
	});
}

const promise = requestURL('http://baidu.com');

promise.then(response => console.log(response))
	.catch(reason => console.error(reason))
	.finally(console.log('done'));