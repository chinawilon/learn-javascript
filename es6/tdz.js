function getValue(value) {
	return value + 5;
}

// function add(first, second = getValue(first)) {
// 	return first + second;
// }

function add(first = second, second) {
	return first + second;
}

console.log(add(1, 1));
console.log(add(undefined, 1));