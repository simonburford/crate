# Crate

## Installation
``` bash
yarn add https://github.com/simonburford/crate
```

## Usage
``` javascript
import Crate from 'crate';

const state = new Crate({
	foo: 'foo',
	bar: null,
	fooBar() {
		return `${this.foo} ${this.bar}`;
	},
});

console.log(state.foo) // foo

console.log(state.bar) // null

state.bar = 'bar!';

console.log(state.fooBar); // foo bar!
```