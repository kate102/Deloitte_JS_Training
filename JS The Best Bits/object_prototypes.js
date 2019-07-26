// Every object is linked to a propotype object from which it inherits properties
// Object.prototype is the object that all object literals inherit from
// Object.prototype comes standard with JavaScript

// When you create a new object you select which object should be its prototype


// If the function create doesn't exist
// Define it as a function that takes an arguement
// The arguement is an existing object
// A function object is initialised
// It is then set to be a prototype of the existing object
// and returned

// this is horrible, but it works, the original object is not affected by changes to the new one

if (typeof Object.create != 'function') {
    Object.create = function (objectToBeCreated) {
        var FunctionToCreate = function () {};
        FunctionToCreate.prototype = objectToBeCreated;
        return new FunctionToCreate();
    };
};

var objectThing = {
    name: 'Kate',
    delegatedThing: 'delegatedThing',
}

var anotherThing = Object.create(objectThing);

console.log(objectThing.name);
console.log(anotherThing.name);

anotherThing.name = 'Stewart';

console.log(objectThing.name);
console.log(anotherThing.name);


// Delegation
var yetAnotherThing = Object.create(anotherThing);
var sameAgain = Object.create(yetAnotherThing);
console.log(sameAgain.name);
console.log(sameAgain.delegatedThing);
console.log(sameAgain.undefinedThing);