// Write a function that checks if a given number is a three digit long number.



function numberMax(a) {

    if (a>99 && a<1000) {
        return "number has 3 digits"
    } else {
        return "number doesn't have 3 digits"
    }

}

console.log(numberMax(223));