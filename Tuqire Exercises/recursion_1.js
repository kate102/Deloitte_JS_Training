// RECURSIVE FUNCTIONS

// Write a function which deep joins an array of numbers, turning then into a string.

// Example:

// ```fn([3, 5, 7, 9]) === '3,5,7,9'
// fn([3, 4, [1, 2, 7, [10, 15]], 6], '-') === '3-4-1-2-7-10-15-6'```


    // A function is a modular unit
    // It is used for information hiding, code reuse and composition

var functionName = function (args) {
    // do something with args
}

var unpackRecursiveArray = function ( recursiveArray, separator = ',' ) {
    console.log('Initial Array - ',recursiveArray)
    var returnString =''
    console.log(separator)
    recursiveArray.forEach( function (element) {
        console.log(separator)
        returnString += element + separator;
        console.log(returnString)
    })
    returnString = returnString.slice(0,returnString.length-1)
    console.log('Becomes final string - ',returnString);

    return returnString; 
}


// unpackRecursiveArray([1,2,3],'-') == '1-2-3' ? console.log('Success') : console.log('Fail') 

// unpackRecursiveArray([[3, 4, [1, 2, 7, [10, 15]], 6]]) == '3,4,1,2,7,10,15,6' ? console.log('Success') : console.log('Fail') 

// unpackRecursiveArray([[3, 4, [1, 2, 7, [10, [15]]], 6]]) == '3,4,1,2,7,10,15,6' ? console.log('Success') : console.log('Fail') 

unpackRecursiveArray([[3, 4, [1, 2, 7, [10, [15]]], 6]],'*') == '3*4*1*2*7*10*15*6' ? console.log('Success') : console.log('Fail') 

