// Write a program that multiplies every positive element of a given array by 2.
// Input array: [-3, 11, 5, 3.4, -8]
// Output array: [-3, 22, 10, 6.8, -8]

function elementMulty (a) {

for (i=0; i<a.length; i++) {

if(a[i]>0) { 
    a[i]= a[i]*2
}

}

return a;
}

console.log(elementMulty ([-3, 11, 5, 3.4, -8]));