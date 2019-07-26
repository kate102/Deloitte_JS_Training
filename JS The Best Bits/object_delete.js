// Delete will not remove properties or values up the chain or down the chain!


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
anotherThing.name = 'Stewart';
console.log(objectThing.name);
console.log(anotherThing.name);

delete anotherThing.name;

console.log(objectThing.name);
console.log(anotherThing.name);

anotherThing.name = 'Stewart';
delete objectThing.name;

console.log(objectThing.name);
console.log(anotherThing.name);
