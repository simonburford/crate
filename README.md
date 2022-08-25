# Crate

A simple state object for Vue 2

### Usage
``` javascript
import Crate from 'crate';

const JohnSmith = new Crate({
	firstName: 'John',
	lastName: null,
	fullName({ firstName, lastName }) {
		return `${firstName} ${lastName}`;
	},
});

console.log(JohnSmith.firstName) // John

console.log(JohnSmith.lastName) // null

JohnSmith.lastName = 'Smith';

console.log(JohnSmith.fullName); // John Smith
```