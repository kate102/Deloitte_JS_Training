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

var findDuplicates = function (inputArray) {
    console.log('Input Array is ',inputArray)
    var setOfSingletons = new Set();
    var setOfDuplicates = new Set();

    inputArray.forEach(function (element) {
        // If is is in singleton then move to duplicates
        console.log('Checking element',element)

        // Nowhere Yet, add to singles
        if (!setOfSingletons.has(element) && !setOfDuplicates.has(element) ) 
        {
            setOfSingletons.add(element);
        }
        // In singles already, add to doubles and remove from singles
        else if (setOfSingletons.has(element) ) 
        {
            setOfDuplicates.add(element);
            setOfSingletons.delete(element);
        }
        console.log('Singletons are ',setOfSingletons);
        console.log('Duplicates are ',setOfDuplicates);
    })

    return returnArray;
    
}

var findPermutationStrings = function (inputString ) {
    let n = inputString.length
    numberOfPermutations = n*(n+1)/2.
    console.log(numberOfPermutations)
}
var makeStrings = function (inputString) {

    var sortedString = sortStr(inputString);
    var initialArray = createArray(sortedString);
    var returnArray = findUniqueChars(initialArray);
    if (containsOnlyUniqueChars(inputString,returnArray))
    {
        console.log('----- Finised -------');
        return returnArray;
    } else {
        // OK So I need a list of duplicates
        // and all of the permutations of the non duplicates
        var tempArray = findDuplicates(initialArray);
        var setOfSingletons = tempArray[0];

    }

}

// firstHit('sam');
findPermutationStrings('ab');