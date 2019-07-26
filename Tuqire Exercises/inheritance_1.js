// *Exercise 1*

// Create models for different kinds of animals. Your code should use prototypes and prototype inheritance.

// The animals:

// 1) Cat
// 2) Dog
// 3) Cow

// Each animal should have the following attributes:

// 1) `name` (each animal can have it’s own name, defaults to `John Doe`)
// 2) `makeSound()` (logs `meow`, `wuff`, `moo` for respective animals)
// 3) `sayGreeting()` (logs `<makeSound()>, my name is <name>`)

// Inheritance in JS
//     JS is loosely typed, 
//     what matters about an object is what it can do, not where it came from."
//     Objects inherit from other objects


//     Important words are `prototype`
//      New function Object
//          Is given a prototype property
//              whose value is an object
//                  containing a constructor property
//                      whose value is the new function object

//     The prototype object is the place where the inherited traits are to be deposited
//     The constructor 

//     var PrototypeObject = function () {
//         this.name = 'Prototype Name';
//         this.behaviour = 'Prototype Behaviour';
   
//     }
//     PrototypeObject.prototype.getName = function () {
//         console.log(this.name);
//     } 

//     var prototypeInstance = new PrototypeObject;
//     prototypeInstance.getName();


var Animal = function (name, sound) {
    this.name = name; // KM Don't know how to default to 'John Doe'
    this.sound = sound;
   
}
Animal.prototype.getName = function () {
    console.log(this.name);
} 
Animal.prototype.makeSound = function () {
    console.log(this.sound);
} 
Animal.prototype.sayGreeting = function() {
    console.log(this.sound + ', my name is ' + this.name); // KM Don't know how to 
}

var Cat = new Animal ('Mr Pickles','miaow');
Cat.getName();
Cat.makeSound();
Cat.sayGreeting();

var Dog = new Animal ('Riley','wuff');
Dog.getName();
Dog.makeSound();
Dog.sayGreeting();

var Cow = new Animal ('Daisy','moo');
Cow.getName();
Cow.makeSound();
Cow.sayGreeting();

var Test = new Animal (,'help');
Cow.getName();
Cow.makeSound();
Cow.sayGreeting();