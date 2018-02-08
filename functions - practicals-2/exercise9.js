// Write a function that calculates the sum of odd elements of a given array. 


function oddSum(a) {

    var sum = 0;

    for (i = 0; i < a.length; i++) {

        if (a[i] % 2 === 1) {
            sum = sum + a[i];
        }

    }

    return sum;
}

console.log(oddSum([1, 2, 3, 4, 6, 8, 7]));