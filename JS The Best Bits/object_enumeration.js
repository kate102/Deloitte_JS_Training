// Enumeration ; the action of mentioning a number of things one by one.

// The for-in loop does this but if you do it on an object then it will go 
// through all of the inherited properties as well as 
// the ones you know about.


var objectThing = {
    name: 'Kate',
    delegatedThing: 'delegatedThing',
}

var everything;
for ( everything in objectThing) {
    console.log(everything);
}

for ( everything in objectThing) {
    if (typeof objectThing[everything] != 'function' ){
        console.log(everything);
    }

}
