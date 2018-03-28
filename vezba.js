1. /*Write a function to check whether the `input` is a string or not.

"My random string" -> true
12 -> false*/

var result = function trueOrFalse(string) {
    if (typeof string === "string") {
        return true
    } else return false

}
console.log(result("My random string"))

/*Write a function to check whether a string is blank or not.

"My random string" -> false
" " -> true
12 -> false
false -> false*/

var result = function (string) {
    if (string.length === 0) {
        return true
    } else return false

}

console.log(result("My random string"))

/*Write a function that concatenates a given string n times (default is 1).
    "Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"*/

var result = function (string, n) {
    var sum = "";
    for (var i = 0; i <= n; i++) {
        sum += string;
    }
    return sum;
}
console.log(result("Ha", 3))

/*Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2*/

var result = function (string, p) {
    var sum;
    var counter = 0;
    for (var i = 0; i < string.length; i++) {
        sum = string[i];
        if (sum === p) {
            counter++
        }
    }
    return counter
}
console.log(result("My random string", "n"))

/*Write a function to find the position of the first occurrence of a character in a string.
The result should be in human numeration form.If there are no occurrences of the character, the function should return -1.*/

var result = function (string, p) {
    for (var i = 0; i < string.length; i++) {
        var element = string[i]
        if (element === p) {
            return i + 1
        }
    }
    return -1

}
console.log(result("My random string", "n"))

/*Write a function to find the position of the last occurrence of a character in a string.
The result should be in human numeration form.If there are no occurrences of the character, function should return -1.*/

var result = function (string, p) {
    for (var i = string.length - 1; i >= 0; i--) {
        var element = string[i]
        if (element === p) {
            return i + 1
        }
    }
    return -1
}
console.log(result("My random string", "n"))

/*Write a function to convert string into an array.Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/
var result = function (string) {
    var sum = [];
    for (var i = 0; i < string.length; i++) {
        var element = string[i]
        if (string[i] === " ") {
            element = null
        }
        sum[i] = element
    }
    return sum;
}
console.log(result("My random string"))



/*Write a function that accepts a number as a parameter and checks if the number is prime or not.
    Note: A prime number(or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.*/

var result = function (num) {
    if (num === 1) {
        return false
    } else if (num === 2) {
        return true
    }
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}
console.log(result(6))

/*Write a function that replaces spaces in a string with provided separator.If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
"My random string", "+" -> "My+random+string"
"My random string" -> "My-random-string"
*/

var result = function (string, separator) {
    var separator = separator || "-"
    var sum = "";
    for (var i = 0; i < string.length; i++) {
        var element = string[i]
        if (element === " ") {
            element = separator;
        }
        sum += element;
    }
    return sum
}
console.log(result("My random string", "$"))

/*Write a function to get the first n characters and add “...” at the end of newly created string.*/

var result = function (string, n) {
    var dots = "..."
    var sum = ""
    for (var i = 0; i <= n; i++) {
        var element = string[i]
        if (i === n) {
            element = dots
            sum += element
            break
        }
        sum += element
    }
    return sum
}
console.log(result("My random string", 7))

/*Write a function that converts an array of strings into an array of numbers.Filter out all non - numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

var result = function (array) {
    var sum = []
    var positionFixer = 0;
    for (var i = 0; i < array.length; i++) {
        var element = parseFloat(array[i])
        if (!isNaN(element) && isFinite(element)) {
            sum[i - positionFixer] = element
        } else {
            positionFixer++
        }

    }
    return sum
}
console.log(result(["1", "21", undefined, "42", "1e+3", Infinity]))

/*Write a function to calculate how many years there are left until retirement based on the year of birth.
Retirement for men is at age of 65 and for women at age of 60. If someone is already retired, a proper message should be displayed.*/

function calculateAge(yearOfBirth) {
    var age = parseFloat(2018 - yearOfBirth);
    return age
}

function isInReitrement(age, gender) {
    gender = gender || 'm';

    if (gender === 'm') {
        return age >= 65
    } else if (gender === 'f') {
        return age >= 60
    }
}

function Reintrement(yearOfBirth, gender) {
    var age = calculateAge(yearOfBirth);
    var gender = gender || "m";

    if (isInReitrement(age, gender)) {
        return "person is in retirement"
    }
    if (gender === "m") {
        return 65 - age;
    } else {
        return 60 - age;


    }


}

var output = Reintrement(1950, "f")


console.log(output);



/*Write a function to humanize a number(formats a number to a human - readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th

Hint: num % 100 >= 11 && num % 100 <= 13
*/

/*
Write a program that checks if a given element e is in the array a. 
Input:  e = 3, a = [5, -4.2, 3, 7]
Output: yes

Input:  e = 3, a = [5, -4.2, 18, 7]
Output: no
*/

function checkArray(array, n) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === n) {
            return true
        }
    }
    return false
}
console.log(checkArray([5, -4.2, 3, 7], 3))

/*Write a program that multiplies every positive element of a given array by 2.
Input array: [-3, 11, 5, 3.4, -8]
Output array: [-3, 22, 10, 6.8, -8]
*/

function multiplies(array) {
    var newArray = []
    for (var i = 0; i < array.length; i++) {
        if (array[i] <= 0) {
            newArray[i] = array[i]
        } else {
            newArray[i] = array[i] * 2
        }
    }
    return newArray
}
console.log(multiplies([-3, 22, 10, 6.8, -8]))

/*Write a program that finds the minimum of a given array and prints out its value and index.
Input array: [4, 2, 2, -1, 6]
Output: -1, 3
*/

function multiplies(array) {
    var minElement = []
    var trenutniMinimum = array[0];
    var position = 0;
    for (var i = 0; i < array.length; i++) {
        var trenutniElement = array[i]
        if (trenutniMinimum > trenutniElement) {
            trenutniMinimum = trenutniElement;
            position = i

        }
    }
    minElement = [e, position]
    return minElement
}
console.log(multiplies([4, 2, 2, -1, 6]))

console.log(multiplies([4, 2, 2, 5, 6]))

/*Write a program that finds the second largest number and prints out its value.
Input array: [4, 2, 2, -1, 6]
Output: 2 */

function secLargest(array) {
    var e = []
    var arr = array[0];
    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (arr < element) {
            arr = element;
            e = arr
            return e
        }
    }
    


}
console.log(secLargest([4, 2, 2, -1, 6]))



Write a program that calculates the sum of positive elements in the array.
Input array: [3, 11, -5, -3, 2]
Output: 16


Write a program that checks if a given array is symmetric.An array is symmetric if it can be read the same way both from the left and the right hand side.
Input array: [2, 4, -2, 7, -2, 4, 2]
Output: The array is symmetric.

Input array: [3, 4, 12, 8]
Output: The array isn’t symmetric.


Write a program that intertwines two arrays.You can assume the arrays are of the same length.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 3, 5, 8, 6, 11, 2, 9]


Write a program that concatenates two arrays.
Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
Output array: [4, 5, 6, 2, 3, 8, 11, 9]


Write a program that deletes a given element e from the array a.
    Input: e = 2, a = [4, 6, 2, 8, 2, 2]
Output array: [4, 6, 8]


Write a program that inserts a given element e on the given position p in the array a.If the value of the position is greater than the array length, print the error message.
    Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
Output: [2, -2, 33, 78, 12, 5, 8]


