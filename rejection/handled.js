// node.js
const possiblyUnhandledRejections = new Map();

process.on("unhandledRejection", (reason, promise) => {
	possiblyUnhandledRejections.set(promise, reason);
});

process.on("rejectionHandled", promise => {
	possiblyUnhandledRejections.delete(promise);
});

setInterval(() => {
	possiblyUnhandledRejections.forEach((reason, promise) => {
		console.error("Unhandled rejection");
		console.error(promise);
		console.error(reason.message ? reason.message : reason);
		// do something to handle these rejections
	});
	possiblyUnhandledRejections.clear();
}, 60000);



// web browser
globalThis.unhandledRejection = ({reason, promise}) => {
	possiblyUnhandledRejections.set(promise, reason);
};

globalThis.onrejectionhandled = ({promise}) => {
	possiblyUnhandledRejections.delete(promise, reason);
}

setInterval(() => {
	possiblyUnhandledRejections.forEach((reason, promise) => {
		console.error("Unhandled rejection");
		console.error(promise);
		console.error(reason.message ? reason.message : reason);
		// do something to handle these rejections
	});
	possiblyUnhandledRejections.clear();
}, 60000);