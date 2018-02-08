// Write a function that calculates a number of appearances of a given number in a given array.

function numberOfNumbers(s,l) {

    var counter=0;
    var s = s + "";
    var l = l + "";
     
     for (i = 0; i < s.length; i++) {
 
         if(s[i] === l) {
 
             counter= counter + 1;
         }
     }
 
     return counter;
 
 }
 
 console.log(numberOfNumbers(112456, 1));
