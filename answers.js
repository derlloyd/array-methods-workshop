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

console.log(countVowels(sentence5));

