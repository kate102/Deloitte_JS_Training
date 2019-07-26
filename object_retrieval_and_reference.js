// Values can be rerieved using the [] notation or the . notation

// Defaults are set using ||




var objectThing = {
     name: 'Kate',
}

var surname = objectThing.surname || 'Morris'
var firstName = objectThing.name || 'Susan'

console.log(surname);
console.log(firstName);

// Objects are passed by reference, THEY ARE NEVER COPIED!!!

var newObjectThing = objectThing;

newObjectThing.nickname = 'Gorgeous';
console.log(objectThing.nickname);