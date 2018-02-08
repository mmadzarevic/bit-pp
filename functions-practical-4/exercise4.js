// Write a program that finds the first element larger than minimum and prints out its value. 
// Input array: [4, 2, 2, -1, 6]
// Output: 2

function elementMulty(a) {

    var min = a[0];
    var max = a[0];
    var index;
    var min2=a[0];
    var i;
    var k;
    var j;

    for (j = 1; j < a.length; j++) {

        if (a[j] > max) {
            max = a[j];
        }

    }

    for (i = 1; i < a.length; i++) {

        if (a[i] < min) {
            min = a[i];
            index = i;
        }

    }

    a[index] = max;

    for (k = 1; k < a.length; k++) {

        if (a[k] < min2) {
            min2 = a[k];
        }

    }

    return min2;
}

console.log(elementMulty([4, 2, 2, -1, 6, 1]));