
var f=0, g=1;
for( var i=0; i<=15; i++) {
    console.log(f);
    f= f+g;
    g= f-g;

}

// 0 f=1 g=0
// 1 f=1 g=1
// 2

var global = 1;

function myFunc() {
   var local = 2;
   global++;
   return global;
}
console.log(myFunc(15))

var x = 5;
var y = 3;
var min = (x < y) ? x : y;

console.log(min)

function sum(num1, num2) {
    num1 = num1 || 0;
    num2 = num2 || 0;
 
    return num1 + num2;
 }
 
 var result = sum(5);
 console.log(result)