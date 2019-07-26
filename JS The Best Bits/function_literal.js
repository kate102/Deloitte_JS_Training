// A function literal is the same as an object literal 
// except it has the word 'function' and () in it

// It has 4 parts
// 1. The reserved word function
// 2. The function name, note that this is optional (anonymous)
// 3. The parameters, zero or more
// 4. The body of the function in {}

var theFunctionName = function ( theParameters ) { 
    theBodyOfTheFunction 
};

// Functions cxan be defined inside other functions

var outsideFunction = function () {
    var insidefunction = function () {
        console.log('How does this work?');
    }
    return insidefunction();
}

outsideFunction()

function foo (a,b) {
    function bar() {
        return a+b;
    }
    return bar();
}

console.log(foo (1,2));
