// let target = {};

// let proxy = new Proxy(target, {});

// proxy.name = "proxy";

// console.log(proxy.name);
// console.log(target.name);

// target.name = "target";

// console.log(proxy.name);
// console.log(target.name);



let target = {
	name: "target"
};

let proxy = new Proxy(target, {

	set(trapTarget, key, value, receiver) {
		if (! trapTarget.hasOwnProperty(key) ) {
			if (isNaN(value)) {
				throw new TypeError("属性必须是数字");
			}
		}
		return Reflect.set(trapTarget, key, value, receiver);
	}
});

proxy.count = 1;
console.log(proxy.count);
console.log(target.count);


proxy.name = "proxy";
console.log(proxy.name);
console.log(target.name);

// proxy.noexist = "error";
// console.log(proxy.name);
// console.log(target.name);

proxy.noexits = 123;
console.log(proxy.noexits);
console.log(target.noexits);
