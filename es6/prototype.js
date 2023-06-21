const PersonPrototype = {
	greet() {
		console.log(`你好，我的名字是${this.name}!`);
	}
};

function Person(name) {
	this.name = name;
}

Object.assign(Person.prototype, PersonPrototype);

const reuben = new Person("Reuben");
reuben.greet();