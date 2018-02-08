// Write a program that checks if a given array is symmetric. An array is symmetric if it can be read the same way both from the left and the right hand side.   
// Input array: [2, 4, -2, 7, -2, 4, 2]
// Output: The array is symmetric.

// Input array: [3, 4, 12, 8]
// 	Output: The array isn’t symmetric.


function symmetric(a) {

    for (i = 0; j = a.length - 1; i < a.length && j >= 0; i++; j--) {

        if (a[i] !== a[j]) {
                    return 'The array isn’t symmetric'
                }

        // for (j = a.length - 1; j >= 0; j--) {
        //     if (a[i] !== a[j]) {
        //         return 'The array isn’t symmetric'
        //     }
        // }
    }

    return 'The array is symmetric.';

}

console.log(symmetric([2, 4, -2, 7, -2, 4, 2]))