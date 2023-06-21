let PersonType = class PersonClass {

	constructor(name) {
		this.name = name;
	}

	sayName() {
		console.log(this.name);
	}

};

console.log(typeof PersonType);
console.log(typeof PersonClass);

