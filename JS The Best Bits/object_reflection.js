// typeof enables you to interogate an object
// this can be problematic as everything in a prototype can have a type, but it might not be what you want


var objectThing = {
    name: 'Kate',
    delegatedThing: 'delegatedThing',
}

console.log('This should be function ',typeof objectThing.toString);

// When you are reflecting yu are looking for values so reject all functions
// hasOwnProperty returns true if the object has a perticular property
console.log('This should be false ',objectThing.hasOwnProperty(toString));
console.log('This should be true ',objectThing.hasOwnProperty('name'));
console.log('This should be false ',objectThing.hasOwnProperty('madeUpProperty'));
