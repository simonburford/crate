import Vue from 'vue';

const CrateProxy = {
	get(target, prop, receiver) {
		if (prop in target) {
			let value = target[prop];
			if (value instanceof Function) {
				return value(target);
			}
			return value;
		}
		return Reflect.get(target, prop, receiver)
	},
	set(target, prop, value) {
		Vue.set(target, prop, value);
		return true;
	}
};

export default class Crate {
	constructor(contents = {}) {
		const observable = Vue.observable(contents);
		return new Proxy(observable, CrateProxy);
	}
}