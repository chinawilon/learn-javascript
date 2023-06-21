// let person = ((name) => {
// 	return {
// 		getName: function () {
// 			return name;
// 		}
// 	}
// })("Nicholas");

let person = ((name) => ({
	getName: function() {
		return name;
	}
}))("wilon");

console.log(person.getName());