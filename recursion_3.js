// Given a string, count all the unique substrings you can create starting 
// and ending with same character.

// fn('sam') === 3
// `s`, `a`, `m`

// fn('abcab`) === 7
// `a`, `b`, `c`, `abca`, `bcab`, `acba`, `bacb`

// Find length and duplicates

var sortStr = function (inputString) {
    return inputString.split('').sort().join('');
}

var createArray = function (inputString) {
    let returnArray = [];
    var i = inputString.length;
    while (i--) {
        returnArray.push(inputString.charAt(i));
    }
    return returnArray;
}

var findUniqueChars = function (inputArray) {
    return [...new Set(inputArray)];
}

var containsOnlyUniqueChars = function (inputString,returnArray) {
    return inputString.length === returnArray.length;
}

// var findDuplicates = function (inputArray) {
//     console.log('Input Array is ',inputArray)
//     var setOfSingletons = new Set();
//     var setOfDuplicates = new Set();

//     inputArray.forEach(function (element) {
//         // If is is in singleton then move to duplicates
//         console.log('Checking element',element)

//         // Nowhere Yet, add to singles
//         if (!setOfSingletons.has(element) && !setOfDuplicates.has(element) ) 
//         {
//             setOfSingletons.add(element);
//         }
//         // In singles already, add to doubles and remove from singles
//         else if (setOfSingletons.has(element) ) 
//         {
//             setOfDuplicates.add(element);
//             setOfSingletons.delete(element);
//         }
//         console.log('Singletons are ',setOfSingletons);
//         console.log('Duplicates are ',setOfDuplicates);
//     })
//     return returnArray; 
// }

// var findPermutationStrings = function (inputString ) {
//     console.log('inputString', inputString)
//     let n = inputString.length;
//     var totalPermutations = 1;
//     while (n--) {
//         if (n > 0) {totalPermutations *= n} 
//     }
//     console.log('totalPermutations', totalPermutations)
//     return totalPermutations;
// }

// Take off the first char and if the length is 2 then create 2 strings
// Option 1
var makeSubstrings = function (inputArray) {
    console.log('In makeSubstrings with an input array of ',inputArray);
    let returnStrings = [];

  

    // Turn it into an array
    // Remove the next letter, if it has a pair, strip the other out and recure the rest to make internal strings then make a substring
    let nextChar = inputArray.pop();
    if (inputArray.indexOf(nextChar))
    {
        let newArray = inputArray.strip(nextChar)
        console.log('newArray is ',newArray);
    }
    console.log('Stripping off ',nextChar)

    // while ( inputArray.length > 2)
    // {
    //     returnStrings = makeSubstrings(inputArray);
    // }
    // if (inputArray.length  == 2){
    //     let string1 = nextChar + inputArray[0] + inputArray[1];
    //     let string2 = nextChar + inputArray[1] + inputArray[0];
    //     returnStrings.push(string1);
    //     returnStrings.push(string2);
    //     console.log('So far return strings is ',returnStrings)
    //     return returnStrings;
    // } else {
    //     console.log('Repopulate')
    // }
    
}

var makeStrings = function (inputString) {
    // Get the single chars out first
    console.log('The input string was ',inputString);

    // Check for no duplicates
    var returnArray = findUniqueChars(inputString);
    // console.log('The return array is ',returnArray);
    if (containsOnlyUniqueChars(inputString,returnArray)){
        console.log('The input string was "',inputString,'" and this has generated the following array ', returnArray);
    } else {
        // make substrings
        // let stringLength = inputString.length;
        // findPermutationStrings(inputString ) ;
        let inputArray = createArray(inputString);
        console.log('The input array is ',inputArray);
        let substringArray = makeSubstrings(inputArray);
        returnArray.push(substringArray);

    }
}


// Remove first char, if it has a duplicate then make an array of permutations of the rest
// to make this array remove the first char and append it to each of the permutations of the rest

// makeStrings('sam');
makeStrings('abcc');
// ab => ab and ba 2 => 2
// abc => abc, acb, bac, bca, cab, cba 3 => 6
// abcd => abcd