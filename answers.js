/* Exercise 1
uses its forEach method to print only the positive numbers
*/

var array1 = [1, 5, -9, -10];

function printPositives(number) {
    if (number > 0) {
        console.log(number);
    }
}

// array1.forEach(printPositives);

/* Exercise 2
getPositives that takes an array and uses its filter method to 
return a new array with only the positive numbers
*/

function getPositives(number) {
    if (number > 0) {
        return number;
    }
}

var newArray1 = array1.filter(getPositives);

// console.log(newArray1)


/* Exercise 3
filterArray that takes an array AND a function as arguments
return a new array that contains only the elements 
where the passed function returns a truthy value
*/

var array3 = ["yes", true, 0, 1, false, 99]

function filterArray(arrayName, functionName) {
    return arrayName.filter(functionName);
}

function isTruthy(val) {
    if (val) {
        return true;
    }
}

var newArray3 = filterArray(array3, isTruthy);

// console.log(newArray3);

/* Exercise 4
longestWord that takes a string as argument, 
and returns the longest word in the string
*/

function maxWordLength(previousWord, currentWord) {
    if (currentWord.length > previousWord.length) {
        return currentWord;
    }
    else {
        return currentWord = previousWord;
    }
}

function longestWord(string) {
    return string.split(" ").reduce(maxWordLength);
}

var sentence4 = "These are some looooooooooooooong words";
// console.log(longestWord(sentence4));

/* Exercise 5
countVowels that takes a string 
and returns the number of vowels in the string
*/

var sentence5 = "a e e e i i o aaaaaasstv";

function countVowels(string){
    
    var arraySub = string.split("");

    return arraySub.reduce(function(count, currentLetter) {
        if (["a", "e", "i", "o" ,"u"].indexOf(currentLetter) !== -1) {
            return count + 1;
        }
        return count;
    }
    ,0);
}

// console.log(countVowels(sentence5));

/* Exercise 6
highLow that takes an array of numbers, 
and returns an object 
with a property highest containing the highest number, 
and a property lowest containing the lowest number
*/

var array6 = [1, -10, 20, 40, -5];

function highLowSub(acc, curr) {
    if (curr > acc.highest) {
        acc.highest = curr;
    }
    else if (curr < acc.lowest){
        acc.lowest = curr;
    }
    return acc;
}

function highLow(myArray) {
    return myArray.reduce(highLowSub, 
    {highest:-Infinity, lowest:Infinity});
}

// console.log(highLow(array6))

/* Exercise 7
highLowTwo that takes an array of numbers, 
and returns the higest, second highest, 
lowest, and second lowest numbers.
*/

var array7 = [1, -10, 20, 40, -5];

function highLowTwoSub(acc, curr) {
    if (curr > acc.highest) {
        acc.secondHighest = acc.highest;
        acc.highest = curr;
    }
    else if (curr < acc.lowest) {
        acc.secondLowest = acc.lowest;
        acc.lowest = curr;
    }
    else if (curr > acc.secondHighest) {
        acc.secondHighest = curr;
    }
    else if (curr < acc.secondLowest) {
        acc.secondLowest = curr;
    }
    return acc;
}

function highLowTwo(myArray) {
    return myArray.reduce(highLowTwoSub, 
    {highest:-Infinity,
    secondHighest:-Infinity-1,
    secondLowest:Infinity+1,
    lowest:Infinity
    });
}

// console.log(highLowTwo(array7))

/* Exercise 8
countChars that takes a string, 
and returns an object where the keys are letters, 
and the value is the number of times that letter appears.
*/



function countChars(string) {
    var stringArray = string.split("").filter(function(x) {
        if (x !== " ") {
            return x;
        }
    });

    return stringArray.reduce(function(acc, curr) {

        if (!acc[curr]) {
            acc[curr] = 1;
        }
        else {
            acc[curr] += 1;
        }
        return acc;
    }, {});
}

console.log(countChars("hello worldjjjjjjjjjjj"));










/*
function countCharsSub(acc, curr) {
    console.log(acc);
    console.log(curr);
    acc.curr = "OK";
    //acc.curr = 1;
    //acc.prop2 = 2;
    return acc;
}

function countChars(string) {
    return string.split("").reduce(countCharsSub,{});
}

console.log(countChars("hello world"));
*/