// Write a function that calculates a number of digits of a given number.



function numberOfDigits(n) {

    var n = n + "";
    
    return n.length;

}

console.log(numberOfDigits(12234));