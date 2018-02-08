// Write a function that draws a horizontal chart representing three given values. For example, if values are 5, 3, and 7, the function should draw:




function arithmeticMean(a, b, c) {

    var firstRow = "";
    var midRow = "";
    var lastRow = "";

    for (i = 0; i < a; i++) {
        firstRow = firstRow + '*';
    }
    for (j = 0; j < b; j++) {
        midRow = midRow + '*';
    }

    for (k = 0; k < c; k++) {
        lastRow = lastRow + '*';
    }


    return firstRow + '\n' + midRow + '\n' + lastRow;
}

console.log(arithmeticMean(5, 6, 2));