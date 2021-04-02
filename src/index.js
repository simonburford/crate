import Vue from 'vue';

const CrateProxy = {
	get(target, prop, receiver) {
		if (prop in target) {
			let value = target[prop];
			if (value instanceof Function) {
				return value.apply(new Proxy(target, CrateProxy));
			}
			return value;
		}
		return Reflect.get(target, prop, receiver)
	},
	set(target, prop, value, receiver) {
		Vue.set(target, prop, value);
		return true;
	}
};

export default class Crate {
	constructor(contents = {}) {
		this.contents = new Vue.observable(contents ?? {});
		return new Proxy(this.contents, CrateProxy);
	}
}